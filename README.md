### Authors
[Emma-Maria Thalen](https://github.com/emtalen)  
[Philip Gaunitz](https://github.com/pgauntiz)  
[Carlos Delgado](https://github.com/Carltesio)  
[Janko Radakovic](https://github.com/MadFarmer101)
[Lautaro Parra](https://github.com/MadFarmer101) 

## Built with
**Front End:** React v.16.12.0 | CSS  
**Testing framework:** Cypress  
**Deployed at:** [Netlify](https://themarstimes.netlify.com/).

## The code   
This project is the visitor interface of the Newspaper Mars Times. Here the visitor can read free articles or sign up and buy a subsciption to aslo read premium articles. 
The articles have been created and published from our Admin interface and are stored in our API.  
The master repository for the visitors interface, mobile app and API can be found here:
* [API](https://github.com/CraftAcademy/newsroom_3_api.git)
* [Admin](https://github.com/CraftAcademy/newsroom_3_client_admin.git)
* [Mobile](https://github.com/CraftAcademy/newsroom_3_mobile_app.git)

## Getting started
### Dependencies  
* Yarn
* React
* Cypress
* Axios
* Semantic-ui-react / Semantic-ui-css
* React-images-uploading
* React-redux
* Redux
* Redux-thunk
* J-tockauth
* React-i18next
* React-stripe-elements

### Setup   
To test this application, fork the repo to your own GitHub account and clone it to your local workspace. </br>
*Note:*Be sure to set up backend api first (noted above), in order to fully interact with the application. 
Install all of the dependencies:    
```
$ yarn install
```  
Start cypress and run the feature tests:  
```
$ yarn run cy:open
```
Start the backend api (if already configured) in a separate terminal (only run this command for the Rails application):
```
$ rails s
```
Start the React application and run it on your local host:
```
$ yarn start
```

### Login credentials
- Regular user: email: user@mail.com password: password
- Subscriber: email: subscriber@mail.com password: password

## Updates/Improvements   
- That the user can choose between different subsciption plans
- That the user signs up and an account is being created while buying a subsciption
- Add more personal features, such as a profile page 
- Create functionality to comment and rate on articles

## License  
[MIT-license](https://en.wikipedia.org/wiki/MIT_License)

### Acknowledgement  
- Material provided by [Craft Academy](https://craftacademy.se)
- [Oliver Ochman](https://github.com/oliverochman/) for helping us understanding how to send credentials with the headers for request to the API.
- [Thomas Ochman](https://github.com/tochman/) for helping us implement with Stripe. 
- [Faraz Naeem](https://github.com/faraznaeem) for demonstrating a tough client and pushing us forward
