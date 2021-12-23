//1 задача  +
/*
function razn(a,b,c){
    let d = (a-b)/c;
    console.log(d);
    alert(d);
}
razn (12,6,2)
*/
//2 задача +
/*
let b = function square(num) {
    return num*num;
};
let c = function cube(num) {
    return num*num*num;
};
console.log(b(5),c(5));
*/
//3 задача +
/*
a = prompt('Введите число а');
b = prompt('Введите число b');
let min_max = function(a,b) {
    if(a<b) {
        return  (a +' меньше '+ b);
    } if (a>b) {
        return  (a +' большее '+ b);
    }
 };
alert(min_max(a,b));
*/
//4 задача ////////1  вариант +
/*
let arr3 = [];
function ar(a,b){
    
    let x = a;
    while ( x <= b) {
        x++;
        arr3.push(x-1)
    } 
}
function show() {
    console.log(arr3);
}
ar(1,10)
show()
*/
//4 задача ////////2  вариант +
/*
function ar(a,b){
    let arr3 = [];
    let x = a;
    while ( x <= b) {
        x++;
        arr3.push(x-1)
    } 
    return t = arr3
}
function show() {
    console.log(t);
}
ar(1,10)
show()
*/

//5 задача +
/*
function isEven(a) {
    if(a % 2 == 0) {
        return true;
    }
    if(a % 2 !== 0)
      {
        return  false;
    }
}
console.log(isEven(2));

//6 задача

arr = [1,2,3,4,5,11,10,15,17];
arr2 = []
function arrayN(arr){

 for(i=0; i<=arr.length-1; i++){
     if (isEven(arr[i])){
        arr2.push(arr[i]) 
     }
 }  
 return arr2
}
console.log(arrayN(arr));
*/




