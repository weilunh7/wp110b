class point
{
    constructor(Array)
    {
        this.x = Array;
    }

    length()
    {
        let C=0;
        for(let i=0 ; i<this.x.length ; i++)
        {
            C+=this.x[i]*this.x[i];
        }
        return Math.sqrt(C);
    }

    neg()
    {
        let c=[];
        for(let i=0 ; i<this.x.length ; i++)
        {
            c[i]=this.x[i]*-1;
        }
        return c;
    }

    add(V2)
    {   let C=[];
        for(let i=0 ; i<this.x.length ; i++)
        {
            C[i]=this.x[i]+V2[i];
        }
        return C;
    }

    sub(V2)
    {
        let C=[];
        for(let i =0 ; i<this.x.length ; i++)
        {
            C[i]=this.x[i]-v2.x[i];
        }
        return new point(C);
    }

    dot(v2)
    {
        let r = 0;
        for(let i=0;i<this.x.length ; i++)
        {
            r += this.x[i]*v2.x[i];
        }
        return r;
    }

    distance(v2)
    {
        return this.sub(v2).length();
    }

    toString()
    {
        return '(' + this.x + ')';
    }
}
let v = new point([4,5,6]);
let v2 = new point([6,5,4]);
console.log(v.toString());
console.log(v.length().toString());
console.log(v.sub(v2).toString());
console.log(v.distance(v2).toString());
console.log(v.dot(v2).toString());