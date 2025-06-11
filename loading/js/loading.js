// Delay muncul teks dan tombol setelah animasi logo
    window.onload = () => {
      setTimeout(() => {
        document.getElementById("welcome-text").style.opacity = 1;
      }, 1200);

      setTimeout(() => {
        document.getElementById("next-button").style.opacity = 1;
      }, 2000);
    };