const quoteOfDay = document.querySelector(".quoteOfDay");
const author = document.querySelector(".author");

const api_url = "https://api.quotable.io/random"

async function generate(url) {
    const response = await fetch(url);
    let data = await response.json();

    quoteOfDay.innerHTML = `"${data.content}"`;
    author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quoteOfDay.innerHTML, "Tweet Window", "width = 600, height = 300" );
}