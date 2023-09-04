/* Add smooth scrolling to anchor links
document.addEventListener("DOMContentLoaded", function() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", function(e) {
        e.preventDefault();
        var target = this.getAttribute("href");
        var targetElement = document.querySelector(target);
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  });
 */

  //intersection observer

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else{
      entry.target.classList.remove('show');
    }
  });
});

  const hiddentElements = document.querySelectorAll('.hidden');
  hiddentElements.forEach((el) => observer.observe(el));
