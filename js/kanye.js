//  we will use arrow function i this project
const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => displayQuotes(data));
};

const displayQuotes = (quote) => {
  const quoteContainer = document.getElementById("quote");
  quoteContainer.innerText = `"${quote.quote}"`;
};
