const quotes = [
    {
        quote: "내가 하고자 하지 않는 일을 남에게 시키지 마라(기소불욕물시어인)",
        author: "공자",
    },
    {
        quote: "미래를 계획하는 일도 필요하지만 가장 중요한 것은 오늘을 후회없이 사는 겁니다.",
        author: "박근호",
    },
    {
        quote:"아침에 눈을 떠서 어제보다 나은 하루를 만들지 않으면 실패한 것이다",
        author: "로버트 나델리",
    },
    {
        quote: "인생은 스스로 알아서 하지 않으면 아무도 아무것도 가르쳐 주지 않는다",
        author: "빌 게이츠",
    },
    {
        quote:"승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
        author: "하비스",
    },
    {
        quote:"오늘만큼은 후회없는 삶을 보내자",
        author: "Y.병헌",
    },
    {
        quote:"유튜브를 보는 것만큼 멍청해지는 건 없다.",
        author: "Y.병헌",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;