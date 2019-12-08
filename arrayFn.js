const arr20=[1,2,3,4];
const arr21=[10,20,30,40];

//add
arr20.push(5);// add element to the end of array and return length
arr20.push(6,7);// add elements to the end of array and return length
arr20.push(arr21);// add array to the end of array and return length
arr20.push(...arr21);// add elements array  to the end of array and return length

arr20.unshift(45);// add element to the start  of array and return length

arr20.splice(1,0,78)// start with position one and 0: dont delete any item  and add 75  pass start:position zero by default , deleteCount:how many item ypu want to delete ,items :to add items
arr20.splice(1,0,78,56,54) // add 78 56 54 start with position 1


// remove 
arr20.pop() // remove element from and return the element that removed or undefined if array is []

arr20.shift() // remove the first element from array and return it 

arr20.splice(2,2)// remove elements at position 2 and delete 2 items  return remove Elements 
arr20.splice(-1,1)// remove last item in array its look for the right
arr20.splice(-2,1)// remove before the last item in array its look for the right
arr20.splice(0) // without deleteCount will  delete all items return remove Elements 

// copy
arr20.slice();// return copy of array
let copyArr20=[].concat(arr20);//
let ConcatArr20=arr20.concat([1,2,3]);//

// copy rang part of array
arr20.slice(0,2);// return copy of array form position 0 to position 2 but not include element with index 2
arr20.slice(1) // return copy of array form position 1 to the end of array

// retrieving index 
arr20.indexOf(45)// returen first matching element or -1 if not exist 
arr20.indexOf(45,1)// returen first matching element or -1 if not exist  but from index 1
arr20.lastIndexOf(45) //  returen last  matching element or -1 if not exist 
let p=[{name:'ah',age:33},{name:'max',age:33}];
p.indexOf("name:'ah',age:33") // return -1  object stored  by referance 
p.findIndex(el=>el.name==='ahmad');// return index 

// find 
p.find(el=>el.name==='ahmad');// return element 
p.findIndex(el=>el.name==='ahmad');// return index 
arr20.includes(44)// return true or false 



