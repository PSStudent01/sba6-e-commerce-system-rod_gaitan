

// 1) Create a custom error class
export class CustomError extends Error {
  statusCode: number;
  isCustomError: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);      // passes 'message' value to base class 'Error'. The built-in Error class expects a message string as an argument.
    this.name = "Internal Server Error"; // assigns string error message to the 'name' property of the 'CustomError' class object. IOWs, It hardcodes the 'name' property of the error as "Internal Server Error"
    this.statusCode = statusCode; // assigns status code (currently set at 500) to the 'statusCode' property of the 'CustomError' class object, only after param 'statusCode' passes it the argument
    this.isCustomError = true; // mark it explicitly!, rather than checking the prototype and thus relying on 'instanceof'.
  }
}

// 2) Create function to handle errors gracefully
export function handleError(error: unknown) {
if ((error as any).isCustomError) {
  console.warn(`Handled CustomError with code ${(error as CustomError).statusCode}`);
} else {
  console.warn("An unexpected error occurred.");
}
}
