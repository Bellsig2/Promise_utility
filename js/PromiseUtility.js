function PromiseUtility() {
  this.promiseAll = function (promises) {
    let results = [];
    let promsie = new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then((value) => {
          results.push(value);
        });

        if (results.length === promises.length) {
          resolve(results);
        }
      }, reject);
    });
  };
}
