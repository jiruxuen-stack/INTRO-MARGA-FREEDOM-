const form = document.getElementById('introForm');
const introBox = document.getElementById('introBox');

// notif saat klik intro
introBox.addEventListener('click', () => {
  alert("Isi form intro dulu sebelum gabung grup!");
});

// submit form dengan notif tambahan
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    alert("Lengkapi semua field wajib.");
    return;
  }

  // notif sebelum submit
  alert("Data terkirim! Tunggu validasi admin sebelum gabung grup.");

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xgozqeaa", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      window.location.href = "https://jiruxuen-stack.github.io/INTRO-MARGA-FREEDOM-/success.html";
    } else {
      alert("Gagal submit. Coba lagi.");
    }
  } catch (err) {
    console.error(err);
    alert("Terjadi error, cek koneksi.");
  }
});
