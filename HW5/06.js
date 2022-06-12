function factor(number){
    var c=[];
    var n=0;
    var j = number;
    var i=2;
    while(i<=j){
        if(j%i==0){
            j=j/i;
            n++;
            c.push(i);
        }
        else i++;
        if(j==1) break;
    }
    return c;
}
console.log(factor(45))