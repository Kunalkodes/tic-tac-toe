
let turn="x";
let box = document.getElementsByClassName("box");
let display = document.getElementById("display");
Array.from(box).forEach(element => {
    element.addEventListener("click",()=>{
        element.innerText=turn;
        changeturn();
        checkwin();
    })
    
});

function changeturn(){
    if (turn == "x"){
        turn="o";
        display.innerText="Player o turn";
    }
    else{
        turn="x";
        display.innerText="Player x turn";
    }
    return;
}

function checkwin(){
   let winarr=[[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],];
    
    for (let i=0;i< winarr.length;i++){
        if ( box[winarr[i][0]].innerText==box[winarr[i][1]].innerText && box[winarr[i][1]].innerText==box[winarr[i][2]].innerText && box[winarr[i][0]].innerText== "x" ){
            changeturn();
            box[winarr[i][0]].classList.add("change");
            box[winarr[i][1]].classList.add("change");
            box[winarr[i][2]].classList.add("change");
            display.innerText="Player x wins !!!";
            
         }
         if ( box[winarr[i][0]].innerText==box[winarr[i][1]].innerText && box[winarr[i][1]].innerText==box[winarr[i][2]].innerText && box[winarr[i][0]].innerText== "o" ){
            changeturn();
            box[winarr[i][0]].classList.add("change");
            box[winarr[i][1]].classList.add("change");
            box[winarr[i][2]].classList.add("change");
            display.innerText="Player o wins !!!";
           
         }
    }
 

}


function reset(){
    Array.from(box).forEach(element => {
        
            element.innerText="";
    
    });

}