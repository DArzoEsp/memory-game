const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {    
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid'); // container for all the images\
const score = document.getElementById('result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
let cnt = 0;

const createBoard = () => {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img'); // creates img element
        card.setAttribute('src', 'images/blank.png'); // makes each img default to blank.png
        card.setAttribute('data-id', i); // gives each img a unique id

        card.addEventListener('click', flipCard);

        gridDisplay.appendChild(card); // displays each randomized img
    }
}

createBoard();

function updateScore() {
    score.innerHTML = cnt;
    cnt++;
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cards[cardsChosenIds[0]];
    const optionSecondId = cards[cardsChosenIds[1]];

    console.log('check for a match!');

    if (optionOneId === optionSecondId) {
        alert('you clicked the same card');
    }

    if(cardsChosen[0] === cardsChosen[1]) {
        alert('you found a match!');
        optionOneId.setAttribute('src', 'images/white.png');
        optionSecondId.setAttribute('src', 'images/white.png');
        optionOneId.removeEventListener('click', flipCard);
        optionSecondId.removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        updateScore();
    } else {
        alert('not a match. try again');
        optionOneId.setAttribute('src', 'images/blank.png');
        optionSecondId.setAttribute('src', 'images/blank.png');
    }

    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length === (cardArray.length / 2)) {
        score.innerHTML = 'you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);

    console.log(cardsChosen);
    console.log(cardsChosenIds);
    console.log('clicked', cardId);

    this.setAttribute('src', cardArray[cardId].img);

    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

updateScore();