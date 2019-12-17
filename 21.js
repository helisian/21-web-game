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
playerScoreTitle.innerText = "YOUR SCORE:"
let playerScore = document.createElement("h2")
let gameMainCompCards = document.createElement("div")
gameMainCompCards.setAttribute("class", "gameMainCompCards")
let gameMainCompScore = document.createElement("div")
gameMainCompScore.setAttribute("class", "gameMainCompScore")
let compScore = document.createElement("h2")
let compScoreTitle = document.createElement("h2")
compScoreTitle.innerText = "DEALER SCORE:"
let hit = document.createElement("button")
hit.setAttribute("value", "HIT")
hit.innerText = "HIT"
let hitDiv = document.querySelector(".hit")
let stay = document.createElement("button")
stay.innerText = "STAY"
let stayDiv = document.querySelector(".stay")

try { 
    const fetchData = async (url, callback) => {
    let res = await axios.get(url)
    callback(res.data)
    }

    const setCardValue = (data) => {
        switch(data) {
            case "JACK":
            case "QUEEN":
            case "KING":
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

    const renderPlayerData = (data) => {
        let card = data["cards"]
        card.forEach(el => {
            score += setCardValue(el.value)
            let img = document.createElement("img")
            img.src = el.image
            gameMainPlayerCards.appendChild(img)
        })
        playerScore.innerText = score
        gameMainPlayerScore.appendChild(playerScore)
    }

    const renderCompData = (data) => {
        let card = data["cards"]
        let score = 0
        card.forEach(el => {
            score += setCardValue(el.value)
            console.log(setCardValue(el.value))
            let img = document.createElement("img")
            img.src = el.image
            gameMainCompCards.appendChild(img)
        })
        compScore.innerText = score
        gameMainCompScore.appendChild(compScore)
    }
    
    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", (data) => deckId = data.deck_id)
    
    start.addEventListener("click", () => {
        gameMain.innerHTML = ""
        hitDiv.appendChild(hit)
        stayDiv.appendChild(stay)
        fetchData(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`, renderPlayerData)
        gameMain.appendChild(gameMainPlayerCards)
        gameMain.appendChild(gameMainPlayerScore) 
        gameMainPlayerScore.appendChild(playerScoreTitle)
    })
    
    hit.addEventListener("click", () => {
        fetchData(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`, renderPlayerData)
        if (score > 21) {

        }
    })
    
    stay.addEventListener("click", () => {
        fetchData(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`, renderCompData)
        gameMain.appendChild(gameMainCompCards)
        gameMain.appendChild(gameMainCompScore) 
        gameMainCompScore.appendChild(compScoreTitle)
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

