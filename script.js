function CualEsMayor(NUM1,NUM2,NUM3){
    if(NUM1>NUM2 && NUM1>NUM3){
       return NUM1;
    }else if(NUM2>NUM1 && NUM2>NUM3){
        return NUM2;
    }else{
        return NUM3;
    }
}
console.log(CualEsMayor(1,2,3));