/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== List of RESEARCH ====================*/

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


/*==================== CLICK TO Zoom ====================*/

const images = document.querySelectorAll('.work__img > img');

images.forEach(img => {
    img.addEventListener('click', () => {
        // Create overlay div for fullscreen effect
        const overlay = document.createElement('div');
        overlay.classList.add('fullscreen-overlay');

        // Clone the clicked image and apply the fullscreen class
        const fullscreenImage = img.cloneNode(true);
        fullscreenImage.classList.add('fullscreen-img');

        // Create a close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.classList.add('close-btn');

        // Append cloned image and close button to the overlay
        overlay.appendChild(fullscreenImage);
        overlay.appendChild(closeButton);
        document.body.appendChild(overlay);

        // Add event listener to close fullscreen when the close button is clicked
        closeButton.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        // Also allow clicking the overlay (outside the image) to close fullscreen
        overlay.addEventListener('click', (e) => {
            if (e.target !== fullscreenImage && e.target !== closeButton) {
                document.body.removeChild(overlay);
            }
        });
    });
});
 
/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
let itemClass = this.parentNode.className;

for (i = 0; i < skillsContent.length; i++) {
  skillsContent[i].className = "skills__content skills__close";
}
if (itemClass === "skills__content skills__close") {
  this.parentNode.className = "skills__content skills__open";
}
}

skillsHeader.forEach((el) => {
el.addEventListener("click", toggleSkills);
});



// ABOUT READMORE

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");
readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMoreBtn.innerText === "Read More") {
        readMoreBtn.innerText = "Read Less";
    } else {
        readMoreBtn.innerText = "Read More";
    }
});


// Get all elements with class "read-more-btn"
const readMoreBtns = document.querySelectorAll('.read-more-btn');

// Add event listener to each button
readMoreBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Get the parent element of the button
    const parent = btn.parentNode;

    // Get the text element that needs to be expanded
    const text = parent.querySelector('.moreText');

    // Check if the text is already expanded
    if (text.style.display === 'block') {
      // If expanded, collapse the text
      text.style.display = 'none';
      btn.textContent = 'Read More';
    } else {
      // If not expanded, expand the text
      text.style.display = 'block';
      btn.textContent = 'Read Less';
    }
  });
});

/* Created by Tivotal */

const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
   
}

inputs.forEach((input) =>{
    input.addEventListener("focus", focusFunc);

    input.addEventListener("blur", blurFunc);
})



// Testimonal slider
let currentSlide = 0;
let autoScroll;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.querySelector('.slide').offsetWidth;
  currentSlide += direction;
  
  // Keep the currentSlide index within bounds
  if (currentSlide < 0) {
    currentSlide = slides.children.length - 1;
  } else if (currentSlide >= slides.children.length) {
    currentSlide = 0;
  }

  // Move the slides container
  slides.scrollLeft = currentSlide * slideWidth;
}

function startAutoScroll() {
  autoScroll = setInterval(() => {
    moveSlide(1); // Move to the next slide automatically
  }, 3000); // 3000 milliseconds = 3 seconds interval
}

function stopAutoScroll() {
  clearInterval(autoScroll); // Stop auto-scrolling
}

// Start the auto-scroll when the page loads
window.onload = function() {
  startAutoScroll();
};

// Optionally, stop the auto-scroll when the user hovers over the slider (for manual control)
document.querySelector('.slider').addEventListener('mouseover', stopAutoScroll);
document.querySelector('.slider').addEventListener('mouseout', startAutoScroll);





/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skilds__subtitle, .skilds__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skilds__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skilds__data, .work__img, .contact__input, .skills__content',{interval: 200}); 
