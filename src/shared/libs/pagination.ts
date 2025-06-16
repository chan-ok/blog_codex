export function generatePostIndex<T extends { id: string }>(
  posts: T[],
  perPage = 10,
): string[][] {
  const sorted = [...posts].sort(
    (a, b) =>
      new Date(b.createdAt as unknown as string).getTime() -
      new Date(a.createdAt as unknown as string).getTime(),
  ) as (T & { createdAt: string })[]
  const pages: string[][] = []
  for (let i = 0; i < sorted.length; i += perPage) {
    pages.push(sorted.slice(i, i + perPage).map((p) => p.id))
  }
  return pages
}

export function getPostsByPage<T extends { createdAt: string }>(
  posts: T[],
  page: number,
  perPage = 10,
): T[] {
  if (page < 1) return []
  const sorted = [...posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  const start = (page - 1) * perPage
  return sorted.slice(start, start + perPage)
}
