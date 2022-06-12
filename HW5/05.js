function answer(number) {
    var sum = 0,Length = number.length;
    for(let i=0 ; i < Length ; i++) {
        sum = sum + number[i];
}
    return sum / Length;
}
var number = [1,2,3,4,5];
console.log(answer(number))