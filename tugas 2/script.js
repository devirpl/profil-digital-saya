const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function() {
    bodyHalaman.classList.toggle('light-mode');

    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '🌙 Mode Gelap';
    } else {
        btnTema.textContent = '☀️ Mode Terang';
    }
});
const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function(event) {
    event.preventDefault();
    elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function() {
    elemenModal.classList.remove('show');
});
const btnCopyEmail = document.getElementById("btnCopyEmail");
const emailAddress = "siswa@smkn1boyolangu.sch.id"; // sesuaikan dengan email kamu

btnCopyEmail.addEventListener("click", () => {
  navigator.clipboard.writeText(emailAddress).then(() => {
    const originalText = btnCopyEmail.textContent;
    btnCopyEmail.textContent = "✅ Tersalin!";
    btnCopyEmail.classList.add("copied");

    setTimeout(() => {
      btnCopyEmail.textContent = originalText;
      btnCopyEmail.classList.remove("copied");
    }, 2000);
  });
});
