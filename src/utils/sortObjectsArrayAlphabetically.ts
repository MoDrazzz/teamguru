type EnsureStringProperty<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? string : T[P]
}

export function sortObjectsArrayAlphabetically<T, K extends keyof T>(
  array: EnsureStringProperty<T, K>[],
  property: K,
) {
  // Type assertions are safe here.
  const sortedArray = array.sort((objectA, objectB) => {
    return (objectA[property] as string).localeCompare(
      objectB[property] as string,
    )
  })

  return sortedArray
}
