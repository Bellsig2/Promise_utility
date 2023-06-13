export const sleep = (timeout, promise) => {
    setTimeout(() => {
      promise.resolve();
    }, timeout);
  reject);
};
