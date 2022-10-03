//1. Write a JS function to clone an array
let array_clone = function (arrayA){
    return arrayA.slice(0);
};
console.log(array_clone([1,2,4,0]));
console.log(array_clone([1,2,[4,0]]));

//2. Write a JS function to get the first element of an array, passing a parameter 'n' will return the first 'n' elements of the array.
function first(array, n) {

    if (array.length == 0) {
        return []
    } else if (n == undefined) {
        return array[0]
    } else {
        let outcome = []

        for (let i = 0; i < n; i++) {
            if (i < array.length) {
                outcome.push(array[i])
            }
        }

        return outcome
    }
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//3. Write a JS function to get the last element of an array, passing a parameter 'n' will return the last 'n' elements of the array.
function last(array, n) {

    if (array.length == 0) {
        return []
    } else if (n == undefined) {
        let lastIndex = array.length - 1
        return array[lastIndex]
    } else {
        let numberOfItems = array.length
        let startIndex = numberOfItems - n
        
        if (n > numberOfItems) {
            return array
        } else {
            return array.slice(startIndex, array.length)
        }
    }
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

//4. Write a JS program that accept a number as input and insert dashes (-) between each two even numbers. For example - if you accept 025468, the output should be 0-254-6-8
let num = 25468;
let str = num.toString();
console.log(str);
let output = [0, "-" ,str[0]];
console.log(output);

for (let i =1; i<str.length; i++){
    if(str[i-1]%2 === 0 && str[i]%2 === 0){
        output.push("-",str[i]);
    }else {
        output.push(str[i]);
    }
}
console.log(output.join(""));

//5. Write a JS program to sort the items of an array. Sample array: var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 2];
let arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr1);
arr1.sort();
console.log(arr1);

//6. Write a JS program to find the most frequent item of an array. Sample array: var arr2 = [3, 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let counter = 0;
let maxfreq = 1;
let item; 

for (let i = 0 ; i < arr2.length; i++) {
   
    for (let j = i; j < arr2.length; j++) {
       if (arr2[i] == arr2[j]) {
        counter++;
       } 
       if (maxfreq < counter) {
        maxfreq = counter;
        item = arr2[i];
       }
        
    }
   counter = 0; 
}
console.log(item + " ( " + maxfreq + " " + "times )");


//7. Write a JS program which prints the elements of the following array. Sample array: var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; Note: Use Nested for Loops

let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < a.length; i++) {
      
    console.log("row" + i);
    
    for (let j = 0; j < a[i].length; j++) {
        console.log(" " + a[i][j]); 
        
    }
    
}



//8. 
let array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1){
    s += array[i];
    p *= array[i];
}
console.log("Sum is: " +s + " and" +" Product is: " +p);

//9. We have the following arrays: Color = ["Blue", "Green", "Red", "Orange", "Violet" "Indigo", " Yellow"]; o = ["th", "st". "nd", "rd"]. Write a JS program to display the colors in the following ways : "1st choice is Blue." "2nd choice is Green." "3rd choice is Red." Note: Use ordinal numbers to tell their positions.

//10. There are two arrays with individual values, Write a JS program to compute the sum of each individual index value from the given arrays. Sample arrays: array1 = [1, 0, 2, 3, 4]; array2 = [3, 5, 6, 7, 8, 13];
let array1 = [1, 0, 2, 3, 4]
let array2 = [3, 5, 6, 7, 8, 13];

function sum(array1, array2){
    

}