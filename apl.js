let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 }
];

// Menghitung total belanja
let totalBelanja = barang.reduce((total, item) => total + item.harga * item.jumlah, 0);

console.log("Total belanja Bu Astuti: Rp " + totalBelanja.toLocaleString('id-ID'));