document.addEventListener("DOMContentLoaded", function() {
    var parallaxSections = document.getElementsByClassName("parallax");
    for (var i = 0; i < parallaxSections.length; i++) {
      var section = parallaxSections[i];
      section.classList.add("loaded");
    }
  });
  