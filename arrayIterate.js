const prices=[10.99,11.99,12.99];
const tax=0.19;
const adjustedPrices=[];

// for of do not has index not return 
for (const price of prices) {
    adjustedPrices.push(price * (1+tax));
}

// forEach has index not return 
prices.forEach((el,index)=>{
    adjustedPrices.push(el * (1+tax));
})

// transforming data it is  return  data
const adjustedPrices2=prices.map((el)=>{
    return el * (1+tax)
})

// sort is sort by string : only the first character is compared  by default its not 3 < 10 but  3 > 1
let pricesSorted= prices.sort((a,b)=>{ // its take tow number  from smaller to bigger
    if(a>b)return 1;
    else if(a===b) return 0
    else return -1
})
let pricesSorted2= prices.sort((a,b)=>{ // its take tow number  from  bigger to smaller
    if(a>b)return -1;
    else if(a===b) return 0
    else return 1
})

// reverse 
prices.reverse();//  reverse array

