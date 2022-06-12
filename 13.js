class Ratio
{
    constructor(a, b)
    {
        this.a = a;
        this.b = b;
    }

    toString()
    {
        return this.a + "/" + this.b;
    }
    add(num)
    {
        return this.a * num.b + num.a * this.b +"/"+ this.b * num.b;
    }
    sub(num){
        return this.a * num.b - num.a * this.b +"/"+ this.b * num.b;
    }
    mul(num)
    {
        return new Ratio(this.a * num.a, this.b * num.b);
    }

    div(num)
    {
        return new Ratio(this.a * num.b, this.b * num.a);
    }
}

var r1 = new Ratio(1,3);
var r2 = new Ratio(2,4); 
var r3 = r1.mul(r2); 
console.log(r3.toString());
