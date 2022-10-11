// Minecraft fishing simulator

// Variables to store html elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let villagerImgEl = document.getElementById("villager-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numTropicalEl= document.getElementById("num-tropical");
let numSalmonEl = document.getElementById("num-salmon");
let numPufferEl = document.getElementById("num-puffer");

// global variables
let character= "Steve";
let numCod = 0;
let numSalmon = 0;
let numPuffer = 0;
let numTropical = 0;


// Event listerners
steveImgEl.addEventListener("click",selectSteve);
alexImgEl.addEventListener("click",selectAlex);
villagerImgEl.addEventListener("click",selectVillager);
fishBtnEl.addEventListener("click", fishOnce );


// Event Functions
function selectSteve(){
    // update active border
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");
    villagerImgEl.classList.remove("active");

    // update character selection variables
    character= "Steve";
}

function selectAlex(){
    // update active border
    steveImgEl.classList.remove("active");
    alexImgEl.classList.add("active");
    villagerImgEl.classList.remove("active");

    // update character selection variables
    character= "Alex";
}

function selectVillager(){
    // update active border
    steveImgEl.classList.remove("active");
    alexImgEl.classList.remove("active");
    villagerImgEl.classList.add("active");

    // update character selection variables
    character= "Villager";
}

function fishOnce(){
    // test current charcter
    if (character === "Steve"){
        // use steve probability distribution for fishing
        let randNum = Math.random();
        if (randNum <0.7) {
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png";
            numCodEl.innerHTML = numCod;
        } else if (randNum<0.9){
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png";
            numSalmonEl.innerHTML = numSalmon;
            
        } else if (randNum <0.95){
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png";
            numTropicalEl.innerHTML = numTropical
        } else {
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png";
            numPufferEl.innerHTML = numPuffer;
        }
    }else if (character ==="Alex"){
        // use alex probability distribution for fishing
        let randNum = Math.random();
        if (randNum <0.1) {
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png";
            numCodEl.innerHTML = numCod;
        } else if (randNum<0.2){
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png";
            numSalmonEl.innerHTML = numSalmon;
            
        } else if (randNum <0.5){
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png";
            numTropicalEl.innerHTML = numTropical
        } else {
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png";
            numPufferEl.innerHTML = numPuffer;
        }
    }else{
        // use villager probability distribution for fishing
        let randNum = Math.random();
        if (randNum <0.1) {
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png";
            numCodEl.innerHTML = numCod;
        } else if (randNum<0.2){
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png";
            numSalmonEl.innerHTML = numSalmon;
            
        } else if (randNum <0.5){
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png";
            numTropicalEl.innerHTML = numTropical
        } else {
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png";
            numPufferEl.innerHTML = numPuffer;
        }
    }