// var _myname = true;
// var _hey__yr ='kya haal'
// var $mycom ='hooga'
// console.log(typeof(_myname));
// console.log(_hey__yr);
// console.log($mycom);
// console.log(" "+" ");
// var iamuseless ="null";
// console.log(iamuseless);
// console.log(typeof(iamuseless));

// var hey;
// console.log(typeof(hey)) 

// // What is NaN?
// //  nan is property of the global Object
// // in other words it is variable in global scope 
// //  the initial vvalue of na n is not a 

// // var num = 988882292;
// // var name   = "utkarsh"
// // console.log(isNaN(num));
// // console.log(isNaN(name ));
// NaN === NaN;
 
// isNaN(NaN);

// Number.isNaN(NaN);
// console.log(NaN === NaN);

// console.log(isNaN(NaN));
//  var a = 5;
//  var b = 5;
//  console.log("hettt"+ a==b)
//  // bich m + operator k krn false dega
//  console.log(a==b);
// console.log(3**3);//exponent 

// const months =['jan','march','april','june','july']

// const newm = months.splice(0,2   ,'JAN');
// console.log(months);

// MAP  
// Return a new array containing thr results of calling a function on every element in this array


// const arr = [1,6,7,8,99,75,34]

// const newarr =arr.map ((curElem,index,arr)=>{
//      return curElem<50;

// })
// console.log(newarr)
// Math.sqrt()// for square
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);  

//  let he = "i am utkarsh"
//  let me = he.replace('utkarsh','UTKARSH');
//  console.log(me);

// 4 ways to create a new date object


// let currdate = new Date(25561323238588);
// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// const curtime =new Date();
// console.log(curtime.getTime());
// console.log(curtime.getHours());
// console.log(curtime.getMinutes());
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
        listContainer.appendChild(li);
        inputBox.value = "";
    }
}

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
