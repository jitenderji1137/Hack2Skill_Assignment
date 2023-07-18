<!doctype html>
<html lang="en"><head><meta charSet="utf-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>Mochawesome Report</title><link rel="stylesheet" href="reports\html\assets\app.css"/></head><body data-raw="{&quot;stats&quot;:{&quot;suites&quot;:2,&quot;tests&quot;:3,&quot;passes&quot;:3,&quot;pending&quot;:0,&quot;failures&quot;:0,&quot;testsRegistered&quot;:3,&quot;passPercent&quot;:100,&quot;pendingPercent&quot;:0,&quot;other&quot;:0,&quot;hasOther&quot;:false,&quot;skipped&quot;:0,&quot;hasSkipped&quot;:false,&quot;start&quot;:&quot;2023-07-18T18:06:47.190Z&quot;,&quot;end&quot;:&quot;2023-07-18T18:07:29.399Z&quot;,&quot;duration&quot;:42209},&quot;results&quot;:[{&quot;uuid&quot;:&quot;15d14294-9ee2-4157-9ece-c0d1b965ecee&quot;,&quot;title&quot;:&quot;&quot;,&quot;fullFile&quot;:&quot;cypress\\e2e\\Upload_File.cy.js&quot;,&quot;file&quot;:&quot;cypress\\e2e\\Upload_File.cy.js&quot;,&quot;beforeHooks&quot;:[],&quot;afterHooks&quot;:[],&quot;tests&quot;:[],&quot;suites&quot;:[{&quot;uuid&quot;:&quot;2e4ad561-6ff6-487d-af46-925d55a7616e&quot;,&quot;title&quot;:&quot;Access Given_URL and perform a file upload task.&quot;,&quot;fullFile&quot;:&quot;cypress\\e2e\\Upload_File.cy.js&quot;,&quot;file&quot;:&quot;cypress\\e2e\\Upload_File.cy.js&quot;,&quot;beforeHooks&quot;:[],&quot;afterHooks&quot;:[],&quot;tests&quot;:[{&quot;title&quot;:&quot;Upload Image with valid path&quot;,&quot;fullTitle&quot;:&quot;Access Given_URL and perform a file upload task. Upload Image with valid path&quot;,&quot;timedOut&quot;:null,&quot;duration&quot;:10184,&quot;state&quot;:&quot;passed&quot;,&quot;speed&quot;:&quot;slow&quot;,&quot;pass&quot;:true,&quot;fail&quot;:false,&quot;pending&quot;:false,&quot;context&quot;:&quot;[\n    {\n        \&quot;title\&quot;: \&quot;Spec video recording\&quot;,\n        \&quot;value\&quot;: \&quot;videos/Upload_File.cy.js.mp4\&quot;\n    }\n]&quot;,&quot;code&quot;:&quot;const FolderPath = Cypress.config().fixturesFolder;\n// Find the file input element and select the image file\ncy.get(\&quot;#file-upload\&quot;).selectFile(FolderPath + `\\\\image.jpg`);\n// Click on the submit button\ncy.get(&#x27;#file-submit&#x27;).click();\n// Assert that the \&quot;File Uploaded!\&quot; success message is displayed\ncy.get(&#x27;h3&#x27;).should(&#x27;have.text&#x27;, &#x27;File Uploaded!&#x27;);&quot;,&quot;err&quot;:{},&quot;uuid&quot;:&quot;7653a991-5aba-4097-9b3d-713b9ae26ec4&quot;,&quot;parentUUID&quot;:&quot;2e4ad561-6ff6-487d-af46-925d55a7616e&quot;,&quot;isHook&quot;:false,&quot;skipped&quot;:false},{&quot;title&quot;:&quot;Click on upload button without selecting any file&quot;,&quot;fullTitle&quot;:&quot;Access Given_URL and perform a file upload task. Click on upload button without selecting any file&quot;,&quot;timedOut&quot;:null,&quot;duration&quot;:1938,&quot;state&quot;:&quot;passed&quot;,&quot;speed&quot;:&quot;fast&quot;,&quot;pass&quot;:true,&quot;fail&quot;:false,&quot;pending&quot;:false,&quot;context&quot;:&quot;[\n    {\n        \&quot;title\&quot;: \&quot;Spec video recording\&quot;,\n        \&quot;value\&quot;: \&quot;videos/Upload_File.cy.js.mp4\&quot;\n    }\n]&quot;,&quot;code&quot;:&quot;// Click on the submit button\ncy.get(&#x27;#file-submit&#x27;).click();\n// Assert the message which is displayed\ncy.get(&#x27;h1&#x27;).should(&#x27;have.text&#x27;, &#x27;Internal Server Error&#x27;);&quot;,&quot;err&quot;:{},&quot;uuid&quot;:&quot;fdee33b3-7bb5-4958-b945-d83a33d750b9&quot;,&quot;parentUUID&quot;:&quot;2e4ad561-6ff6-487d-af46-925d55a7616e&quot;,&quot;isHook&quot;:false,&quot;skipped&quot;:false}],&quot;suites&quot;:[],&quot;passes&quot;:[&quot;7653a991-5aba-4097-9b3d-713b9ae26ec4&quot;,&quot;fdee33b3-7bb5-4958-b945-d83a33d750b9&quot;],&quot;failures&quot;:[],&quot;pending&quot;:[],&quot;skipped&quot;:[],&quot;duration&quot;:12122,&quot;root&quot;:false,&quot;rootEmpty&quot;:false,&quot;_timeout&quot;:2000}],&quot;passes&quot;:[],&quot;failures&quot;:[],&quot;pending&quot;:[],&quot;skipped&quot;:[],&quot;duration&quot;:0,&quot;root&quot;:true,&quot;rootEmpty&quot;:true,&quot;_timeout&quot;:2000},{&quot;uuid&quot;:&quot;b0caca92-6fba-4cc2-b914-6cd89f814041&quot;,&quot;title&quot;:&quot;&quot;,&quot;fullFile&quot;:&quot;cypress\\e2e\\Broken_Image.cy.js&quot;,&quot;file&quot;:&quot;cypress\\e2e\\Broken_Image.cy.js&quot;,&quot;beforeHooks&quot;:[],&quot;afterHooks&quot;:[],&quot;tests&quot;:[],&quot;suites&quot;:[{&quot;uuid&quot;:&quot;1c3876f6-562d-4222-8f0e-975f0fc80659&quot;,&quot;title&quot;:&quot;validate if there are broken images or not&quot;,&quot;fullFile&quot;:&quot;cypress\\e2e\\Broken_Image.cy.js&quot;,&quot;file&quot;:&quot;cypress\\e2e\\Broken_Image.cy.js&quot;,&quot;beforeHooks&quot;:[],&quot;afterHooks&quot;:[],&quot;tests&quot;:[{&quot;title&quot;:&quot;Broken Images&quot;,&quot;fullTitle&quot;:&quot;validate if there are broken images or not Broken Images&quot;,&quot;timedOut&quot;:null,&quot;duration&quot;:5643,&quot;state&quot;:&quot;passed&quot;,&quot;speed&quot;:&quot;medium&quot;,&quot;pass&quot;:true,&quot;fail&quot;:false,&quot;pending&quot;:false,&quot;context&quot;:&quot;[\n    {\n        \&quot;title\&quot;: \&quot;Spec video recording\&quot;,\n        \&quot;value\&quot;: \&quot;videos/Broken_Image.cy.js.mp4\&quot;\n    }\n]&quot;,&quot;code&quot;:&quot;// Visit the broken_images page\ncy.visit(&#x27;https://the-internet.herokuapp.com/broken_images&#x27;);\n// Get all img tags on the page\nconst img_element = cy.get(\&quot;img\&quot;);\n// Declared a variable to store the domain\nlet domain;\n// Get the domain from the current URL\ncy.url().then(url =&gt; {\n  domain = new URL(url).hostname;\n});\n// Iterate over each image element\nimg_element.each(img =&gt; {\n  // Get the src attribute of the image\n  const img_src = img.attr(\&quot;src\&quot;);\n  // Get the complete image URL using the domain and src attribute\n  const img_url = domain + \&quot;/\&quot; + img_src;\n  // Send a request to check if the image is broken or not\n  cy.request({\n    url: img_url,\n    failOnStatusCode: false // Help to Prevent Cypress from failing the test, when response status code is not 200\n  }).then(response =&gt; {\n    // Check the response status\n    if (response.status === 200) {\n      // Log success message if the image loaded successfully\n      cy.log(\&quot;Image loaded successfully and image is not broken\&quot;);\n    } else {\n      // Log failure message if the image failed to load\n      cy.log(\&quot;Image does not load successfully means image is broken\&quot;);\n    }\n  });\n});&quot;,&quot;err&quot;:{},&quot;uuid&quot;:&quot;696d1ce7-823c-4ca3-9987-40c44f35d4ad&quot;,&quot;parentUUID&quot;:&quot;1c3876f6-562d-4222-8f0e-975f0fc80659&quot;,&quot;isHook&quot;:false,&quot;skipped&quot;:false}],&quot;suites&quot;:[],&quot;passes&quot;:[&quot;696d1ce7-823c-4ca3-9987-40c44f35d4ad&quot;],&quot;failures&quot;:[],&quot;pending&quot;:[],&quot;skipped&quot;:[],&quot;duration&quot;:5643,&quot;root&quot;:false,&quot;rootEmpty&quot;:false,&quot;_timeout&quot;:2000}],&quot;passes&quot;:[],&quot;failures&quot;:[],&quot;pending&quot;:[],&quot;skipped&quot;:[],&quot;duration&quot;:0,&quot;root&quot;:true,&quot;rootEmpty&quot;:true,&quot;_timeout&quot;:2000}],&quot;meta&quot;:{&quot;mocha&quot;:{&quot;version&quot;:&quot;7.0.1&quot;},&quot;mochawesome&quot;:{&quot;options&quot;:{&quot;quiet&quot;:false,&quot;reportFilename&quot;:&quot;mochawesome&quot;,&quot;saveHtml&quot;:false,&quot;saveJson&quot;:true,&quot;consoleReporter&quot;:&quot;spec&quot;,&quot;useInlineDiffs&quot;:false,&quot;code&quot;:true},&quot;version&quot;:&quot;7.1.3&quot;},&quot;marge&quot;:{&quot;options&quot;:{&quot;overwrite&quot;:false,&quot;html&quot;:false,&quot;json&quot;:true,&quot;reportDir&quot;:&quot;cypress\\reports\\html\\.jsons&quot;},&quot;version&quot;:&quot;6.2.0&quot;}}}" data-config="{&quot;reportFilename&quot;:&quot;index.html&quot;,&quot;reportDir&quot;:&quot;C:\\Users\\trade\\OneDrive\\Desktop\\Hack2Skill\\cypress\\reports\\html&quot;,&quot;reportTitle&quot;:&quot;Hack2Skill&quot;,&quot;reportPageTitle&quot;:&quot;Mochawesome Report&quot;,&quot;inline&quot;:false,&quot;inlineAssets&quot;:false,&quot;cdn&quot;:false,&quot;charts&quot;:false,&quot;enableCharts&quot;:false,&quot;code&quot;:true,&quot;enableCode&quot;:true,&quot;autoOpen&quot;:false,&quot;overwrite&quot;:true,&quot;timestamp&quot;:false,&quot;ts&quot;:false,&quot;showPassed&quot;:true,&quot;showFailed&quot;:true,&quot;showPending&quot;:true,&quot;showSkipped&quot;:false,&quot;showHooks&quot;:&quot;failed&quot;,&quot;saveJson&quot;:false,&quot;saveHtml&quot;:true,&quot;dev&quot;:false,&quot;assetsDir&quot;:&quot;C:\\Users\\trade\\OneDrive\\Desktop\\Hack2Skill\\cypress\\reports\\html\\assets&quot;,&quot;htmlFile&quot;:&quot;C:\\Users\\trade\\OneDrive\\Desktop\\Hack2Skill\\cypress\\reports\\html\\index.html&quot;}"><div id="report"></div><script src="reports\html\assets\app.js"></script></body></html>
