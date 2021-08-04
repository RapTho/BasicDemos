const fetch = require("node-fetch");

module.exports = async (numRequests) => {
  const requests = [];

  // Initialize array
  for (let i = 0; i < numRequests; i++) {
    requests.push("");
  }

  const urlToFetch = "https://api.chucknorris.io/jokes/random";

  // Parallel processing
  let promises = requests.map(() => fetch(urlToFetch));
  const startParallel = new Date().getTime();
  let responseParallel = await Promise.all(promises);
  await Promise.all(responseParallel.map((response) => response.json()));
  const stopParallel = new Date().getTime();

  // Sequential processing
  const startSeq = new Date().getTime();
  for (let i = 0; i < numRequests; i++) {
    const response = await fetch(urlToFetch);
    await response.json();
  }
  const stopSeq = new Date().getTime();

  return (timer = {
    timer_p: stopParallel - startParallel,
    timer_s: stopSeq - startSeq,
  });
};
