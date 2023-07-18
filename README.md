<div align="center"><img src="https://hack2skill.com/brandguidelines/assets/images/H2S_Gradient_Logo.svg" /></div>



##  1. Access Given_URL and perform a file upload task.


Upload an Image with a valid path
```
const FolderPath = Cypress.config().fixturesFolder;
// Find the file input element and select the image file
cy.get("#file-upload").selectFile(FolderPath + `\\image.jpg`);
// Click on the submit button
cy.get('#file-submit').click();
// Assert that the "File Uploaded!" success message is displayed
cy.get('h3').should('have.text', 'File Uploaded!');
```
