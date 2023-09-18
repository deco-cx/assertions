export class TestContext {
  public fetch: typeof fetch;
  constructor(protected targetUrl: string) {
    this.fetch = (
      url: RequestInfo | URL,
      init: Parameters<typeof fetch>[1],
    ) => {
      return fetch(
        typeof url === "string" ? new URL(url, targetUrl) : url,
        init,
      );
    };
  }
}
