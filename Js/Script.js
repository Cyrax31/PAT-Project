document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("recommendation-grid");
    const items = Array.from(grid.children);
    const shuffledItems = items.sort(() => Math.random() - 0.5);
    grid.innerHTML = "";
    shuffledItems.forEach(item => grid.appendChild(item));
});

// Mencegah browser menyimpan posisi scroll
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Paksa scroll ke atas saat halaman dimuat
window.onload = function () {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', function () {
    let rekomendasi = document.getElementById('rekomendasi');
    let lastScrollTop = 0;

    // Memastikan elemen #rekomendasi ditemukan
    if (rekomendasi) {
        window.addEventListener('scroll', function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            // Mengecek apakah scroll bergerak ke bawah atau ke atas
            if (currentScroll > lastScrollTop) {
                // Jika scroll ke bawah, sembunyikan elemen
                rekomendasi.classList.add('hidden');
            } else {
                // Jika scroll ke atas, tampilkan elemen
                rekomendasi.classList.remove('hidden');
            }

            // Menyimpan posisi scroll terakhir
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
        });
    } else {
        console.error('Element #rekomendasi tidak ditemukan!');
    }
});


