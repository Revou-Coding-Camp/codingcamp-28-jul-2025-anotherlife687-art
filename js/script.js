document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Semua kolom wajib diisi!");
    return;
  }

  const outputDiv = document.getElementById("formOutput");
  outputDiv.innerHTML = `
    <h4 class="text-md font-semibold mb-2">Hasil Input:</h4>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>No. Telepon:</strong> ${phone}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;
});
