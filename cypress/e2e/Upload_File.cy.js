describe('Access Given_URL and perform a file upload task.', () => {
    const Base_URL = "https://the-internet.herokuapp.com/upload";

    // Visit the base URL before each test
    beforeEach(() => {
        cy.visit(Base_URL);
    });

    // Test case: Upload image with valid path
    it('Upload Image with valid path', () => {
        const FolderPath = Cypress.config().fixturesFolder;

        // Find the file input element and select the image file
        cy.get("#file-upload").selectFile(FolderPath+`\\image.jpg`);

        // Click on the submit button
        cy.get('#file-submit').click();

        // Assert that the "File Uploaded!" success message is displayed
        cy.get('h3').should('have.text', 'File Uploaded!')
    })

    // Test case: Click on upload button without selecting any file
    it('Click on upload button without selecting any file', () => {

        // Click on the submit button
        cy.get('#file-submit').click();

        // Assert the message which is displayed
        cy.get('h1').should('have.text', 'Internal Server Error')
    })
})