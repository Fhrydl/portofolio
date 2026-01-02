// ===================================
// 1. TYPING EFFECT (Mesin Ketik)
// ===================================
const texts = [
  "Video Editor",
  "Desain Grafis",
  "Website Developer"
];

let textIndex = 0;
let charIndex = 0;
const speed = 120;
const delayAfterComplete = 1500;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typewriter.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(eraseEffect, delayAfterComplete);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typewriter.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, speed / 2);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, speed);
  }
}

// Jalankan efek saat halaman dimuat
typeEffect();

// ===================================
// 2. PAGE EVENTS (Load, Scroll)
// ===================================

// Saat Halaman Selesai Loading
window.addEventListener("load", function() {
  // Matikan Preloader
  var preloader = document.getElementById("preloader");
  if(preloader) preloader.style.display = "none";

  // Tampilkan Toast setelah 2 detik
  setTimeout(function() {
    var toast = document.getElementById("toast");
    if(toast) {
      toast.className = "show";
      // Hilangkan Toast setelah 3 detik
      setTimeout(function(){ 
        toast.className = toast.className.replace("show", ""); 
      }, 3000);
    }
  }, 2000);
});

// Efek Muncul saat Scroll (Reveal)
window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
  }
}

// Active Menu Link on Scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// ===================================
// 3. SECURITY & UTILS
// ===================================

// Mencegah Klik Kanan
document.addEventListener('contextmenu', event => event.preventDefault());

// Mencegah Inspect Element (Shortcut)
document.onkeydown = function(e) {
  if(e.keyCode == 123) return false;
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
}

// Title Change on Blur
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "😭 Jangan pergi...";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

// ===================================
// 4. MUSIC PLAYER
// ===================================
var music = document.getElementById("bg-music");
var isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    document.querySelector(".music-player span").innerText = "🎵 Play Music";
  } else {
    music.play();
    document.querySelector(".music-player span").innerText = "⏸ Pause Music";
  }
  isPlaying = !isPlaying;
}
