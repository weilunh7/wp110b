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
    reduce(num)
    {
        var min;
        if(this.a>this.b) min = this.b;
        else min = this.a;
        for(let i=1 ; i<=min ; i++){
            if(this.a%i==0 && this.b%i==0){
                this.a = this.a/i;
                this.b = this.b/i;
                min = min/i;
                i=1;
            }
        }
    }
}

var r1 = new Ratio(6,9); 
r1.reduce(); 
console.log(r1.toString());