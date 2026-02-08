const form = document.getElementById('introForm');
const toast = document.getElementById('toast');

// fungsi toast
function showToast(msg, duration = 3000) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// notif pas klik intro-box
const introBox = document.querySelector('.intro-box');
if(introBox) {
  introBox.addEventListener('click', () => {
    showToast("Klik form untuk isi data diri, jangan malas! ✨", 3500);
  });
}

// notif pas load halaman
window.addEventListener('load', () => {
  showToast("Lengkapi Semua Data Di Bawah🤝! 🌌", 4000);
});

// submit form
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    showToast("Lengkapi semua field wajib.", 3000);
    return;
  }

  showToast("Mengirim data… ⏳", 1000); // optional singkat

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mojnqbee", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // langsung redirect tanpa menunggu toast
      window.location.href = "success.html";
    } else {
      showToast("Gagal submit. Coba lagi.", 3000);
    }
  } catch (err) {
    console.error(err);
    showToast("Terjadi error, cek koneksi.", 3000);
  }
});

