let movieName;

async function getMovie(){
const movie = 
fetch("http://localhost:3000/movie")
.then(value => value.json())
.then(data => data.title);

/*const movieArr = [
    {name:"tokillamockingbird",letters:18},
    {name:"theamityvillehorror",letters:19},
    {name:"thesilenceofthelambs",letters:20},
    {name:"howtoloseaguyintendays",letters:22},
    {name:"spiderman",letters:9},
    {name:"homealone",letters:9},
    {name:"kungfupanda",letters:11},
    {name:"lalaland",letters:8},
    {name:"zombieland",letters:10}
];*/

/*let i = Math.floor(Math.random()*9);
let movie = movieArr[i].name;
let number = movieArr[i].letters;
console.log(movie);
console.log(number);*/

 let str = await movie;

 movieName = str.replaceAll(" ","").toLowerCase();

const number = movieName.length;     

console.log(movieName);


for(let x=0;x<number;x++){
   const cols = document.createElement("div");
   cols.className = "boxes";
   document.getElementById("main").appendChild(cols);
   
}
}

let no_of_guess = 0;
function chkLetter(){
    
    let text = "";
    const movieArray = [...movieName];
    const newArr = [];
    const allDivs = document.querySelectorAll('.boxes');
  console.log("chkLetter is running");
  let guess = document.getElementById("enterGuess").value;
  guess = guess.toLowerCase();
  const items = document.querySelectorAll('a');
  
  if(guess === ""){
      console.log("chkLetter is stopping");
      return;
    }
  else if(movieName.indexOf(guess) == -1){
      no_of_guess++;
      items[0].remove();
      if(no_of_guess == 9){gamelost();}
      }
  else{
    
    for(let i=0;i<movieArray.length;i++){
      if(movieArray[i] == guess){
         newArr.push([i]);
         
    for(let j=0;j<newArr.length;j++){
         allDivs[newArr[j]].innerHTML = guess;
         
    }
   }
  }
 }
 for(let k=0;k<allDivs.length;k++){text += allDivs[k].innerHTML;}
 if(text == movieName){gamewon();}
}



function gamewon(){
    let result = document.getElementById("output");
    result.innerHTML = "Congratulations, you won!";
    document.getElementById("replayButton").style.display = "block";
    
}
  
function gamelost(){
    let result = document.getElementById("output");
    result.innerHTML = "Better luck next time";
    document.getElementById("replayButton").style.display = "block";

    
} 

function showwrapper(){
  getMovie();
  let item = document.getElementById("gw-box-1");
  item.style.display = "block";

}

function playAgain(){
  
window.location.href = "index.html";
}