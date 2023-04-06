const button = document.querySelector('#js-new-quote');
button.addEventListener('click', getQuote);

const answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', showAnswer);

const shareButton = document.querySelector('#js-share');
shareButton.addEventListener('click', shareJoke);

const endpoint = 'https://v2.jokeapi.dev/joke/Any?safe-mode';

async function getQuote() {
    // console.log('It works!');
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        // console.log(json.question);
        displayQuote(json.setup);
        showAnswer(json.delivery);
    }
    catch (err){
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function showAnswer(quote) {
    const quoteText = document.querySelector("#js-answer-text");
    quoteText.textContent = quote;
}

function shareJoke() {
    alert('Text it to your friends!')
}

getQuote();