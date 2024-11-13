const textAnimation = document.querySelector('.text-animation span');
const jobTitles = ['Frontend Designer', 'Web Designer', 'UI / UX Designer', 'Web Developer', 'Fullstack Developer'];
let index = 0; 
let charIndex = 0; 
let currentTitle = ''; 
let isDeleting = false; 


const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_DURATION = 2000;

function type() {
    
    if (isDeleting) {
        currentTitle = jobTitles[index].substring(0, charIndex--);
    } else {
        currentTitle = jobTitles[index].substring(0, charIndex++);
    }

    textAnimation.textContent = currentTitle; 

   
    if (!isDeleting && charIndex === jobTitles[index].length) {
   
        setTimeout(() => {
            isDeleting = true;
        }, PAUSE_DURATION);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % jobTitles.length; 
        setTimeout(type, 500); 
        return; 
    }


    setTimeout(type, isDeleting ? DELETING_SPEED : TYPING_SPEED);
}


type();


let menuIcon = document.getElementById('menu-icon'); 
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


let isScrolling;
window.onscroll = () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        let top = window.scrollY;
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
                });
            }
        });
    }, 100); 
};


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;


const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggleButton.classList.add('dark-mode');
  themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';  
}


themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggleButton.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; 
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';  
    localStorage.setItem('theme', 'light');
  }
});


const phoneInput = document.getElementById("phone");

    
    phoneInput.addEventListener("input", function() {
    
        this.value = this.value.replace(/[^0-9]/g, "");

      
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });

    document.getElementById('hire-btn').addEventListener('click', function(event) {
       
        event.preventDefault();
    
        
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    
       
        setTimeout(function() {
            
            document.querySelector('input[name="subject"]').value = "You're Hired !";
            document.querySelector('textarea[name="message"]').value = "'What am I getting Hired For ?' - Be Descriptive";
        }, 300); 
    });
    