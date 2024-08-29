/* ini adalah javascript */
// fungsi welcome header
document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit default

    // Ambil nilai dari input nama
    var nama = document.getElementById('nama').value;

    // Masukkan nama ke dalam header "Selamat Datang"
    document.getElementById('user-name').textContent = nama;

    // Tampilkan header jika tidak terlihat (opsional)
    document.getElementById('welcome-header').style.display = 'block';
});

//fungsi banner autoslide
// Mengambil elemen banner dan semua gambar di dalamnya
const banner = document.querySelector('.banner');
const images = banner.querySelectorAll('img');

// Menyimpan indeks gambar yang sedang ditampilkan
let currentIndex = 0;

// Interval waktu dalam milidetik untuk mengganti gambar
const intervalTime = 3000;

// Fungsi untuk menampilkan gambar tertentu
function showImage(index) {
  console.log(`Menampilkan gambar ke-${index + 1}`); // Menambahkan console log untuk melihat gambar mana yang sedang ditampilkan
  images[currentIndex].style.display = 'none';
  images[index].style.display = 'block';
  currentIndex = index;
}

// Fungsi untuk mengganti gambar secara otomatis
function autoSlide() {
  const nextIndex = (currentIndex + 1) % images.length;
  console.log(`Mengganti gambar ke-${nextIndex + 1}`); // Menambahkan console log untuk melihat gambar mana yang akan ditampilkan selanjutnya
  showImage(nextIndex);
}

// Memulai pergantian gambar secara otomatis
setInterval(autoSlide, intervalTime);

//input data pada form
document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();// mencegah form agar tidak kosong

    const nama = document.getElementById('nama').value; //ambil nilai nama
    const tanggalLahir = document.getElementById('tanggalLahir').value;//ambil nilai tgl lahir
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;//ambil nilai jenis kelamin
    const pesan = document.getElementById('pesan').value;//ambil nilai pesan

    document.getElementById('output-nama').textContent = nama;//
    document.getElementById('output-tgllahir').textContent = tanggalLahir;
    document.getElementById('output-jeniskelamin').textContent = jenisKelamin;
    document.getElementById('output-pesan').textContent = pesan;

    const currentTime = new Date().toString();
    document.getElementById('current-time').textContent = `Current time: ${currentTime}`;

    document.getElementById('output-section').hidden = false;
});
