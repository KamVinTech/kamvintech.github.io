// Add smooth scrolling to anchor links
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
  