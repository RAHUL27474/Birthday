//Step -9
/**
 * Class representing an API response.
 */
class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode; // The status code of the response.
        this.data = data; // The data included in the response.
        this.message = message; // The message describing the response.
        this.success = statusCode < 400; // A boolean indicating if the request was successful.
    }
}

export { ApiResponse}