# Canadian Provincial Flowers API
I built a working live API of the provincial flowers of Canada. This API gives the user access to each province's flower name, when it was established and what colour it is.

**Link to project:** https://provincial-flowers-api.cyclic.app/



## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Express, Node, Cyclic

With this project I was able to creat a live API that can be accessed anywhere. It gives the user the requested provincial information as an object.

## Lessons Learned:

API Developement: I gained experience in developing a backend API using Express that can define routes, handle requests, and send responses. 

Routing and Request Handling: By defining routes using Express, I learned how to handle different types of HTTP requests (e.g., GET) and extract parameters from the request URL (e.g., :province). This allows me to provide dynamic responses based on the requested province.

Data Handling: I utilized an object (provincialFlower) to store information about Canadian provincial flowers. By accessing and manipulating this data, I learned how to respond to specific requests with the appropriate data. I also handled cases where the requested province was not found.

JSON Responses: I used response.json() to send JSON responses from my API. This enables the client-side to receive structured data that can be easily parsed and utilized.

Serving Static Files: By using response.sendFile(), I was able to serve an HTML file (index.html) when the root URL (/) was accessed. 

Deployment: I was able to go start to finish in the deployment process.

Error Handling: I handled the case when a requested province was not found by providing a default response (provincialFlower['not found']). This demonstrates error handling and graceful handling of unexpected scenarios.

Overall, this project provided me with valuable experience in JSON responses, serving static files, deployment, environment variables, debugging, error handling, and project organization.
