







let daqiqalar = -90
let soat = 0
let minut = 0

function ajratish(daqiqalar){
    if(daqiqalar> 60 && 0 < daqiqalar){
        soat += Number.parseInt(daqiqalar / 60)
        minut += daqiqalar % 60
        console.log(`${soat} soat ${minut} daqiqa `);
    }else if(0<  daqiqalar){
        console.log(` 0 soat ${daqiqalar} daqiqa`);
        
    }else{
        console.log(`Xato malumot`);
        
    }
    
}

ajratish(daqiqalar)