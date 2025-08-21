








let som = +prompt("Sum kiriting: ")


function konvertatsiya(som){
    if(isNaN(som)){
        console.log(`Xato malumot kiritildi`);
        
    }
    else{
        let dollar =0
        dollar += som /12500
        console.log(`${som} so'm ${dollar} dollarga teng.`);
    }
    
}
konvertatsiya(som)