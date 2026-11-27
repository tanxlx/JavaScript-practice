let price =[100,200,300];
// const discount= price.map((p)=> {
//     return p - (p*10/100);

// });

const discount= price.map((p)=> {
    let discount = p - (p*15/100);
    let d1 = p -discount;
    let d3 = [discount, d1];
    return d3
});
console.log(discount);


// const discountedPrices = sellingPrices.map((p) =>{
//     return p - discount;
// });
// console.log(discount);
// console.log(discountedPrices);