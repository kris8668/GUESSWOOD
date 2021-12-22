let movieName;

async function getMovie(){
const movie = 
fetch("https://guessback.herokuapp.com/movie")
.then(value => value.json())
.then(data => data.title)
.catch((err) => console.log(err));


let str = await movie;

movieName = str.replaceAll(" ","").toLowerCase();

console.log(movieName);

const number = movieName.length;     

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