let btnChrome=document.getElementById("btnChrome");
let btnFirefox=document.getElementById("btnFirefox");


let speedS=document.getElementById("speedS");
let share=document.getElementById("share");
let second=document.getElementById("second");


let btnSimple=document.getElementById("btnSimple");
let btnSpeed=document.getElementById("btnSpeed");
let btnEasy=document.getElementById("btnEasy");

let contact=document.querySelector("#contact");
let submitBtn=document.querySelector("#submit");




function getChrome(){
    btnChrome.style.backgroundColor=`blue`
    btnChrome.style.color=`#fff`;
    btnFirefox.style.backgroundColor=`#fff`;
    btnFirefox.style.color=`black`;
}
function getFirefox(){
    btnFirefox.style.backgroundColor=`blue`
    btnFirefox.style.color=`#fff`;
    btnChrome.style.backgroundColor=`#fff`;
    btnChrome.style.color=`black`;
}



function speedFunction(){

    speedS.style.display=`block`;
    btnSpeed.style.borderBottom=`2px solid rgb(198, 87, 87)`;

    btnSpeed.style.color=`rgb(198, 87, 87)`;
    btnSimple.style.color=`#000`;
    btnEasy.style.color=`#000`;

    btnSimple.style.borderBottom=`none`;
    btnEasy.style.borderBottom=`none`;
    share.style.display=`none`;
    second.style.display=`none`;
}
function shareFunction(){
    
    speedS.style.display=`none`;
    share.style.display=`block`;
    second.style.display=`none`;

    btnEasy.style.color=`rgb(198, 87, 87)`;
    btnSimple.style.color=`#000`;
    btnSpeed.style.color=`#000`;

    btnEasy.style.borderBottom=`2px solid rgb(198, 87, 87)`;
    btnSimple.style.borderBottom=`none`;
    btnSpeed.style.borderBottom=`none`;
}
function secondPageFunction(){
    
    speedS.style.display=`none`;
    share.style.display=`none`;
    second.style.display=`block`;

    btnSimple.style.color=`rgb(198, 87, 87)`;
    btnSpeed.style.color=`#000`;
    btnEasy.style.color=`#000`;
    
    btnSimple.style.borderBottom=`2px solid rgb(198, 87, 87)`;
    btnEasy.style.borderBottom=`none`;
    btnSpeed.style.borderBottom=`none`;

    

}
