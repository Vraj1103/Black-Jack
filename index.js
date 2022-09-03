
let sum=0;
let has_won=false;
let alive=false;
let message="";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
let cards =[];
let player={
    name:"Vraj",
    chips:100,
}
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": $"+player.chips;
function getrandomcard(){
    let Random_no= Math.floor(Math.random()*13)+1;
    if(Random_no===1){
        return 11;
    }
    else if(Random_no>10){
        return 10;
    }
    else{
        return Random_no;
    }

}

function startGame(){
 alive=true;
 let first_card=getrandomcard();
 let second_card=getrandomcard();
 sum=first_card+second_card;
 cards =[first_card,second_card];
    renderGame();
}

function renderGame(){
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){ 
        cardsEl.textContent+=cards[i]+" ";
    }
    
    if(sum<=20){
        message="Do you want to draw a new card?🙂";
        alive=true;
        has_won=false;
    }
    else if(sum===21)
    {
    message="Wohoo! You got a blackjack!🤩";
    has_won=true;
    }
    else{
        message="You lose!🤬";
        alive=false;
        has_won=false;
    } 
    messageEl.textContent=message;
    sumEl.textContent="Sum :" + sum;
    console.log(message);
}

function newCard(){ 
    if(alive===true && has_won===false){
   
    let third_card=getrandomcard();
    sum += third_card;
    cards.push(third_card);
    renderGame();
    }
    
}
