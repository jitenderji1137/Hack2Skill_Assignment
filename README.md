<div align="center"><img src="https://hack2skill.com/brandguidelines/assets/images/H2S_Gradient_Logo.svg" /></div>



##  1. Access Given_URL and perform a file upload task.


=> Upload an Image with a valid path
```
const FolderPath = Cypress.config().fixturesFolder;
// Find the file input element and select the image file
cy.get("#file-upload").selectFile(FolderPath + `\\image.jpg`);
// Click on the submit button
cy.get('#file-submit').click();
// Assert that the "File Uploaded!" success message is displayed
cy.get('h3').should('have.text', 'File Uploaded!');
```

Spec video recording:-

https://github.com/jitenderji1137/Hack2Skill_Assignment/assets/113350806/92598b26-c2c0-40cb-a1bb-ea1a7b70fd8f


=> Click on upload button without selecting any file
```
// Click on the submit button
cy.get('#file-submit').click();
// Assert the message which is displayed
cy.get('h1').should('have.text', 'Internal Server Error');
```
Spec video recording:-

https://github.com/jitenderji1137/Hack2Skill_Assignment/assets/113350806/61503f13-e2a9-4ff1-b898-6beb3b6abb0d




##  2. validate if there are broken images or not.


=> Broken Images
```
// Visit the broken_images page
cy.visit('https://the-internet.herokuapp.com/broken_images');
// Get all img tags on the page
const img_element = cy.get("img");
// Declared a variable to store the domain
let domain;
// Get the domain from the current URL
cy.url().then(url => {
  domain = new URL(url).hostname;
});
// Iterate over each image element
img_element.each(img => {
  // Get the src attribute of the image
  const img_src = img.attr("src");
  // Get the complete image URL using the domain and src attribute
  const img_url = domain + "/" + img_src;
  // Send a request to check if the image is broken or not
  cy.request({
    url: img_url,
    failOnStatusCode: false // Help to Prevent Cypress from failing the test, when response status code is not 200
  }).then(response => {
    // Check the response status
    if (response.status === 200) {
      // Log success message if the image loaded successfully
      cy.log("Image loaded successfully and image is not broken");
    } else {
      // Log failure message if the image failed to load
      cy.log("Image does not load successfully means image is broken");
    }
  });
});
```

Spec video recording:-


https://github.com/jitenderji1137/Hack2Skill_Assignment/assets/113350806/886fefe1-d6a8-45a9-8c5c-3d472bcd3922


<div><p align="center">By :- Jitender</p></div>
