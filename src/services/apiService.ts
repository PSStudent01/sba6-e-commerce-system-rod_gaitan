
//API utility module that...
//- fetches product data from "Dummy JSON Products API"
//- uses async/await and Promises
//- handles errors gracefully with try/catch
//- exports the functions so Product class / index.ts can call them
// Created in a separate module, bc 
//- API logic should not be inside the Product class
//- and it can be reused for multiple calls later


export interface ProductData {  // to establish type annotation for each property in the 'ProductData' interface
                        // "Defines the structure and data types for a ProductData object"
                        // "Establishes type definitions for each property in the ProductData interface"
                        // "Specifies the expected properties and data types for product data"
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
}

async function fetchProducts(): Promise<ProductData[]> {  //function signature says that this function will eventually return an array (ProductData) of product objects.
    try {    // wraps the API request to handle errors for it. Wraps the API request in try to catch and manage errors
            const response = await fetch("https://dummyjson.com/products") //making an API request to fetch the products from 'dummyjson.com'. Awaits until returning a Promise.

            if (!response.ok) { // prevents bad responses from slipping through. Without this, the 'catch' block would never report fetch error types (ex 404, 500, etc.), only other error types.
                                // "Throws an error for unsuccessful HTTP responses so they can be caught in the 'catch' block.""
                throw new Error(`Request failed with status ${response.status}`) 
            }

            const data = await response.json() //converts response from API to JSON format, so that JS can recognize it an dimplement it as its own object. Now 'data' is a JavaScript object.
                                                //"Turns the API response from JSON into a usable JavaScript object"
                                                //"Parses the API response as JSON so it can be used as a JavaScript object"
                                                //"// Converts the API response into a JavaScript object by parsing JSON"

            return data.products // returns the 'products' array ('products' come from the API) along with its equivalent JS object 'data'

    } catch(error) {
        console.error("Error fetching products:", error);
        throw error;
    }









}  













//Implementing apiService.ts:
//1) added 'export' to the interface 'ProductData'