function array(num1,num2) 
{
    var add = [];
    for (var i=0; i<num1.length; i++)
    {
        add[i] = [];
        for (var j=0; j<num1[i].length; j++)
        {
            add[i][j] = num1[i][j]+num2[i][j];
        }
    }
    return add;
}
console.log(array([[1,2],[3,4]], [[1,1],[1,1]]))