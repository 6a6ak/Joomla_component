document.addEventListener("DOMContentLoaded", function() {
    const targetSection = document.querySelector(".target-section");
    const containerHeader = document.querySelector(".container-topbar");

    function checkDistance() {
      const scrollPosition = window.scrollY;
      const targetTop = targetSection.offsetTop;
      const headerHeight = containerHeader.offsetHeight;
      
      const distance = targetTop - (scrollPosition + headerHeight);
      
      if (distance < 10 && distance < -10) {
       containerHeader.style.background = "#628AC6";

      } else {
        containerHeader.style.backgroundColor = "transparent";
      }
    }

    window.addEventListener("scroll", checkDistance);
    checkDistance();  // Initial check
  });



  document.addEventListener('DOMContentLoaded', function() {
    // Get elements with class 'nav-item'
    const menuItems = document.getElementsByClassName('nav-item');

    // Loop through each item and add click event listener
    for(let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            // Get the navbar div by its id
            const navbarDiv = document.getElementById('navbar1');
            
            // Remove the 'show' class from the navbar div
            navbarDiv.classList.remove('show');
        });
    }
});
