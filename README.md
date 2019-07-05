# Doctor Search
### By Rochelle Roberts

-----

## Description
* DoctorSearch is a Web App for bringing people together with the right doctor.


## Technologies Used
* JavaScript
* JQuery
* HTML5      
* CSS
* Bootsrap      
* Karma
* Jasmine
* Webpack       
* BetterDoctorAPI

## Installation
* Clone project repo
* From the project's root directory, install dependencies.

```sh
$ git clone https://github.com/rochellev/doctorSearch.git
$ cd doctorSearch
$ npm install
$ npm run start
```

## Specs

| Behaviors       | Input          | Output      |
| ---------------- |:------------:| :--------------:|
| A user enters a medical issue, and receives a list of doctors in the Seattle area that fit the search query. | coughing and sneezing | General Practitioner |
| A user enters a name to receive, and receives a list of doctors in the Seattle area that fit the search query. | Dr. Smith | List of Doctors with that name |
| A user will see the following information about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients | Seach "Ajay Gopal" | first name = Ajay, last name = Gopal, address = 825 Eastlake Ave E, 98109 , phone number= 2062886739, website= none, accepting new patients = yes |
| If an error occurs when calling the API, the error is displayed | missing parameter | Error 400 : Invalid or missing parameter |
| If the query response doesn't include any doctors, the application returns a notification that states that no doctors meet the criteria | Search for doctor that does not exist | Message displayed: "Sorry, no results. Please try expanding your search" |

---
## Class Descriptions
* Outline of the project structure. I plan to seperate user-interface logic and business logic

### DoctorService Class : Make API calls, return promises
1. getDoctorByName(firstName, lastName, city)
2. getDoctorByPractice(practice)
    * practice = breif description, will have drop down for search

### Main
1. Use DoctorService Class to make API calls
2. displayDoctorList(doctorList)
    * function to display doctor information for user
    * jQuery

### Index
1. Drop down for selecting City to find doctor. Seattle and Austin to start
2. Input to search for a doctor by name
3. Quiz for symptoms. The results will determine what type of doctor the user needs.
4. Display error messages