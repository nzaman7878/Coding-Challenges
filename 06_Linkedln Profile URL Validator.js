/* 6. Linkedln Profile URL Validator.
As a developer, you want to create a program that validates Linkedln profile URLs to ensure that they are 
formatted correctly and contain only valid characters. Valid Linkedln profile URLs should start with https:// 
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and 
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid Linkedln profile URLs, and should not match URLs 
that do not follow this format or contain invalid characters. The program should provide clear output messages 
indicating whether each input is a valid Linkedln profile URL or not. */

let profileUrls = [
  "https://www.linkedin.com/in/john-doe-123456",
  "https://www.linkedin.com/in/jane_doe",
  "https://www.linkedin.com/in/john_doe",
  "https://www.linkedin.com/in/john-doe-123456-abcdefg",
  "https://www.linkedin.com/in/john?doe",
  "https://www.linkedin.com/in/john-doe-12345678"
];

let profileUrlPattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

profileUrls.forEach(url => {
  if (profileUrlPattern.test(url)) {
    console.log(`${url} is a valid LinkedIn profile URL`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL`);
  }
});
