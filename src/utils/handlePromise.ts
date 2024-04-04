// https://dev.to/oieduardorabelo/javascript-handling-errors-like-go-3efk
export const handlePromise = async <P extends Promise<unknown>>(promise: P) => {
  try {
    const result = await promise
    return { error: null, result }
  } catch (e) {
    const error = e instanceof Error ? e : new Error('Unknown error')
    return { error, result: null }
  }
}
