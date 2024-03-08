// Typing Script JS
var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "WP Theme Developer"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing-2",{
    strings: ["Web Developer", "Web Designer", "WP Theme Developer"],
    typeSpeed: 100,
    backSpeed: 60,
});

//Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);

//nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})


// contact form
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    // Basic email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // If all validations pass, you can proceed with form submission or other actions
    alert('Form submitted successfully!');
    // You can also use AJAX to submit the form data to a server
}

// light-Theme
var icon = document.getElementById("icon");
        icon.onclick= function(){
        document.body.classList.toggle("light-theme");
        if(document.body.classList.contains("light-theme")){
        icon.src = "image/moon.png";
        }else{
        icon.src ="image/sun.png";
    }
}