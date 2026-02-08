const form = document.getElementById('introForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // cegah default form submit

  // validasi form
  if (!form.checkValidity()) {
    alert("Lengkapi semua field wajib.");
    return;
  }

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xgozqeaa", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // submit sukses → redirect ke halaman success
      window.location.href = "https://jiruxuen-stack.github.io/INTRO-MARGA-FREEDOM-/success.html";
    } else {
      alert("Gagal submit. Coba lagi.");
    }
  } catch (err) {
    console.error(err);
    alert("Terjadi error, cek koneksi.");
  }
});
