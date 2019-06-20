const summation = function (array){
    var positiveSum = 0;
    var negativeSum = 0;
    for (var i=0; i < array.length; i++){
        if (array[i] >= 0){
            positiveSum += array[i];
        } else { negativeSum += array[i]; }
    }
    console.log(positiveSum, negativeSum);
}

summation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);