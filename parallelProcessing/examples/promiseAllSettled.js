const fetch = require("node-fetch");

module.exports = async () => {
  const urls = [
    "https://api.github.com/users/RapTho",
    "https://no-such-url",
    "https://uselessfacts.jsph.pl/random.json",
  ];

  // Requires Node.js v12.0+
  const response = await Promise.allSettled(urls.map((url) => fetch(url)));

  return response;
};
