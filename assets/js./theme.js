// Scrolls up the page regardless of where the user is on the page.
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

// Play video function
function playPause() {
  const myVideo = document.getElementById("video");
  const button = document.getElementById("play-button");
  if (myVideo.paused) {
    button.style.display = "none";
    myVideo.play();
  }
  else {
    button.style.display = "inline";
    myVideo.pause();
  }
}

// Ticking the box funcion
const checkBox = document.getElementById('checkbox-accept');

function check(){
  const div = document.querySelector(".checkbox-inner");

    if (checkBox.checked === false) {
      div.style.backgroundColor = "#E7E7E7";
    } else {
      div.style.backgroundColor = "#FFA800";
    }
  }

checkBox.addEventListener("click", check);