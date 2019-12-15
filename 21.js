let start = document.querySelector("#start")
let gameMain = document.querySelector(".gameMain")
let gamePlay = document.querySelector(".gamePlay")
let gameMainPlayerCards = document.createElement("div")
gameMainPlayerCards.setAttribute("class", "gameMainPlayerCard")
let gameMainPlayerScore = document.createElement("div")
gameMainPlayerScore.setAttribute("class", "gameMainPlayerScore")
let gameMainCompCards = document.createElement("div")
gameMainCompCards.setAttribute("class", "gameMainCompCards")
let gameMainCompScore = document.createElement("div")
gameMainCompScore.setAttribute("class", "ggameMainCompScore")
let stay = document.createElement("button")
let hit = document.createElement("button")


try { //Try runs once as page loads
    start.addEventListener("click", () => {
        gameMain.innerHTML = ""
        
        const fetchData = async (url, callback) => {
        await axios.get(url).then(res => { 
            callback(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    })
}catch(err) {
    console.log(err)

}




https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

https://deckofcardsapi.com/api/deck/${deckID/draw/?count=2



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