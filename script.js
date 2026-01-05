// ===================================
// 1. TYPING EFFECT (Mesin Ketik)
// Hanya berjalan jika elemennya ada (di Halaman Home)
// ===================================
const typewriter = document.getElementById("typewriter");

if (typewriter) {
  const texts = [
    "Video Editor",
    "Desain Grafis",
    "Website Developer"
  ];

  let textIndex = 0;
  let charIndex = 0;
  const speed = 120;
  const delayAfterComplete = 1500;

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

  // Jalankan efek
  typeEffect();
}

// ===================================
// 2. REVEAL ANIMATION
// Animasi muncul saat scroll/load
// ===================================

// Fungsi Utama Animasi Reveal
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

// Jalankan saat halaman dimuat
window.addEventListener("load", reveal);

// Jalankan saat di-scroll
window.addEventListener('scroll', reveal);


// ===================================
// 3. NAVIGATION ACTIVE STATE
// Menandai menu aktif berdasarkan URL
// ===================================
const navLi = document.querySelectorAll(".nav-menu a");
const currentUrl = window.location.href;

navLi.forEach((a) => {
  // 1. Hapus dulu class 'active' dari SEMUA link (Reset)
  a.classList.remove("active");

  // 2. Baru tambahkan ke yang sesuai URL browser saat ini
  if (a.href === currentUrl) {
    a.classList.add("active");
  }
});


// ===================================
// 4. MUSIC PLAYER
// ===================================
var music = document.getElementById("bg-music");
var isPlaying = false;

// Cek dulu apakah elemen musik ada (mencegah error)
if (music) {
  function toggleMusic() {
    if (isPlaying) {
      music.pause();
      document.querySelector(".music-player span").innerText = "🎵 Play Music";
    } else {
      // Browser modern butuh interaksi user dulu baru bisa play
      music.play().catch(error => {
        console.log("Interaksi user dibutuhkan untuk memutar musik.");
      });
      document.querySelector(".music-player span").innerText = "⏸ Pause Music";
    }
    isPlaying = !isPlaying;
  }
}

// ===================================
// 5. SECURITY & UTILS
// ===================================

// Mencegah Klik Kanan
document.addEventListener('contextmenu', event => event.preventDefault());

// Mencegah Inspect Element (Shortcut Keyboard)
document.onkeydown = function(e) {
  if(e.keyCode == 123) return false; // F12
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; // Ctrl+Shift+I
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false; // Ctrl+Shift+C
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; // Ctrl+U
}

// Title Change on Blur (Gimmick)
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "😭 Jangan pergi...";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
