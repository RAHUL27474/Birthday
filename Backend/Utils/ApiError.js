//Step -8
/**
 * Class representing an API error.
 * Extends the built-in Error class.
 */
class ApiError extends Error {

    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
        super(message); // Call the Error constructor with the provided message.
        this.statusCode = statusCode; // The status code of the error response.
        this.data = null; // Additional data included in the error response.
        this.message = message; // The message describing the error.
        this.success = false; // A boolean indicating if the request was successful.
        this.errors = errors; // Additional error details.
        
        // Set the stack trace of the error if provided, otherwise capture the stack trace.
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Export the ApiError class for use in other modules.
export { ApiError };
