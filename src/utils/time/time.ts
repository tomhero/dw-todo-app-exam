// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
export function sleep(second: number): Promise<void> {
  if (second <= 0 || Number.isNaN(second)) {
    return Promise.resolve();
  }
  return new Promise((resolve) => setTimeout(resolve, second * 1000));
}
