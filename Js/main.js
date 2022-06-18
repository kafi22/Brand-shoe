const openBtn = document.getElementById('open-menu');

const  nav = document.querySelector('nav');

const closeBtn = document.getElementById('close-menu');


    openBtn.addEventListener('click', () => {

         nav.classList.add('block')
    });

    
    closeBtn.addEventListener('click', () => {

        nav.classList.remove('block')
   })


   const aTag = document.querySelectorAll('a');

   aTag.forEach(function (a) {
     a.addEventListener('click', () => {
          nav.classList.remove('block')
     })
   })

   