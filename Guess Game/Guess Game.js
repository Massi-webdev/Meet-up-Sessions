///////////////////////////////////////////////////////////////////////////////////////////////////////
let randomNumber = (Math.random()*10).toFixed(0)
console.log(randomNumber)


///////////////////////////////////////////////////////////////////////////////////////////////////////

function askName(){
    document.querySelector(".name-input-button").addEventListener('click', ()=>{
        let userName = document.querySelector(".user-name-input").value
        document.querySelector(".container-1").innerHTML=
        `
            <div class="intro">
                <H2>Welcome : ${userName}</H2>
                <p>Guess a number between 0-10:</p>
            </div>
            <div class="d-intro">
                <input id="user-name"class="user-number-input" type="number" placeholder="Type your guess" min="1" max="100">
                <button class="number-input-button">ENTER</button>
            </div>
            <div class="guess-result intro">

            </div>
        `
        ShowrGuessResult(userName)
    })
}
askName()




///////////////////////////////////////////////////////////////////////////////////////////////////////
function ShowrGuessResult(userName){
    
    document.querySelector(".number-input-button").addEventListener('click',()=>{

        let userInputNumber = document.querySelector(".user-number-input").value 

        let diff = Math.abs(randomNumber-userInputNumber)
        

        ///////////////////////////////////////////////////////////////////////////////////
        if (userInputNumber==="") {
            document.querySelector(".guess-result").innerHTML=
            `
                <p class="intro">OMG ${userName}, please enter numbers only !!</p>
                <img class="intro" src="/Meet-up Sessions/Guess Game/facepalm.gif" alt="facepalm">
            `
        } 
        ///////////////////////////////////////////////////////////////////////////////////
        else if (userInputNumber>10 || userInputNumber<=-1) {
            document.querySelector(".guess-result").innerHTML=
            `
                <p class="intro"> Your guess is out of scope, you idiot !</p>
                <img class="intro" src="/Meet-up Sessions/Guess Game/idiot.gif" alt="idiot">
            `
        } 
        //////////////////////////////////////////////////////////////////////////////////
        else if (randomNumber>parseFloat(userInputNumber) && diff>=3){
            document.querySelector(".guess-result").innerHTML=
        `
            <p class="intro">${userName}.  Your guess is lower. Try a higher number !</p>
            <img class=" intro" src="/Meet-up Sessions/Guess Game/not-even-close.gif" alt="almost">
        `
        }  
        /////////////////////////////////////////////////////////////////////////////////
        else if (randomNumber<parseFloat(userInputNumber) && diff>=3){
        document.querySelector(".guess-result").innerHTML=
        `
            <p class=" intro" >${userName}. Your guess is higher. Try a lower number !</p>
            <img class="intro" src="/Meet-up Sessions/Guess Game/not-even-close-2.gif" alt="almost">
        `
        } 
        //////////////////////////////////////////////////////////////////////////////////
        else if (randomNumber<parseFloat(userInputNumber) && diff<3){
            document.querySelector(".guess-result").innerHTML=
        `
            <p class=" intro" >${userName}. Your guess is a bit higher, you're almost there !</p>
            <img class=" intro" src="/Meet-up Sessions/Guess Game/almost-there.gif" alt="almost">
        `
        }  
        /////////////////////////////////////////////////////////////////////////////////
        else if (randomNumber>parseFloat(userInputNumber) && diff<3){
        document.querySelector(".guess-result").innerHTML=
        `
            <p class="intro">${userName}.  Your guess is a bit lower, you're almost there !</p>
            <img class="intro" src="/Meet-up Sessions/Guess Game/almost-there-2.gif" alt="almost">
        `
        } 
        //////////////////////////////////////////////////////////////////////////////////
        else if (userInputNumber===randomNumber) {
        console.log("Wonderful, you nailed it")
        document.querySelector(".guess-result").innerHTML=
        `
            <p class=" intro" >Congratulations ${userName}, you guessed right !</p>
            <img class=" intro" src="/Meet-up Sessions/Guess Game/nailed-it.gif" alt="nailed">
            <br><button class="play-again intro"> Play again? </button>
        `
        /////////////////////////////////////////////////////////////////////////////////
        document.querySelector(".play-again").addEventListener('click', ()=>{
            document.querySelector(".container-1").innerHTML=
            `
            <div>
                <H2>Welcome to the Guessing Game:</H2>
            </div>
            <div class="d-intro">
                <input class="user-name-input" type="text" placeholder="What's your name?">
                <button class="name-input-button">ENTER</button>
            </div>
            `
            askName()
            randomNumber = (Math.random()*10).toFixed(0)
            console.log(randomNumber)
        })

            ///fadeResults
            //document.querySelector(".d-intro").classList.add("fadeInOut")
            setTimeout(()=>{
                document.querySelector(".d-intro").setAttribute("hidden", true)
            }, "0")
        }
    })
}






