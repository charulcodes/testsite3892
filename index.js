document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.has-dropdown');

    dropdowns.forEach((dd) => {
        dd.addEventListener('click', function(event) {
            event.stopPropagation();                          
            dd.classList.toggle('is-active');
            const content = dd.querySelector('.navbar-dropdown');
            content.classList.toggle("is-hidden-mobile");
         });
    });

 });

function toggleDisclaimer() {
  const modal = document.querySelector('#disclaimer-modal');
  console.log(modal);
  modal.classList.toggle('is-active');
}