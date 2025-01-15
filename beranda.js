document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen tombol dan popup
    const startButton = document.getElementById("startButton");
    const popup = document.getElementById("popup");
    const okButton = document.getElementById("okButton");
    const cancelButton = document.getElementById("cancelButton");
  
    // Fungsi untuk menampilkan popup
    startButton.addEventListener("click", function () {
      popup.classList.add("show"); // Tambahkan kelas untuk menampilkan popup
    });
  
    // Fungsi untuk tombol OK
    okButton.addEventListener("click", function () {
      // Pindahkan ke halaman materi.html
      window.location.href = "materi.html";
    });
  
    // Fungsi untuk tombol Batal
    cancelButton.addEventListener("click", function () {
      // Sembunyikan popup
      popup.classList.remove("show"); // Hapus kelas untuk menyembunyikan popup
    });
  });
  