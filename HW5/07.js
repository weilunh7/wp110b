function array(number)
{
    var k=[];
    for (var j=0; j<number[0].length; j++)
    {
        k[j] = [];
        for (var i=0; i<number.length; i++)
        {
            k[j][i] = number[i][j];
        }
    }
    return k;
}
console.log(array([[1,2,3],[3,2,1]]))