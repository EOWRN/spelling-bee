let currentWord = "";
let foundWords = [];
let score = 0;
let level = "Nice Start";
let totalScore = 0;
let foundWordsDiv  
const word = ["e","l","t","a","b","c","r"]

let solutions = {
    retractable: 18,
    attractable: 18,
    celebrater: 17,
    accelerate: 10,
    barbellate: 10,
    cerebellar: 10,
    ebracteate: 10,
    talebearer: 10,
    taleteller: 10,
    tractable: 16,
    traceable: 16,
    relatable: 16,
    celebrate: 16,
    aceraceae: 9,
    alterable: 9,
    altercate: 9,
    arecaceae: 9,
    attracter: 9,
    barretter: 9,
    bracteate: 9,
    cerebrate: 9,
    rerebrace: 9,
    terebella: 9,
    bractlet: 15,
    bracteal: 15,
    bracelet: 15,
    aberrate: 8,
    acerbate: 8,
    baccarat: 8,
    barbarea: 8,
    barbette: 8,
    barrater: 8,
    barrette: 8,
    barterer: 8,
    bartlett: 8,
    bearable: 8,
    berretta: 8,
    caracara: 8,
    cataract: 8,
    cellaret: 8,
    cerebral: 8,
    etcetera: 8,
    lacerate: 8,
    letterer: 8,
    rateable: 8,
    recreate: 8,
    tartrate: 8,
    tercelet: 8,
    trabeate: 8,
    abetter: 7,
    abreact: 7,
    accrete: 7,
    acerate: 7,
    alberta: 7,
    araceae: 7,
    arcella: 7,
    attract: 7,
    babbler: 7,
    barbate: 7,
    barbell: 7,
    battler: 7,
    bearcat: 7,
    blabber: 7,
    brabble: 7,
    brattle: 7,
    cabaret: 7,
    caracal: 7,
    caretta: 7,
    carrell: 7,
    carrere: 7,
    caterer: 7,
    clabber: 7,
    clatter: 7,
    electra: 7,
    lacerta: 7,
    lateral: 7,
    ratable: 7,
    rattler: 7,
    rebecca: 7,
    reelect: 7,
    retrace: 7,
    retract: 7,
    retreat: 7,
    tarbell: 7,
    tartlet: 7,
    tattler: 7,
    teacart: 7,
    terrace: 7,
    treacle: 7,
    treater: 7,
    treelet: 7,
    aerate: 6,
    albert: 6,
    arable: 6,
    ararat: 6,
    barbel: 6,
    barber: 6,
    barbet: 6,
    barrel: 6,
    barter: 6,
    batter: 6,
    bearer: 6,
    beater: 6,
    berate: 6,
    berber: 6,
    better: 6,
    bracer: 6,
    caller: 6,
    career: 6,
    carrel: 6,
    cartel: 6,
    carter: 6,
    cellar: 6,
    cerate: 6,
    cereal: 6,
    claret: 6,
    crater: 6,
    create: 6,
    ecarte: 6,
    elater: 6,
    larrea: 6,
    latter: 6,
    letter: 6,
    rabbet: 6,
    rabble: 6,
    ratter: 6,
    rattle: 6,
    rebate: 6,
    recall: 6,
    rectal: 6,
    reeler: 6,
    relace: 6,
    relate: 6,
    retell: 6,
    retral: 6,
    tartar: 6,
    tatter: 6,
    teeter: 6,
    teller: 6,
    tercel: 6,
    tercet: 6,
    terete: 6,
    tracer: 6,
    treble: 6,
    accra: 5,
    acerb: 5,
    alert: 5,
    altar: 5,
    alter: 5,
    areal: 5,
    areca: 5,
    arere: 5,
    arete: 5,
    attar: 5,
    babar: 5,
    beret: 5,
    berra: 5,
    blare: 5,
    blear: 5,
    brace: 5,
    bract: 5,
    caber: 5,
    carat: 5,
    caret: 5,
    carte: 5,
    cater: 5,
    clear: 5,
    crate: 5,
    creel: 5,
    crete: 5,
    eater: 5,
    erect: 5,
    lacer: 5,
    later: 5,
    rabat: 5,
    racer: 5,
    ratel: 5,
    react: 5,
    reata: 5,
    rebel: 5,
    recce: 5,
    tatar: 5,
    tater: 5,
    terce: 5,
    tetra: 5,
    trace: 5,
    tract: 5,
    treat: 5,
    aare: 1,
    acer: 1,
    acre: 1,
    alar: 1,
    arab: 1,
    arca: 1,
    area: 1,
    atar: 1,
    barb: 1,
    bare: 1,
    bart: 1,
    bear: 1,
    beer: 1,
    brae: 1,
    brat: 1,
    care: 1,
    cart: 1,
    ccrc: 1,
    cere: 1,
    cert: 1,
    crab: 1,
    cree: 1,
    earl: 1,
    lear: 1,
    leer: 1,
    race: 1,
    rale: 1,
    rare: 1,
    rate: 1,
    real: 1,
    rear: 1,
    reel: 1,
    rete: 1,
    rtlt: 1,
    tara: 1,
    tare: 1,
    tart: 1,
    tear: 1,
    tera: 1,
    tree: 1
};

function generateHexagons() {
    let hexagons = document.getElementsByClassName('hexagon');
    for(let hexagon of hexagons) {
      hexagon.remove();
    }

    const container = document.getElementById('hexagon-container');
    //container.innerHTML = "";
    for (let i=0;i<7; i++){
        const hexagon = document.createElement('div');
        hexagon.className='hexagon';
        const randomLetter=word[i]
        hexagon.innerHTML = randomLetter;
        hexagon.addEventListener('click', () => {
            clickLetter(randomLetter);
        });
        if (i==6){
            hexagon.style.backgroundColor= '#f7da21'
        }
        container.appendChild(hexagon);
        
        //hexagonLetters[randomLetter] = hexagon;
        hexagon.innerHTML = randomLetter;
        
    }
    
    /*
    let lettersUsed = [];
    
    for (let i = 0; i < 7; i++) {
        const hexagon = document.createElement('div');
        hexagon.className = 'hexagon';
        let randomLetter = "";
        let random = 0;
        if(i<6) {
          while(lettersUsed.indexOf(randomLetter) > -1 || randomLetter == "") {
            random = Math.floor(Math.random() * outerLetters.length);
            randomLetter = outerLetters[random].toUpperCase();
          }
          lettersUsed.push(randomLetter);
        }
        else {
          randomLetter = centerLetter.toUpperCase();
        }
        hexagon.innerHTML = randomLetter;
        hexagon.addEventListener('click', () => {
            clickLetter(randomLetter);
        });
        hexagon.addEventListener('mouseover', () => {
            hexagon.style.backgroundColor = '#ffff77';
        });
        hexagon.addEventListener('mouseout', () => {
            hexagon.style.backgroundColor = '#eeee99';
        });
        container.appendChild(hexagon);
        hexagonLetters[randomLetter] = hexagon;
    }
        */
}

function clickLetter(letter){
    currentWord+=letter;
    const input=document.getElementsByClassName('input')[0];
    input.value=currentWord
    console.log(currentWord)
}

function check(currentWord){
    console.log(currentWord)
    if (currentWord=='celebrate'){
        document.body.innerHTML = '';
        document.body.style.transition = "background-color 0.5s ease";
        document.body.style.backgroundColor="#f7da21"
        let newDiv = document.createElement("div");
        let name = document.createElement("div");
        let celebrate=document.createElement("div");
        newDiv.innerHTML = "HAPPY BIRTHDAY <br>";  // Add content to the div
        name.innerHTML="BOOBOOBEAR"
        celebrate.innerHTML="Time to<b> &nbsp CELEBRATE &nbsp </b>your birthday!"

    // Apply all styles using cssText
    newDiv.style.cssText = `
        font-family: 'Roboto', sans-serif;
        color: black;
        background-color: #f7da21;
        font-size: 60px;
        font-weight:900;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
`;


        document.body.appendChild(newDiv);
        name.style.cssText = `
        font-family: 'Roboto', sans-serif;
        color: black;
        background-color: #f7da21;
        font-size: 60px;
        font-weight:900;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
`;
        document.body.appendChild(name);

        celebrate.style.cssText = `
        font-family: 'Roboto', sans-serif;
        color: black;
        background-color: #f7da21;
        font-size: 20px;
        font-weight:400;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
`;
        document.body.appendChild(celebrate);



        let audio = document.createElement('audio');

        audio.src = 'HPBDHT.mp3';  // Replace with your audio file path or URL
        audio.autoplay = true;
        audio.loop = false;  // Remove this line if you don't want the music to loop
        audio.volume = 0.5;  // Adjust volume (0.0 to 1.0)
        document.body.appendChild(audio);


    }
    else if (solutions.hasOwnProperty(currentWord)) {
        score+=solutions[currentWord]
        console.log(solutions[currentWord])
        console.log(score)
        foundWordsDiv.innerHTML += currentWord + "<br>";

        delete solutions[currentWord]
        return 
        
    } else {
        console.log("word not found")
        return 'Word not found'; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generateHexagons();
    const input = document.getElementsByClassName('input')[0];
    
    input.addEventListener('keydown', (event) => {
        if (event.key == 'Backspace') {
            currentWord = currentWord.slice(0, -1); 
            console.log(currentWord); 
        }

        else if (event.key=='Enter'){
            check(currentWord);
            currentWord="";
            input.value=currentWord;

        }
        else if (event.key=='c'|| event.key=='e'|| event.key=='l'|| event.key=='b'|| event.key=='r'|| event.key=='a'|| event.key=='t'){
            currentWord+=event.key;
            console.log(currentWord)
        }
        else {
            event.preventDefault();
        }
        
    });

    input.addEventListener('click', (event) => {
        const length = input.value.length;
        input.setSelectionRange(length, length);
    });
    foundWordsDiv = document.querySelector('.foundwords');  



});