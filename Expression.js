const priceRegex = /^\$\d+(?:\.\d{2})?$/;

const validPrices = [
  "$14.99",
  "$1234567.00",
  "$.90"
];

const invalidPrices = [
  "$14",
  "$134213.89money",
  "$1.1a"
];

validPrices.forEach(price => {
  console.log(`${price}: ${priceRegex.test(price) ? "Valid" : "Invalid"}`);
});

invalidPrices.forEach(price => {
  console.log(`${price}: ${priceRegex.test(price) ? "Valid" : "Invalid"}`);
});