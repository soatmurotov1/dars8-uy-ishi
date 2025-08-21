








function parolCheck(str){
    if(str.length< 8){
        console.log(`Kuchsiz parol: 8 ta belgidan kam`);
        
    }else if(!/[A-Z]/.test(str)){
        console.log(`Kuchsiz parol. katta harf yuq.`);

    }else if(!/[a-z]/.test(str)){
        console.log(`kuchsiz parol. kichik harf yuq.`);
        
    }else if(!/[0-9]/.test(str)){
        console.log(`kuchsiz parol. raqam yuq`);
        
    }else{
        console.log(`kuchli parol`);
        
    }

        
    }

let str ="Salomlashish12"
parolCheck(str)