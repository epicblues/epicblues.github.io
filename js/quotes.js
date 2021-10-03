const quotes = [
  {
    quote:
      "추억은 기쁜 것이든 슬픈 것이든 항상 괴로운 것이다. 최소한 나한테는 그렇다. 그러나 그 괴로움은 또 달착지근한 것이다.",
    author: "도스토예프스키",
  },
  {
    quote:
      "외투를 입고 신발을 신고 다니는 이유는 바로 사람들 때문이에요. 사랑하는 나의 아가씨, 그런 경우 신발은 제 이름과 자존심을 지키기 위해서 필요한 것이랍니다.",
    author: "도스토예프스키",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
