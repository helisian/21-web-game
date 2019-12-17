let deckId = ""
let score = 0
let start = document.querySelector("#start")
let gameMain = document.querySelector(".gameMain")
let gamePlay = document.querySelector(".gamePlay")
let gameMainPlayerCards = document.createElement("div")
gameMainPlayerCards.setAttribute("class", "gameMainPlayerCards")
let gameMainPlayerScore = document.createElement("div")
gameMainPlayerScore.setAttribute("class", "gameMainPlayerScore")
let playerScoreTitle = document.createElement("h2")
playerScoreTitle.innerText = "YOUR SCORE"
let playerScore = document.createElement("h2")
let gameMainCompCards = document.createElement("div")
gameMainCompCards.setAttribute("class", "gameMainCompCards")
let gameMainCompScore = document.createElement("div")
gameMainCompScore.setAttribute("class", "gameMainCompScore")
let compScore = document.createElement("h2")
let compScoreTitle = document.createElement("h2")
compScoreTitle.innerText = "DEALER SCORE"
let hit = document.createElement("button")
hit.setAttribute("value", "HIT")
hit.innerText = "HIT"
let hitDiv = document.querySelector(".hit")
let stay = document.createElement("button")
stay.innerText = "STAY"
let stayDiv = document.querySelector(".stay")

try { 
    const fetchData = async (url, callback) => {
    await axios.get(url).then(res => callback(res.data))
    }

    const setCardValue = (data) => {
        switch(data) {
            case "JACK", "QUEEN", "KING":
                return 10
            case "ACE":
                if (score >= 13) {
                    return 1
                } else {
                    return 11
                }
            default:
                return Number(data)
        }
    }

    const renderData = (data) => {
        let card = data["cards"]
        card.forEach(el => {
            score += setCardValue(el.value)
            playerScore.innerText = score
            gameMainPlayerScore.appendChild(playerScore)
            let img = document.createElement("img")
            img.src = el.image
            gameMainPlayerCards.appendChild(img)
        })
    }

    const renderCompData = (data) => {
        let card = data["cards"]
        let score = 0
        card.forEach(el => {
            score += setCardValue(el.value)
            compScore.innerText = score
            gameMainCompScore.appendChild(compScore)
            let img = document.createElement("img")
            img.src = el.image
            gameMainCompCards.appendChild(img)
        })
    }
    
    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", (data) => deckId = data.deck_id)
    
    start.addEventListener("click", () => {
        gameMain.innerHTML = ""
        hitDiv.appendChild(hit)
        stayDiv.appendChild(stay)
        fetchData(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`, renderData)
        gameMainPlayerScore.appendChild(playerScoreTitle)
        gameMain.appendChild(gameMainPlayerCards)
        gameMain.appendChild(gameMainPlayerScore) 
    })
    
    hit.addEventListener("click", () => {
        fetchData(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`, renderData)
        if (score > 21) {

        }
    })
    
    stay.addEventListener("click", () => {
        fetchData(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`, renderData)
        gameMainCompScore.appendChild(compScoreTitle)
        gameMain.appendChild(gameMainCompCards)
        gameMain.appendChild(gameMainCompScore) 
    }) 

}catch(err) {console.log(err)}
        
        



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

