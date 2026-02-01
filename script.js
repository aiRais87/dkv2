// Fungsi untuk smooth scrolling pada navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Fungsi untuk hamburger menu di mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Hapus class active dari semua link
        navLinks.forEach(l => l.classList.remove('active'));
        // Tambah class active pada link yang diklik
        this.classList.add('active');
    });
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fungsi untuk animasi fade-in saat scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
        }
    });
}, observerOptions);

// Terapkan animasi pada section
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Fungsi untuk modal galeri foto
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

modal.style.display = 'none';
modal.style.opacity = '0';
modal.style.transition = 'opacity 0.3s ease';

document.querySelectorAll('.galeri-img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
         setTimeout(() => modal.style.opacity = '1', 10); 
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    setTimeout(() => modal.style.opacity = 'none', 300 );
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Data siswa placeholder 
const siswaData = [
    { nama: "Aditya Pratama P.O", foto: "img/siswa dkv/siswa1.jpg", ig: "https://www.instagram.com/aditya.ptrra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 01." },
    { nama: "Ahanda Rais P", foto: "img/siswa dkv/siswa2.jpg", ig: "https://www.instagram.com/a_ra_is/?utm_source=ig_web_button_share_sheet", quotes: "Absen 02." },
    { nama: "Amanda Ayu Kirana", foto: "img/siswa dkv/siswa3.jpg", ig: "https://www.instagram.com/ayrnaay_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 03." },
    { nama: "Azizah Luna F.M", foto: "img/siswa dkv/siswa4.jpg", ig: "https://www.instagram.com/lagunaluna__/?utm_source=ig_web_button_share_sheet", quotes: "Absen 04." },
    { nama: "Daffa Uria F", foto: "img/siswa dkv/siswa5.jpg", ig: "https://www.instagram.com/dapetodd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 05." },
    { nama: "Dwi Nur Islamiah", foto: "img/siswa dkv/siswa6.jpg", ig: "https://www.instagram.com/dniislmy_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 06." },
    { nama: "Dwiyanti Asmaul Husna", foto: "img/siswa dkv/siswa7.jpg", ig: "https://www.instagram.com/inii.husna07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 07." },
    { nama: "Habibah Fajriana", foto: "img/siswa dkv/siswa8.jpg", ig: "https://www.instagram.com/habibahfj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 08." },
    { nama: "Hany Fadilatun N", foto: "img/siswa dkv/siswa9.jpg", ig: "https://www.instagram.com/nyswaa.a/?utm_source=ig_web_button_share_sheet", quotes: "Absen 09." },
    { nama: "Ilfi Nur Diana", foto: "img/siswa dkv/siswa10.jpg", ig: "https://www.instagram.com/finrdiana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 10." },
    { nama: "Intan Khuma'irah", foto: "img/siswa dkv/siswa11.jpg", ig: "https://www.instagram.com/intan_k_c_l?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 11." },
    { nama: "Jessica Tan", foto: "img/siswa dkv/siswa12.jpg", ig: "https://www.instagram.com/tuttut_jss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 12." },
    { nama: "Lailatul Nurul A", foto: "img/siswa dkv/siswa13.jpg", ig: "https://www.instagram.com/nurulaprilliaa_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 13." },
    { nama: "Lena Agustin W", foto: "img/siswa dkv/siswa14.jpg", ig: "https://www.instagram.com/llenaagustin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 14." },
    { nama: "Mega Aulia P", foto: "img/siswa dkv/siswa15.jpg", ig: "https://www.instagram.com/megaaullp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 15." },
    { nama: "Mevilla Habibah", foto: "img/siswa dkv/siswa16.jpg", ig: "https://www.instagram.com/mevila_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 16." },
    { nama: "M.Faiz Alfarokh", foto: "img/siswa dkv/siswa17.jpg", ig: "https://www.instagram.com/pai1_/?utm_source=ig_web_button_share_sheet", quotes: "Absen 17." },
    { nama: "M.Fu'ad Zulkarnain", foto: "img/siswa dkv/siswa18.jpg", ig: "https://www.instagram.com/fuad.zull/?utm_source=ig_web_button_share_sheet", quotes: "Absen 18." },
    { nama: "M.Fatkhur Rizki", foto: "img/siswa dkv/siswa19.jpg", ig: "https://www.instagram.com/rixxzenn_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 19." },
    { nama: "M.Rosyid", foto: "img/siswa dkv/siswa20.jpg", ig: "https://www.instagram.com/rsyidnys/?utm_source=ig_web_button_share_sheet", quotes: "Absen 20." },
    { nama: "M.Syarif Hidayatullah", foto: "img/siswa dkv/siswa21.jpg", ig: "https://www.instagram.com/musahepp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 21." },
    { nama: "Nabila Adinda P", foto: "img/siswa dkv/siswa22.jpg", ig: "https://www.instagram.com/nbblaa_nda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 22." },
    { nama: "Nadya Dwi A", foto: "img/siswa dkv/siswa23.jpg", ig: "https://www.instagram.com/enadvv_/?utm_source=ig_web_button_share_sheet", quotes: "Absen 23." },
    { nama: "Nayla Aulia A", foto: "img/siswa dkv/siswa24.jpg", ig: "https://www.instagram.com/__nayy.aulia_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 24." },
    { nama: "Nurul Shofa R.M", foto: "img/siswa dkv/siswa25.jpg", ig: "https://www.instagram.com/nurulmariis_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 25." },
    { nama: "Olivia Dwi C.", foto: "img/siswa dkv/siswa26.jpg", ig: "https://www.instagram.com/oliviachyn_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 26." },
    { nama: "Putri Riza A", foto: "img/siswa dkv/siswa27.jpg", ig: "https://www.instagram.com/alyfrd.dvl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 27." },
    { nama: "Rania Maisaroh", foto: "img/siswa dkv/siswa28.jpg", ig: "https://www.instagram.com/rania__maisa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 28." },
    { nama: "Regita Yunia N", foto: "img/siswa dkv/siswa29.jpg", ig: "https://www.instagram.com/regita.yn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 29." },
    { nama: "Septya Ramadhani H", foto: "img/siswa dkv/siswa30.jpg", ig: "https://www.instagram.com/ya_spttyy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 30." },
    { nama: "Siti Nurul K", foto: "img/siswa dkv/siswa31.jpg", ig: "https://www.instagram.com/xyy_blablabla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 31." },
    { nama: "Sri Intan P", foto: "img/siswa dkv/siswa32.jpg", ig: "https://www.instagram.com/sipand_ochii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 32." },
    { nama: "Verda Zerlinda S", foto: "img/siswa dkv/siswa33.jpg", ig: "https://www.instagram.com/zrlind._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 33." },
    { nama: "Veronica Cantika P.P", foto: "img/siswa dkv/siswa34.jpg", ig: "https://www.instagram.com/vrnc_cn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 34." },
    { nama: "Zabrina Salma B.C", foto: "img/siswa dkv/siswa35.jpg", ig: "https://www.instagram.com/tsetsasha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 35." },
    { nama: "Zahratussyita", foto: "img/siswa dkv/siswa36.jpg", ig: "https://www.instagram.com/jahrataci?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 36." },

];

// Fungsi untuk popup siswa
const siswaModal = document.getElementById('siswa-modal');
const modalSiswaImg = document.getElementById('modal-siswa-img');
const modalSiswaNama = document.getElementById('modal-siswa-nama');
const modalSiswaQuotes = document.getElementById('modal-siswa-quotes');
const modalSiswaIg = document.getElementById('modal-siswa-ig');
const closeSiswa = document.querySelector('.close-siswa');

// Tambahkan event listener pada setiap kotak siswa
document.querySelectorAll('.siswa-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        const data = siswaData[index]; // Ambil data berdasarkan index
        if (data) {
            modalSiswaImg.src = data.foto;
            modalSiswaNama.textContent = data.nama;
            modalSiswaQuotes.textContent = `"${data.quotes}"`;
            modalSiswaIg.href = data.ig;
            siswaModal.style.display = 'flex';
        }
    });
});

// Tutup modal saat klik close atau di luar
closeSiswa.addEventListener('click', () => {
    siswaModal.style.display = 'none';
});
siswaModal.addEventListener('click', (e) => {
    if (e.target === siswaModal) {
        siswaModal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});