const arr1=[1,2];

const arr2=new Array(1,2); //[1,2]
const arr3=new Array(5);// [ empty * 5]

const arr4= Array(1,2); //[1,2]
const arr5= Array(5);// [ empty * 5]

const arr6=Array.of(1,2) // [1,2]

const arr7=Array.from([1,2]) // pass array like object , nodeList or string for convet to array
const arr8=Array.from('hi') // ['h'.'i'] pass array like object , nodeList or string for convet to array
const list =document.querySelectorAll('li') // is not un array is a NodeList
const arr9=Array.from(list) // pass array like object , nodeList or string for convet to array
const  arr10=Array.from([1,2,3],x=>x*2)// [2,4,6]
const  arr11=Array.from([1,2,3],x=>x+x)// [2,4,6]
const arr12 = Array.from({ length: 5 });// [ undefined, undefined, undefined, undefined, undefined ]
const arr13 = Array.from({ length: 5 }, (e, i) => i);//[ 0, 1, 2, 3, 4 ]
const arr14 = Array.from({ length: 5 }, e=> 1);// [ 1, 1, 1, 1, 1 ]
const arr15= Array.from({length: 6}).map(() => Array.from({length: 4}).fill(null));
// 0: Array(4) [ null, null, null,null ]
// 1: Array(4) [ null, null, null,null ]
// ​2: Array(4) [ null, null, null,null ]
// ​3: Array(4) [ null, null, null,null ]
// ​4: Array(4) [ null, null, null,null ]
// ​5: Array(4) [ null, null, null,null ]

const arr16=['ss','dd'];// string
const arr17=[1,2]; // number
const arr18=['ss',1,{id:14523},true]; // mix string number object boolean 
const arr19=[[1,2],[6,9],[8,10]]; 



