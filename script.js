//var myArray = [1,2,3,4,5,6,7,8,9];


function reverseArray(array){
    var arrayLength = array.length;
    var newArray = [];
    for(var i = 0; i < arrayLength; i++){
       newArray.push(array.pop());
    }
    return newArray;
}

function reverseArrayInPlace(array){
    var arrayLength = array.length - 1;
    for(var i = 0; i < Math.floor(arrayLength/2); i++){
        var a = array[i];
        var b = array[arrayLength - i];
        array[arrayLength - i] = a;
        array[i] = b;
    }

}



//console.log(reverseArray(myArray));

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]