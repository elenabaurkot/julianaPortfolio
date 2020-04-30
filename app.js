const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li'); 
  // const link = document.getElementById('link');
  
  burger.addEventListener('click', ()=> {
      // Toggle Nav
      nav.classList.toggle('nav-active');

      // Animate Links
      navLinks.forEach((link, index) => {
          if(link.style.animation) {
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .1}s`;
          }
      });
      // Burger Animation
      burger.classList.toggle('toggle');
  });
};


const navClose = () => {
  const nav = document.querySelector('.nav-links');
  const link = document.getElementsByClassName('link');
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelectorAll('.nav-links li'); 

  for (let i = 0 ; i < link.length; i++) {
    link[i].addEventListener('click', ()=> {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    
  // when user clicks a link close the drop down menu
  // link.addEventListener('click', ()=> {
  //   nav.classList.toggle('nav-active');
  //   burger.classList.toggle('toggle');

    // Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
          link.style.animation = '';
      } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .1}s`;
      }
    });
  })
}
};


navSlide();
navClose();