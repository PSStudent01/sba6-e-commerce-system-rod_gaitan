
// src/models/Product.ts

export class Product {
    // create your base class based on some of the properties that were derived from the Dummy JSON API response
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    category: string;

    // this initializes instances of the class in question, itc the class 'Product'
    constructor(
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        category: string
    ) {  // ex the following Property Assignment define the id for the product instance being validated at that moment!. The 'id property' ('this.id') of this Product instance is being set to 
        // the 'id value' that will be passed into the constructor, by the code that creates the object. The code with the 'new' keyword Along with the arguments. 
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.category = category;
    }

    //  method displays product details in a readable format
    displayDetails(): void {
        console.log("=================================");
        console.log(`Product: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Category: ${this.category}`);
        console.log(`Price: $${this.price}`);
        console.log(`Discount: ${this.discountPercentage}%`);
        console.log(`Rating: ${this.rating}`);
        console.log(`Stock Available: ${this.stock}`);
        console.log(`Price After Discount: $${this.getPriceWithDiscount().toFixed(2)}`);
        console.log("=================================");
    }

    // this function calculates and returns the price after discount
    getPriceWithDiscount(): number {
        const discountAmount = this.price * (this.discountPercentage / 100);
        return this.price - discountAmount;
    }
}
