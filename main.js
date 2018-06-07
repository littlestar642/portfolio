var cred = document.getElementById('credentials');

var typewriter = new Typewriter(cred, {
    loop: true
});

typewriter.typeString('I am a Traveller')
    .pauseFor(2500)
    .deleteChars(9)
    .pauseFor(700)
    .typeString('Foodie')
    .pauseFor(2500)
    .deleteChars(6)
    .pauseFor(700)
    .typeString('Web Developer')
    .pauseFor(5000)
    .start();


var icon= document.querySelector('#iconChanger');

setInterval(()=>{
    if(cred.textContent.includes('Traveller')){
        icon.classList.remove('fa-heartbeat');
        icon.classList.add('fa-plane');
        icon.style.color="white";
    }
    if(cred.textContent.includes('Foodie')){
        icon.classList.remove('fa-plane');
        icon.classList.remove('fa-bus');
        icon.classList.add('fa-certificate');
        icon.style.color="gold";
    }
    if(cred.textContent.includes('Web Developer')){
        icon.classList.remove('fa-certificate');
        icon.classList.add('fa-heartbeat');
        icon.style.color="red";        
    }
},100)


// setInterval(()=>{
//     icon.classList.remove('fa-bus');
//     icon.classList.add('')
// })