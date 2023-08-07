### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

JSON Web Token. An open standard for sharing tokens across different devices. 

- What is the signature portion of the JWT?  What does it do?

The version of a header and payload 

- If a JWT is intercepted, can the attacker see what's inside the payload?

Yes

- How can you implement authentication with a JWT?  Describe how it works at a high level.

The server authenticates and returns token in JSON and the token is encoded and signed with open standard. The front end javascript receives tokens and stores in var or localStorage. For every future request, the browser sends token in request. The server gets token from request and validates token. 

- Compare and contrast unit, integration and end-to-end tests.

Unit tests test individual units of a code. Integration tests test the interactions between different parts of the code or app. End-to-end tests test by giving you the users point of view. 

- What is a mock? What are some things you would mock?

A mock is a method used to simulate behavior of the app. It is often used to isolate code you want to test so that you can control it and test it as you please. You can mock libraries and APIs and code that you want to test to put to the side. AJAX requests, reading and writing to files and impure functions can also be mocked. 

- What is continuous integration?

Merging in small code changes frequently. 

- What is an environment variable and what are they used for?

A dynamic value that is set outside of an apps code and accessible while the app is being used. They are used to customize how the app works without touching the code inside the app. 

- What is TDD? What are some benefits and drawbacks?

Test Driven Development. When you only write code that you try to pass and you keep adding code and repeating that process. Benefits are that the code remains clean throughout the development, you get immediate feedback and it saves debug time later. Drawbacks are it takes a long time, theres no guarantee that code is ever bug free, and certain types of code do not benefit from it. 

- What is the value of using JSONSchema for validation?

User data can fail fast before bad data gets to your db, you reduce amound of code for processing and validating data, and you get a validation system that is easy to setup and maintain. 

- What are some ways to decide which code to test?

Certain code knowing it has priority, input and output boundaries, error handling, critical components. 

- What does `RETURNING` do in SQL? When would you use it?

It is used in conjunction with the INSERT UPDATE and DELETE statements to retrieve data from rows that need to be executed. It is used when you need data from modified rows without having to execute a separate query. 

- What are some differences between Web Sockets and HTTP?

HTTP follows a request-response model. Each statement is independent. In WebSockets, full-duplex communication is enabled and data can be sent by both the client and server. The connection is open, unlike HTTP. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I prefer using express because there are a lot more tools and it is easier to use with advancing technology. s