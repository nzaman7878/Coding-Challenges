/* 5. URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, 
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. 
Print a message indicating if the input matches the conditions or not. */


let url = "https://www.google.com";

let urlPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]{2,}$/;

if (urlPattern.test(url)) {
  console.log("The URL is valid");
} else {
  console.log("The URL is not valid");
}
