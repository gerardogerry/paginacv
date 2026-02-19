// -----------------------------
// ANIMACIONES SCROLL
// -----------------------------
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));


// -----------------------------
// CONTADORES ANIMADOS
// -----------------------------
const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{
counter.innerText = "0";

const updateCounter = ()=>{
const target = +counter.getAttribute("data-target");
const current = +counter.innerText;
const increment = target / 100;

if(current < target){
counter.innerText = `${Math.ceil(current + increment)}`;
setTimeout(updateCounter,20);
}else{
counter.innerText = target;
}
};

updateCounter();
});


// -----------------------------
// MODO OSCURO / CLARO
// -----------------------------
const toggle = document.getElementById("toggleTheme");

toggle.addEventListener("click",()=>{
document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
toggle.textContent = "🌞";
}else{
toggle.textContent = "🌙";
}
});


// -----------------------------
// PARTICULAS
// -----------------------------
particlesJS("particles-js",{
particles:{
number:{value:80},
color:{value:"#00f5ff"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},
line_linked:{
enable:true,
distance:150,
color:"#00f5ff",
opacity:0.4,
width:1
},
move:{
enable:true,
speed:2
}
},
interactivity:{
events:{
onhover:{enable:true,mode:"repulse"}
}
}
});
