// =============================
// Project Awpiuuu ❤️
// =============================

// Elements
const startBtn = document.getElementById("startBtn");
const loading = document.getElementById("loading");
const website = document.getElementById("website");
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const counter = document.getElementById("counter");

// Tap To Open
startBtn.addEventListener("click", () => {

    loading.style.opacity = "0";

    setTimeout(() => {
        loading.style.display = "none";
        website.classList.remove("hidden");
    },700);

    music.play().catch(()=>{});

});

// Play Button
playBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();
        playBtn.innerHTML="⏸ Pause Music";

    }else{

        music.pause();
        playBtn.innerHTML="▶ Play Music";

    }

});


// =====================
// Together Since Counter
// =====================

const startDate = new Date("October 24, 2025 00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor(
        (diff%(1000*60*60*24))/(1000*60*60)
    );

    const minutes = Math.floor(
        (diff%(1000*60*60))/(1000*60)
    );

    counter.innerHTML=`
        ❤️ ${days} Days <br>
        🌸 ${hours} Hours <br>
        💖 ${minutes} Minutes
    `;

}

updateCounter();

setInterval(updateCounter,60000);


// =========================
// Floating Hearts
// =========================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.zIndex="999";

    heart.style.animation="floatHeart 8s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,700);


// =========================
// CSS Animation Inject
// =========================

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);


// =========================
// Smooth Reveal Animation
// =========================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition="1s";

observer.observe(sec);

});

console.log("❤️ Project Awpiuuu Loaded ❤️");