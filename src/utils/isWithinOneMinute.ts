export function isWithinOneMinute(timestamp: string): boolean {
  const timestampDate = new Date(timestamp)
  const currentTime = Date.now()
  const oneMinuteAgo = currentTime - 60000 // 60,000 milliseconds = 1 minute

  return (
    timestampDate.getTime() >= oneMinuteAgo &&
    timestampDate.getTime() <= currentTime
  )
}
