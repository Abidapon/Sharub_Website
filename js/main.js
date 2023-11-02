let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});

const readMoreButton = document.getElementById("read-more-button");
const hiddenContent = document.querySelector(".hidden-content");

readMoreButton.addEventListener("click", function () {
    if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
        hiddenContent.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        hiddenContent.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
});
