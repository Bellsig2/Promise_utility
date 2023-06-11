export default function PromiseUtility() {
  let results = [];
  let rejects = [];
  this.all = function (promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(
        (promise) => {
          promise.then((value) => {
            results.push(value);
            if (results.length === promises.length) {
              resolve(results);
            }
          });
        },
        (error) => reject(error)
      );
    });
  };
  this.any = function (promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(
        (promise) => {
          promise.then((value) => {
            resolve(value);
          });
        },
        (error) => {
          rejects.push(error);
          rejects.length === promises.length ? reject(error) : "";
        }
      );
    });
  };
  this.sequantial = function (promises) {
    promises.forEach(async (promise) => {
      let result = await promise;
      console.log(result);
    });
  };
}
