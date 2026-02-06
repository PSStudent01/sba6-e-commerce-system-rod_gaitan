

/*
export function calculateTax(price: number, taxPercentage: number): number {
        return price * (taxPercentage / 100)
}
console.log(calculateTax())
*/

export function calculateTax(price: number, category: string): number {
    let taxPercentage = 0.0475        // this says apply a 0.0475 tax raat to all product categories....
    if (category === "groceries") taxPercentage = 0.03;  /// unless the product category is 'groceries', in which case you'd apply only a 3% tax
    return price * taxPercentage;
}
