/* =====================================
   THE RING OF US
   Interactive System
===================================== */



// =====================================
// MUSIC SYSTEM
// =====================================

// =====================================
// CONTINUOUS MUSIC SYSTEM
// =====================================


const bgMusic =
document.getElementById("bgMusic");


if(bgMusic){


bgMusic.volume = 0.35;


// Continue previous time

const savedTime =
localStorage.getItem("musicTime");


if(savedTime){

bgMusic.currentTime =
parseFloat(savedTime);

}



// Save music position

setInterval(()=>{


localStorage.setItem(
"musicTime",
bgMusic.currentTime
);


},1000);




// Play after interaction

document.addEventListener(
"click",
()=>{


bgMusic.play()
.catch(()=>{});


},
{
once:true
}
);



document.addEventListener(
"touchstart",
()=>{


bgMusic.play()
.catch(()=>{});


},
{
once:true
}
);



}





// =====================================
// FLOATING HEART FLOWER STAR
// =====================================


const floatingContainer =
document.getElementById(
"floating-container"
);



const floatingObjects = [

"❤️",
"🌸",
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
Math.random()*30
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
500
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


localStorage.removeItem("musicTime");

localStorage.removeItem("thumUnlocked");

localStorage.removeItem("phungUnlocked");


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



if(!area)
return;



area.innerHTML = `

<div class="unlock-box">


<h2>
👨 Thum ❤️ Phung
</h2>


<p>
Thum gives this ring to Phung 💍
</p>


<p>
Enter secret code
</p>


<input

id="thumCode"

placeholder="DD/MM/YYYY">


<br>


<button onclick="unlockThum()">

Unlock Ring

</button>


</div>

`;

}





function choosePhungGive(){


const area =
document.getElementById(
"unlock-area"
);



if(!area)
return;



area.innerHTML = `


<div class="unlock-box">


<h2>
👩 Phung ❤️ Thum
</h2>


<p>
Phung gives this ring to Thum 💍
</p>


<p>
Enter secret code
</p>



<input

id="phungCode"

placeholder="DD/MM/YYYY">


<br>


<button onclick="unlockPhung()">

Unlock Ring

</button>


</div>


`;

}







// =====================================
// PASSWORD SYSTEM
// =====================================



function unlockThum(){



const code =
document.getElementById(
"thumCode"
).value;



// Thum unlocks ring for Phung

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
"💗 Incorrect secret code"
);


}


}







function unlockPhung(){



const code =
document.getElementById(
"phungCode"
).value;



// Phung unlocks ring for Thum

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
"💗 Incorrect secret code"
);


}


}







// =====================================
// OPEN RING BOX
// =====================================



let currentRingMessage = "";





function openRingBox(type){



const area =
document.getElementById(
"ring-box-area"
);



if(!area)
return;



let ringImage;

let sceneImage;




if(type==="phung"){


ringImage =
"./images/rings/ring-phung.png";


sceneImage =
"./images/scenes/ring-thum-to-phung.png";


currentRingMessage = `

<h2>
Thum ❤️ Phung
</h2>


<p>
This ring is my promise to you 💍
</p>


<p>
I choose you today and forever.
</p>

`;



}




if(type==="thum"){


ringImage =
"./images/rings/ring-thum.png";


sceneImage =
"./images/scenes/ring-phung-to-thum.png";


currentRingMessage = `


<h2>
Phung ❤️ Thum
</h2>


<p>
This ring carries my love for you 💍
</p>


<p>
You are my home forever.
</p>


`;



}





area.innerHTML = `


<div class="scene-box">


<img

class="ring-box"

src="./images/rings/ring-box-closed.png">


<br>


<button

onclick="showOpenedRing(
'${ringImage}',
'${sceneImage}'
)">


🎁 Open Ring Box


</button>


</div>


`;



}







function showOpenedRing(
ringImage,
sceneImage
){


const area =
document.getElementById(
"ring-box-area"
);



if(!area)
return;



area.innerHTML = `


<div class="scene-box ring-opening">


<h2>
✨ A Special Moment ✨
</h2>



<div class="sparkles">

<span class="sparkle">
✨
</span>

<span class="sparkle">
💗
</span>

<span class="sparkle">
🌸
</span>

<span class="sparkle">
⭐
</span>

</div>




<img

class="ring-box-open"

src="./images/rings/ring-box-open.png">





<img

class="ring-display"

src="${ringImage}">





<div class="ring-message">

${currentRingMessage}

</div>





<img

class="scene-image"

src="${sceneImage}">


</div>


`;



checkUnlock();


}







// =====================================
// UNLOCK LOVE LETTER
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
// LOVE LETTER
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



if(
!envelope ||
!content ||
!text
)

return;



envelope.src =
"./images/envelope/letter-open.png";



content.classList.remove(
"hidden"
);



content.classList.add(
"letter-show"
);




const message =

`My dear Phung ❤️

Thank you for every beautiful moment.

You are my happiness,
my smile,
and my favorite person.

No matter where life takes us,
I hope we continue writing
our story together forever.

With all my love 💍`;




let index = 0;



text.innerHTML = "";




function typing(){


if(index < message.length){


text.textContent +=
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






window.onload = function(){



checkUnlock();



const loader =
document.getElementById(
"loader"
);



if(loader){


setTimeout(()=>{


loader.style.opacity="0";


setTimeout(()=>{


loader.style.display="none";


},1000);



},1200);



}



};