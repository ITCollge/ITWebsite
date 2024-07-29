
/* NAVBAR */
const mobileBtn = document.querySelector("#btn-mobile")
  const mobileMenu = document.querySelector("#mobile-menu")
    mobileBtn.addEventListener('click', () =>{
      mobileMenu.classList.toggle('hidden');
    });
/* NAVBAR */


/* DROP DOWN */
const dropDowns = document.querySelectorAll('.dropdown');

dropDowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');

    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            caret.classList.remove('caret-rotate');

        });
    });

});
/* DROP DOWN */

/*
const options = dropdown.querySelectorAll('nav-active li');
options.forEach(option => {
  option.classList.remove('active')
});
option.classList.add('active');
*/



/* NUMBER SECTION */
let  numberValues = document.querySelectorAll(".num");
let  interval = 5000;

numberValues.forEach(numberValues =>{
    let startValue = 0;
    let endValue = parseInt(numberValues.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        numberValues.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
});
/* NUMBER SECTION */

/* DATA */


/* DATA */

