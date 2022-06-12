function f(a,b){
    anser = [];
    for(a;a<=b;a++){
        if(a%3 != 0&&a%5 != 0&&a%7 != 0){
                anser.push(a);
            }
        }
    return anser;
    }
console.log(f(5,15));