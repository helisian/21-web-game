let start = document.querySelector("#start")
let gameMain = document.querySelector(".gameMain")
let gamePlay = document.querySelector(".gamePlay")
let gameMainPlayerCards = document.createElement("div")
gameMainPlayerCards.setAttribute("class", "gameMainPlayerCard")
let gameMainPlayerScore = document.createElement("div")
gameMainPlayerScore.setAttribute("class", "gameMainPlayerScore")
let playerScoreTitle = document.createElement("h2")
playerScoreTitle.innerText = "SCORE"
let playerScore = document.createElement("h2")
let gameMainCompCards = document.createElement("div")
gameMainCompCards.setAttribute("class", "gameMainCompCards")
let gameMainCompScore = document.createElement("div")
gameMainCompScore.setAttribute("class", "gameMainCompScore")
let compScore = document.createElement("h2")
let compScoreTitle = document.createElement("h2")
compScoreTitle.innerText = "SCORE"
let hit = document.createElement("button")
hit.setAttribute("value", "HIT")
hit.innerText = "HIT"
let hitDiv = document.querySelector(".hit")
let stay = document.createElement("button")
stay.innerText = "STAY"
let stayDiv = document.querySelector(".stay")
let deckId = ""

try { 
        const fetchData = async (url, callback) => {
        await axios.get(url).then(res => callback(res.data)) 
    }
}catch(err) {console.log(err)}

const fetchDeckId = (data) => {
    let deckId = data.deck_id
}

const renderData = (data) => {

}

const renderScore = (data) => {

}

start.addEventListener("click", () => {
    gameMain.innerHTML = ""
    hitDiv.appendChild(hit)
    stayDiv.appendChild(stay)
    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", () => {})
    fetchData("https://deckofcardsapi.com/api/deck/${deckID/draw/?count=2",)
})
    



//https://deckofcardsapi.com/api/deck/${deckID/draw/?count=2



// How do you beat the dealer?
// By drawing a hand value that is higher than the dealer’s hand value
// By the dealer drawing a hand value that goes over 21.
// By drawing a hand value of 21 on your first two cards, when the dealer does not.

// How do you lose to the dealer? 
// Your hand value exceeds 21.
// The dealers hand has a greater value than yours at the end of the round

// Tie
// No Winner

//Card Values
// 2 through 10 count at face value, i.e. a 2 counts as two, a 9 counts as nine.
// Face cards (J,Q,K) count as 10.
// Ace can count as a 1 or an 11 depending on which value helps the hand the most.






// <button type="submit" id="hit" name="hit">HIT</button>
//<button type="submit" id="stay" name="stay">STAY</button>