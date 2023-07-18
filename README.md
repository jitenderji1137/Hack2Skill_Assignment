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


