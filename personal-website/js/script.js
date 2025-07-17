/* ============ typing animation ============== */
let typed = new Typed('.typing', {
  strings: ["", "Web Designer", "web Developer", "Graphic Designer", "Financial Advisor"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})

/* ============ Aside ============== */
const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length,
      allSection = document.querySelectorAll('.section'),
      totalSection = allSection.length;

      for(let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector('a');
        a.addEventListener('click', function() {
        removeBackSection()

          for(let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector('a').classList.contains('active')) {
              addBackSection(j)
             // allSection[j].classList.add('back-section');
            }
            navList[j].querySelector('a').classList.remove('active')
          }
          this.classList.add('active')
          showSection(this)
          if(window.innerWidth < 1200) {
            asideSectionTogglerBtn()
          }
        })
      }

      function removeBackSection() {
          for(let i = 0; i < totalSection; i++) {
          allSection[i].classList.remove('back-section')
        }
      }

      function addBackSection(num) {
        allSection[num].classList.add('back-section'); 
      }

      function showSection(element) {
        for(let i = 0; i < totalSection; i++) {
          allSection[i].classList.remove('active')
        }
        const target = element.getAttribute('href').split('#')[1];
        document.querySelector('#'+ target).classList.add('active')
      }



      function updateNav(element) {
        for(let i = 0; i < totalNavList; i++) {
          navList[i].querySelector('a').classList.remove('active');
          const target = element.getAttribute('href').split('#')[1];
          if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
          }
        }
      }

      document.querySelector('.hire-me').addEventListener('click', function() {
        const selectionIndex = this.getAttribute('data-selection-index')
        showSection(this)
        updateNav(this)
        removeBackSection()
        addBackSection(selectionIndex)
      })

      const navTogglerBtn = document.querySelector('.nav-toggler'),
            aside = document.querySelector('.aside');
            navTogglerBtn.addEventListener('click', () => {
              asideSectionTogglerBtn()
            })

      function asideSectionTogglerBtn() {
        aside.classList.toggle('open');
        navTogglerBtn.classList.toggle('open')
        for(let i = 0; i < totalSection; i++) {
          allSection[i].classList.toggle('open')
        }
      }


// const navLinks = document.querySelectorAll('.nav li a');
// const sections = document.querySelectorAll('section');

// function removeActive() {
//     navLinks.forEach(anchor => {
//     anchor.classList.remove('active')
// }) 
// }

// removeActive()

// navLinks.forEach(anchor => {
//     anchor.addEventListener('click', () => {
//         removeActive()
//         anchor.classList.add('active');
//     })
// })


// window.addEventListener('scroll', () => {
//   let current = '';

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.offsetHeight;

//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute('id');
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.remove('active');
//     if (link.getAttribute('href') === '#' + current) {
//       link.classList.add('active');
//     }
//   });
// });


