// ── Smooth Scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// ── Alert Kontak ──
const tombol = document.querySelector("button");

tombol.addEventListener("click", function () {
  alert("Pesan berhasil dikirim!");
});