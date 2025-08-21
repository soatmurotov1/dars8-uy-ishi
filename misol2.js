






let narx = +prompt("Narx kiriting")
let miqdor = +prompt("Miqdor kiriting")

function hisobla(narx, miqdor){
    let summa = narx * miqdor
    let chegirma = 0
    if(isNaN(narx)){
        console.log("Xato malumot");
        
    }else if(summa> 100_000){
        chegirma += summa /10
        console.log(`Sizning summangiz ${summa} buldi. Chegirma bilan ${summa-chegirma} buladi.`); 
        

    }else{
        console.log(` ${summa} buldi. Afsuski sizga chegirma qullanilmaydi.`);
        
    }
}
hisobla(narx, miqdor)