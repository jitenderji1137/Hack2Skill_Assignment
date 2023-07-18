describe('validate if there are broken images or not', () => {
    it('Broken Images', () => {

        // Visit the broken_images page
        cy.visit('https://the-internet.herokuapp.com/broken_images');

        // Get all img tags on the page
        const img_element = cy.get("img");

        // Declared a variable to store the domain
        let domain ;

        // Get the domain from the current URL
        cy.url().then((url) => {
            domain = new URL(url).hostname;
        });

        // Iterate over each image element
        img_element.each((img)=>{

            // Get the src attribute of the image
            const img_src = img.attr("src");

            // Get the complete image URL using the domain and src attribute
            const img_url = domain+"/"+img_src;

            // Send a request to check if the image is broken or not
            cy.request({
                url: img_url,
                failOnStatusCode: false // Help to Prevent Cypress from failing the test, when response status code is not 200
            }).then((response)=>{

                // Check the response status
                if(response.status === 200){

                    // Log success message if the image loaded successfully
                    cy.log("Image loaded successfully and image is not broken");
                }
                else{

                    // Log failure message if the image failed to load
                    cy.log("Image does not load successfully means image is broken");
                }
            })
        })
    })
})