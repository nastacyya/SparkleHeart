
//A fixed anchor link, which, when clicked, scrolls up the page regardless of where the user is on the page.
const fixedAnchor = document.getElementById("fixedAnchor");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      fixedAnchor.style.display = "block";
    } else {
      fixedAnchor.style.display = "none";
    }
    
    // Stop before footer
    const footer = document.querySelector("footer");
    const footerTop = footer.getBoundingClientRect().top;
    if (footerTop <= window.innerHeight) {
      fixedAnchor.style.bottom = `${window.innerHeight - footerTop + 20}px`;
    } else {
      fixedAnchor.style.bottom = "20px";
    }
  });

  fixedAnchor.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });