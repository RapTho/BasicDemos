const parallelVsSequential = require("./examples/parallelVsSequential");
const promiseAllSettled = require("./examples/promiseAllSettled");

/*
 *   Choose example:
 *   0 = Parallel vs sequential
 *   1 = Promise.allSettled
 */
const showExample = 1;

// Choose number of requests
const numRequests = 20;

const main = () => {
  switch (showExample) {
    case 0:
      parallelVsSequential(numRequests)
        .then(({ timer_p, timer_s }) => {
          console.log(`Fetching ${numRequests} resources took:
- Parallel: ${timer_p} ms
- Squential: ${timer_s} ms`);
        })
        .catch((err) => console.error(err));
      break;
    case 1:
      promiseAllSettled()
        .then((result) => console.log(result))
        .catch((err) => console.error(err));
      break;
    default:
      console.error("Wrong value for showExample");
      break;
  }
};

main();
