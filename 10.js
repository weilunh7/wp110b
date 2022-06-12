function integral(c,a,b){
    var d;
    d = (Math.pow(b,(c+1))-Math.pow(a,(c+1)))/(c+1);
    return d;
}
integral(2,0,1)