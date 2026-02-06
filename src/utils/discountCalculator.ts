

// creating utility function called calculateDiscount()
/*
    function calculateDiscount(price: number): number {
    //return 100 * .10
    return price * .10
} 

console.log(calculateDiscount(100)); //initializes the price at call time
*/

/*
    function calculateDiscount(price: number= 100): number {  //initializes the price at type annotation
    //return 100 * .10
    return price * .10
} 

console.log(calculateDiscount()); 
*/

/* 
// we want a dynamic 'price' and 'percentage discount'
    function calculateDiscount(price: number, discountPercentage: number): number {   // 1) set your 'function signature'
    //return 100 * .10
    //return price * discountPercentage // this line assumes the user can convert numbers into percentages
    return price * (discountPercentage / 100) //this line calculates the percentage for teh user 
} 

console.log(calculateDiscount()); 
*/

// I)
//and then we just need to export the utility so that 'Product' can use it:
    export function calculateDiscount(price: number, discountPercentage: number): number {   // 1) set your 'function signature'
    //return 100 * .10
    //return price * discountPercentage // this line assumes the user can convert numbers into percentages
    return price * (discountPercentage / 100) //this line calculates the percentage for teh user 
} 

console.log(calculateDiscount()); 


