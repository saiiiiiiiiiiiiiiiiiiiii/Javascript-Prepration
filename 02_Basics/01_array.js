// array 

const myArr = [0,1,2,3,4,5];//Array is an collection of a multiple elements including multiple Datatype like number, string, Boolean, ans many more.
// There are multiple ways of creating an array like 

// const myHeros = ["IronMan", "SuperMan", "SpiderMan"];
// const myArr = new Array(1,2,3,4,5,6,7,8,9,10);
// console.log(myArr[2]);

// Array Methods
// myarray.push(6)
// myarray.push(7)//Push method used to add the element in tha existing array
// myarray.pop()//Pop method removes the last element from the array

// myarray.unshift(9)//Unshift Method used to add the element in the start of the existing array
// myarray.shift()//Shift Method removes the element from the existing array similar lke Pop but removes the element from the front 

// console.log(myarray.includes(11));//This Method says that weather the given number is there in the existing array or not 
// console.log(myarray.indexOf(4));//This Method says that what is the index value of given number in the string 

// const arr = myarray.join()
// console.log(myarray);
// console.log( typeof arr)



// slice and splice
console.log("A ",myArr );
const mynewarray1 = myArr.slice(1,3);
console.log(mynewarray1);
console.log("B ",myArr );
const mynewarray2 = myArr.splice(1,3);//When we use a splice method the items get deleted from the existing string means it maniuplate overall array 
console.log(mynewarray2);
console.log("c ",myArr );

