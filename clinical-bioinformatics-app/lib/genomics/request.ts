type CacheEntry<T> = {
  value: T;
  expiresAt: number;
};

const memoryCache = new Map<string, CacheEntry<unknown>>();

export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs = 12000
): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

export async function getCachedValue<T>(
  cacheKey: string,
  ttlMs: number,
  fetcher: () => Promise<T>
): Promise<T> {
  const cached = memoryCache.get(cacheKey) as CacheEntry<T> | undefined;
  const now = Date.now();

  if (cached && cached.expiresAt > now) {
    return cached.value;
  }

  const value = await fetcher();

  memoryCache.set(cacheKey, {
    value,
    expiresAt: now + ttlMs,
  });

  return value;
}