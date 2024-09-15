function tampilkanKhodam() {
    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const bulan = document.getElementById("bulan").value;

    if (nama === "" || tanggal === "" || bulan === "") {
        alert("Harap lengkapi semua data!");
        return;
    }

    // Array khodam acak
    const khodam = [
    "Kucing Mager", 
    "Harimau Goyang", 
    "Singa Cemil", 
    "Macan Ngantuk", 
    "Bebek Gaul", 
    "Tupai Suka Ngemil", 
    "Ular Guling", 
    "Naga Ketawa", 
    "Gajah Nyantai", 
    "Kura-kura Gesit", 
    "Kambing Berleher Panjang", 
    "Burung Suka Gosip", 
    "Ayam Super", 
    "Ikan Terbang Malas", 
    "Kelinci Hipster", 
    "Kucing Baper", 
    "Kuda Kaki Pendek", 
    "Elang Tukang Curhat", 
    "Serigala Tukang Tidur", 
    "Rusa Pelari Jago Santai", 
    "Sapi Suka Selfie", 
    "Burung Hantu Tukang Ngopi", 
    "Kupu-kupu Selfie", 
    "Panda Goyang Dumang", 
    "Buaya Setia", 
    "Gajah Pelupa", 
    "Srigala DJ", 
    "Lebah Sibuk Main HP", 
    "Jerapah Berleher Gelisah", 
    "Kucing Posesif",
    "Kucing Garong", 
    "Bebek Berbulu Emas", 
    "Kelinci Pemalas", 
    "Ayam Serba Tahu", 
    "Tupai Tukang Gosip", 
    "Gajah Sensitif", 
    "Kuda Tidur Siang", 
    "Ular Jago Nari", 
    "Naga Baperan", 
    "Lumba-Lumba Pelupa", 
    "Kupu-Kupu Galau", 
    "Ikan Cupang Santai", 
    "Koala Hobi Rebahan", 
    "Burung Gagak Suka Ngemil", 
    "Zebra Selalu Telat", 
    "Singa Tukang Curhat", 
    "Jerapah Tukang Kepo", 
    "Kambing Tukang Selfie", 
    "Panda Penghitung Kalori", 
    "Cicak Kutu Buku", 
    "Kuda Laut Introvert", 
    "Harimau Tukang Tidur", 
    "Burung Hantu Cerewet", 
    "Serigala Tukang Jajan", 
    "Keledai Suka Liburan", 
    "Kambing Selalu Happy", 
    "Kucing Sok Cool", 
    "Anjing Setia Penunggu", 
    "Kura-kura Bijaksana", 
    "Buaya Gigi Emas", 
    "Kadal Tukang Fitness", 
    "Katak Pemikir Jenius", 
    "Domba Tukang Pesta", 
    "Kera Pelupa", 
    "Tikus Kaya Raya", 
    "Beruang Manja", 
    "Kepiting Tukang Selfie", 
    "Lintah Ahli Hypnosis", 
    "Kelelawar Party Animal", 
    "Bebek Tukang Nonton Drakor"
    ];

    // Memilih secara acak khodam
    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];

    // Menampilkan hasil
    const hasilElement = document.getElementById("hasil");
    hasilElement.innerHTML = `Halo ${nama}! Kamu lahir pada tanggal ${tanggal} bulan ${bulan}. Khodam yang mendampingimu adalah: ${randomKhodam}.`;
}