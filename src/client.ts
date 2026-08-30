export interface ClientOptions {
  baseUrl?: string;
  maxRetries?: number;
  actorId?: string;
}

export interface FetchResult<T> {
  status: number;
  data?: T;
  etag?: string;
  notModified?: boolean;
  snapshotRequired?: boolean;
}

export class AihotClient {
  private baseUrl: string;
  private maxRetries: number;
  private actorId?: string;

  constructor(options: ClientOptions = {}) {
    this.baseUrl = (options.baseUrl || "https://aihot.virxact.com").replace(/\/$/, "");
    this.maxRetries = options.maxRetries ?? 3;
    this.actorId = options.actorId;
  }

  public async fetchJson<T>(
    endpointPath: string,
    etag?: string
  ): Promise<FetchResult<T>> {
    const url = `${this.baseUrl}${endpointPath}`;
    let attempt = 0;

    while (true) {
      attempt++;
      const headers: Record<string, string> = {
        Accept: "application/json",
        "User-Agent": this.actorId
          ? `aihot-news-mirror/1.0 aihot-actor/${this.actorId}`
          : "aihot-news-mirror/1.0",
      };

      if (etag) {
        headers["If-None-Match"] = etag;
      }

      let res: Response;
      try {
        res = await fetch(url, { method: "GET", headers });
      } catch (err: any) {
        if (attempt <= this.maxRetries) {
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
          await new Promise((r) => setTimeout(r, delay));
          continue;
        }
        throw new Error(`Network fetch failed for ${url}: ${err.message}`);
      }

      if (res.status === 304) {
        return {
          status: 304,
          notModified: true,
          etag: res.headers.get("etag") || etag,
        };
      }

      if (res.status === 409) {
        return {
          status: 409,
          snapshotRequired: true,
        };
      }

      if (res.status === 429 || res.status === 503) {
        if (attempt <= this.maxRetries) {
          const retryAfterHeader = res.headers.get("Retry-After");
          let delayMs = 1000 * attempt;
          if (retryAfterHeader) {
            const parsedSec = parseInt(retryAfterHeader, 10);
            if (!isNaN(parsedSec)) {
              delayMs = parsedSec * 1000;
            } else {
              const parsedDate = Date.parse(retryAfterHeader);
              if (!isNaN(parsedDate)) {
                delayMs = Math.max(0, parsedDate - Date.now());
              }
            }
          }
          await new Promise((r) => setTimeout(r, delayMs));
          continue;
        }
        throw new Error(`Request failed with status ${res.status} after ${attempt} retries: ${await res.text()}`);
      }

      if (!res.ok) {
        const errorText = await res.text().catch(() => "");
        throw new Error(`HTTP error ${res.status} from ${url}: ${errorText}`);
      }

      const responseEtag = res.headers.get("etag") || undefined;
      const data = (await res.json()) as T;
      return {
        status: res.status,
        data,
        etag: responseEtag,
      };
    }
  }
}
