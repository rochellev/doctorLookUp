import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor-service';


$(document).ready(function () {
    // searching by doctor name 
    $('#searchName').click(function () {
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let city = "wa-seattle"; // hard coded for now
        let doctorService = new DoctorService();
        let promise = doctorService.getDoctorByName(firstName, lastName, city);

        promise.then(function (response) {
            let body = JSON.parse(response);
            let current = 0;
            let takingNew = "";
            for (let d = 0; d < body.data.length; d++) {
                current = d;
                for (let i = 0; i < body.data[current].practices.length; i++) {
                    if (body.data[current].practices[i].accepts_new_patients) {
                        takingNew = "Yes";
                    } else {
                        takingNew = "No";
                    }

                    $('#doctorResult').prepend(`<div>Name: ${body.data[current].practices[i].name}<br> Address: ${body.data[current].practices[i].visit_address.street},${body.data[current].practices[i].visit_address.city},${body.data[current].practices[i].visit_address.state}  ${body.data[current].practices[i].visit_address.zip}<br> Phone: ${body.data[current].practices[i].phones[0].number}<br> Accepting New Patients: ${takingNew}</div><br>`);
                }

            }
        }, function (error) {
            $('#showErrors').text(`There was an error processing your request: ${error.message}`);
        });
    });
    // searching by symptom
    $('#symptomSearch').click(function () {
        let doctorType = "";
        let symptom = $("#symptoms").val();
        if(symptom == "Rash"){
            doctorType = "Dermatologist";
        }else{
            doctorType = symptom;
        }
        let city = "wa-seattle"; // hard coded for now
        let doctorService = new DoctorService();
        let promise = doctorService.getDoctorByPractice(doctorType, city);

        promise.then(function (response) {
            let body = JSON.parse(response);
            if(body.data.length == 0){
                $('#doctorResult').text(`Sorry, no results foryour search. Please try again!`);
            }
            let current = 0;
            let takingNew = "";
            let website= "";
            for (let d = 0; d < body.data.length; d++) {
                current = d;
                for (let i = 0; i < body.data[current].practices.length; i++) {
                    if (body.data[current].practices[i].accepts_new_patients) {
                        takingNew = "Yes";
                    } else {
                        takingNew = "No";
                    }
                    if(body.data[current].practices[i].website){
                        website = "body.data[current].practices[i].website";
                    }else{
                        website = "Website not available";
                    }

                    $('#doctorResult').prepend(`<div>Name: ${body.data[current].practices[i].name}<br> Address: ${body.data[current].practices[i].visit_address.street},${body.data[current].practices[i].visit_address.city},${body.data[current].practices[i].visit_address.state}  ${body.data[current].practices[i].visit_address.zip}<br> Phone: ${body.data[current].practices[i].phones[0].number}<br> Accepting New Patients: ${takingNew}<br> Website: ${website}</div><br>`);
                }

            }
        }, function (error) {
            $('#showErrors').text(`There was an error processing your request: ${error.message}`);
        });
    })

     // searching by Doctor Practice Type
     $('#searchType').click(function () {
        let doctorType = $('#doctorTypes').val();
        let city = "wa-seattle"; // hard coded for now
        let doctorService = new DoctorService();
        let promise = doctorService.getDoctorByPractice(doctorType, city);

        promise.then(function (response) {
            let body = JSON.parse(response);
            if(body.data.length == 0){
                $('#doctorResult').text(`Sorry, no results foryour search. Please try again!`);
            }
            let current = 0;
            let takingNew = "";
            let website= "";
            for (let d = 0; d < body.data.length; d++) {
                current = d;
                for (let i = 0; i < body.data[current].practices.length; i++) {
                    if (body.data[current].practices[i].accepts_new_patients) {
                        takingNew = "Yes";
                    } else {
                        takingNew = "No";
                    }
                    if(body.data[current].practices[i].website){
                        website = "body.data[current].practices[i].website";
                    }else{
                        website = "Website not available";
                    }

                    $('#doctorResult').prepend(`<div>Name: ${body.data[current].practices[i].name}<br> Address: ${body.data[current].practices[i].visit_address.street},${body.data[current].practices[i].visit_address.city},${body.data[current].practices[i].visit_address.state}  ${body.data[current].practices[i].visit_address.zip}<br> Phone: ${body.data[current].practices[i].phones[0].number}<br> Accepting New Patients: ${takingNew}<br> Website: ${website}</div><br>`);
                }

            }
        }, function (error) {
            $('#showErrors').text(`There was an error processing your request: ${error.message}`);
        });


     


    })

});
