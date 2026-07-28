/* =====================================
   THE RING OF US
   Interactive System
===================================== */



// =====================================
// MUSIC SYSTEM
// =====================================


const bgMusic =
document.getElementById("bgMusic");


if(bgMusic){

    bgMusic.volume = 0.35;


    document.addEventListener(
        "click",
        ()=>{

            bgMusic.play()
            .catch(()=>{});

        },
        {once:true}
    );

}




// =====================================
// FLOATING HEART FLOWER STAR SYSTEM
// =====================================


const floatingContainer =
document.getElementById(
"floating-container"
);



const floatingObjects = [

"🌸",
"❤️",
"✨",
"⭐",
"💗",
"🌺"

];



function createFloating(){


if(!floatingContainer)
return;



const item =
document.createElement("div");


item.className =
"floating-item";



item.innerHTML =
floatingObjects[
Math.floor(
Math.random()
*
floatingObjects.length
)
];



item.style.left =
Math.random()*100+"%";



item.style.fontSize =
(
20+
Math.random()*25
)
+"px";



item.style.animationDuration =
(
5+
Math.random()*8
)
+"s";



floatingContainer.appendChild(item);



setTimeout(()=>{

item.remove();

},15000);


}



setInterval(
createFloating,
400
);






// =====================================
// PAGE NAVIGATION
// =====================================



function startStory(){

window.location.href =
"ring.html";

}




function goLetter(){

window.location.href =
"love-letter.html";

}




function goGift(){

window.location.href =
"secret-gift.html";

}




function goEnding(){

window.location.href =
"ending.html";

}




function restartStory(){


localStorage.clear();


window.location.href =
"index.html";


}





// =====================================
// RING SELECTION
// =====================================



function chooseThumGive(){



const area =
document.getElementById(
"unlock-area"
);



area.innerHTML = `


<div class="unlock-box">


<h2>
💍 Thum gives ring to Phung
</h2>


<p>
Enter secret code
</p>


<input

id="thumCode"

placeholder="DD/MM/YYYY">


<br>


<button onclick="unlockThum()">

Unlock

</button>


</div>


`;



}





function choosePhungGive(){



const area =
document.getElementById(
"unlock-area"
);



area.innerHTML = `


<div class="unlock-box">


<h2>
💎 Phung gives ring to Thum
</h2>


<p>
Enter secret code
</p>


<input

id="phungCode"

placeholder="DD/MM/YYYY">


<br>


<button onclick="unlockPhung()">

Unlock

</button>


</div>


`;



}





// =====================================
// PASSWORD CHECK
// =====================================



function unlockThum(){



const code =
document.getElementById(
"thumCode"
).value;



if(code==="30/05/1991"){


localStorage.setItem(
"thumUnlocked",
"true"
);



openRingBox(
"phung"
);



}

else{


alert(
"💗 Secret code incorrect"
);


}



}




function unlockPhung(){



const code =
document.getElementById(
"phungCode"
).value;



if(code==="04/07/1999"){


localStorage.setItem(
"phungUnlocked",
"true"
);



openRingBox(
"thum"
);



}

else{


alert(
"💗 Secret code incorrect"
);


}


}






// =====================================
// OPEN RING BOX
// =====================================



function openRingBox(type){



const area =
document.getElementById(
"ring-box-area"
);



if(!area)
return;



let ringImage;
let sceneImage;
let message;



if(type==="phung"){


ringImage =
"./images/rings/ring-phung.png";


sceneImage =
"./images/scenes/ring-thum-to-phung.png";


message =

`
<h2>
Thum ❤️ Phung
</h2>

<p>
Thum gives this ring to Phung 💍
</p>

<p>
"From this day,
I choose you forever."
</p>
`;



}




if(type==="thum"){


ringImage =
"./images/rings/ring-thum.png";


sceneImage =
"./images/scenes/ring-phung-to-thum.png";


message =

`
<h2>
Phung ❤️ Thum
</h2>

<p>
Phung gives this ring to Thum 💍
</p>

<p>
"You are my home."
</p>

`;



}




area.innerHTML = `


<div class="scene-box">


<img

class="ring-box"

src="./images/rings/ring-box-closed.png">


<br>


<button onclick="showOpenedRing('${ringImage}','${sceneImage}')">


🎁 Open The Ring Box


</button>


</div>


`;



window.currentRingMessage =
message;


}





function showOpenedRing(
ringImage,
sceneImage
){


const area =
document.getElementById(
"ring-box-area"
);



area.innerHTML = `


<div class="scene-box ring-opening">



<h2>
✨ A special gift for you ✨
</h2>



<div>

<span class="sparkle">✨</span>

<span class="sparkle">💗</span>

<span class="sparkle">🌸</span>


</div>




<img

class="ring-box-open"

src="./images/rings/ring-box-open.png">





<img

class="ring-display"

src="${ringImage}">





<div class="ring-message">


${window.currentRingMessage}


</div>





<img

src="${sceneImage}">


</div>


`;



checkUnlock();


}





// =====================================
// UNLOCK NEXT PAGE
// =====================================



function checkUnlock(){


const next =
document.getElementById(
"nextLetter"
);



if(

localStorage.getItem(
"thumUnlocked"
)

&&

localStorage.getItem(
"phungUnlocked"
)

){


if(next){

next.style.display =
"inline-block";

}


}



}






// =====================================
// LOVE LETTER OPEN
// =====================================



function openLetter(){


const envelope =
document.getElementById(
"envelopeImage"
);



const content =
document.getElementById(
"letterContent"
);



const text =
document.getElementById(
"loveText"
);



if(!envelope || !content)
return;



// Change envelope image

envelope.src =
"./images/envelope/letter-open.png";




// Show letter

content.classList.remove(
"hidden"
);


content.classList.add(
"letter-show"
);





const message =

`Thank you for being my happiness.

You are my favorite person,
my safe place,
and my beautiful memory.

I am grateful for every moment with you.

I hope our story continues forever ❤️`;





let index = 0;



text.innerHTML="";



function typing(){


if(index < message.length){


text.innerHTML +=
message[index];


index++;


setTimeout(
typing,
40
);


}


}



typing();



}


const envelope =
document.getElementById(
"envelopeImage"
);



const content =
document.getElementById(
"letterContent"
);



if(!envelope || !content)
return;



envelope.src =
"./images/envelope/letter-open.png";



content.style.display =
"block";



}




window.onload=function(){


checkUnlock();


};