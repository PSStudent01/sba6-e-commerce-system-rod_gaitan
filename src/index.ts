
// Creating Product instances from API data.
import {Product} from "./models/Product";
import {calculateDiscount} from "./utils/discountCalculator";
import {calculateTax} from "./utils/taxCalculator";
import {fetchProducts} from "./services/apiService";
import { CustomError, handleError} from "./utils/errorHandler";


async function main() {  //1) step one to asynchronous functions to fetch product data and display it. Create async function main() wrapping  try & catch
    try {
        const productsData = await fetchProducts() //fetching product objects in raw format form API that will need to be converted from JSON format
        console.log("Raw API data:", productsData)

         //2) step 2 to asynchronous functions to fetch product data. Display Product instances after converting the raw data to Product instances:
        const products = productsData.map(function(prod) { //'.map' converts the API JSON data into a processed array of objects.
        return new Product(
            prod.id,
            prod.title,
            prod.description,
            prod.price,
            prod.discountPercentage,
            prod.rating,
            prod.stock,
            prod.category
  );
});

    //3) step 3 to asynchronous functions to fetch product data. Loop through the unraw array of 'products' and call on the 'displayDetails()' utility/helper to display the details of each product instance 
    //console.log(products[0]);
    products.forEach(product => {  //loop through the converted 'products' array above and for end every 'product' in 'products'...
        product.displayDetails()  //run 'displayDetails()' for that product.
        console.log("Price after discount: $", product.getPriceWithDiscount());
    })


  } catch (error) {
    handleError(error as Error); 
  }
}


main(); 





