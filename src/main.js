import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor-service';



$(document).ready(function () {
    $('#searchName').click(function () {
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let city = "wa-seattle"; // hard coded for now
        let doctorService = new DoctorService();
        let promise = doctorService.getDoctorByName(firstName, lastName, city);

        // list of returns
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


    })
});
