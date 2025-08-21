








function parolCheck(str){
    if(str.length> 8){
        let harf =str.toLowerCase()
        let Harf = str.toUpperCase()
        
        console.log(Harf);
        console.log(harf);
        
        console.log("Kuchli parol");
        
    }else{
        console.log("Kuchsiz parol");
        
    }
}

let str ="SAlomertui"
parolCheck(str)