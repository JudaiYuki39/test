
function hitungBiayaTanah(panjang, lebar, hargaPerMeter, ppn) {
    
    let luas = panjang * lebar;
    
   
    let hargaTanah = luas * hargaPerMeter;
    
  
    let nilaiPPN = hargaTanah * (ppn / 100);
    
   
    let totalBiaya = hargaTanah + nilaiPPN;
    
    return totalBiaya;
}


let panjangTanah = 20.5; 
let lebarTanah = 30; 
let hargaPerMeterPersegi = 1500000; 
let ppn = 15; 


let totalBiaya = hitungBiayaTanah(panjangTanah, lebarTanah, hargaPerMeterPersegi, ppn);
console.log("Total biaya yang harus dibayarkan Pak Arman adalah Rp " + totalBiaya.toLocaleString('id-ID') + ",-");