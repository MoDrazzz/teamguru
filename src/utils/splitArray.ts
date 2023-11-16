export function splitArray<T>(array: T[], size: number) {
  return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
    array.slice(i * size, i * size + size),
  )
}
