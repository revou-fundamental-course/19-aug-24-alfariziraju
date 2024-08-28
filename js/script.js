document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    document.getElementById('outputNama').textContent = nama;
    document.getElementById('outputTanggalLahir').textContent = tanggalLahir;
    document.getElementById('outputJenisKelamin').textContent = jenisKelamin;
    document.getElementById('outputPesan').textContent = pesan;

    const currentTime = new Date().toString();
    document.getElementById('currentTime').textContent = `Current time: ${currentTime}`;

    document.getElementById('outputSection').hidden = false;
});
