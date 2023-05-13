const header = document.getElementById("header");
const book1 = document.getElementById("book1");
const ver1gif = document.getElementById("ver1gif");
const ver1book = document.getElementById("ver1book");
const ver1giff = document.getElementById("ver1giff");
const screen1 = document.getElementById("screen1");
const book2 = document.getElementById("book2");
const ver2gif = document.getElementById("ver2gif");
const ver2book = document.getElementById("ver2book");
const ver2giff = document.getElementById("ver2giff");
const screen2 = document.getElementById("screen2");
const image = document.getElementById("bouncingBook1");
const image2 = document.getElementById("bouncingBook2");
const screensaver = document.getElementById("screensaver");
const home = document.getElementById("home");


home.addEventListener("click", function (){
    document.querySelectorAll(".toggle").forEach(element =>{
        element.classList.add("hidden")
    })
    screensaver.classList.remove("hidden");
    book1.classList.remove("hidden");
    book2.classList.remove("hidden");
    header.style.opacity = "1";
    document.querySelector("body").style.backgroundImage = "url('/images/IMG_3149.jpeg')"
    home.style.color = "beige";
    screensaver.style.color = "beige";
})

book1.addEventListener("click", function(){
    document.querySelectorAll(".toggle").forEach(element =>{
        element.classList.add("hidden")
    })
    ver1gif.classList.remove("hidden");
    ver1book.classList.remove("hidden");
    header.style.opacity = "0";
    document.querySelector("body").style.backgroundImage = "url('/images/IMG_3149.jpeg')"
    home.style.color = "beige";
    screensaver.style.color = "beige";
})

ver1gif.addEventListener("click", function(){
    document.querySelectorAll(".toggle").forEach(element =>{
        element.classList.add("hidden")
    })
    ver1giff.classList.remove("hidden");
    header.style.opacity = "0";
    document.querySelector("body").style.backgroundImage = "url('/images/A_black_image.jpg')";
    home.style.color = "beige";
    screensaver.style.color = "beige";
})

//add one screensaver effect here
ver1book.addEventListener("click", function(){
    document.querySelectorAll(".toggle").forEach(element =>{
        element.classList.add("hidden")
    })
    image.classList.remove('hidden');
    header.style.opacity = "0";
    document.querySelector("body").style.backgroundImage = "url('/images/Screenshot 2023-05-09 at 1.21.49 AM.png')";
    home.style.color = "black";
    screensaver.style.color = "black";
})

book2.addEventListener("click", function(){
    document.querySelectorAll(".toggle").forEach(element =>{
        element.classList.add("hidden")
    })
    ver2gif.classList.remove("hidden");
    ver2book.classList.remove("hidden");
    header.style.opacity = "0";
    document.querySelector("body").style.backgroundImage = "url('/images/IMG_3149.jpeg')"
    home.style.color = "beige";
    screensaver.style.color = "beige";
})

ver2gif.addEventListener("click", function(){
    document.querySelectorAll(".toggle").forEach(element =>{
        element.classList.add("hidden")
    })
    ver2giff.classList.remove("hidden");
    header.style.opacity = "0";
    document.querySelector("body").style.backgroundImage = "url('/images/A_black_image.jpg')";
    home.style.color = "beige";
    screensaver.style.color = "beige";
})

//add one screensaver effect here
ver2book.addEventListener("click", function(){
    document.querySelectorAll(".toggle").forEach(element =>{
        element.classList.add("hidden")
    })
    image2.classList.remove("hidden");
    header.style.opacity = "0";
    document.querySelector("body").style.backgroundImage = "url('/images/Screenshot 2023-05-09 at 12.11.56 AM copy.png')";
    home.style.color = "black";
    screensaver.style.color = "black";
})

document.getElementById("screensaver").addEventListener("click", function(){
    document.querySelectorAll(".toggle").forEach(element =>{
        element.classList.add("hidden")
    })
    image.classList.remove("hidden");
    image2.classList.remove("hidden");
    document.querySelector("body").style.backgroundImage = "url('/images/IMG_3149.jpeg')"
    home.style.color = "beige";
    screensaver.style.color = "beige";
})

image.addEventListener("click", function(){
    document.querySelectorAll(".toggle").forEach(element =>{
        element.classList.add("hidden")
    })
    ver1gif.classList.remove("hidden");
    ver1book.classList.remove("hidden");
    document.querySelector("body").style.backgroundImage = "url('/images/IMG_3149.jpeg')"
    home.style.color = "beige";
    screensaver.style.color = "beige";
})

image2.addEventListener("click", function(){
    document.querySelectorAll(".toggle").forEach(element =>{
        element.classList.add("hidden")
    })
    ver2gif.classList.remove("hidden");
    ver2book.classList.remove("hidden");
    document.querySelector("body").style.backgroundImage = "url('/images/IMG_3149.jpeg')"
    home.style.color = "beige";
    screensaver.style.color = "beige";
})
function loop(){
    const hRange = window.innerWidth  - image.clientWidth;
    const vRange = window.innerHeight - image.clientHeight;
    const time = performance.now()*0.2

    const x = Math.abs((time % (hRange * 2)) - hRange);
    image.style.left = `${x}px`;
    const y =  Math.abs((time % (vRange * 2)) - vRange);
    image.style.top = `${y}px`;

    requestAnimationFrame(loop);
}
loop(); 

function loop2(){
    const hRange = window.innerWidth - image2.clientWidth;
    const vRange = window.innerHeight - image2.clientHeight;
    const time = performance.now() * 0.25;

    const x = Math.abs((time % (hRange * 2)) - hRange);
    image2.style.left = `${x}px`;
    const y = Math.abs((time % (vRange * 2)) - vRange);
    image2.style.top = `${y}px`;

    requestAnimationFrame(loop2);
}

loop2();

