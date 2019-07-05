import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor-service';



$(document).ready(function () {
    $('#searchName').click(function () {
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let city = "wa-seattle";
        let doctorService = new DoctorService();
        let promise = doctorService.getDoctorByName(firstName, lastName, city);

        promise.then(function (response) {
            let body = JSON.parse(response);
            for(let i = 0; i< 10; i++){
                $('#doctorResult').prepend(`<div>Name: ${body.data[0].practices[i].name}<br> Address: ${body.data[0].practices[i].visit_address.street}, ${body.data[0].practices[i].visit_address.street2} ${body.data[0].practices[i].visit_address.zip}<br> Phone: ${body.data[0].practices[i].phones[0].number}</div><br>`);
            }
           

            // $('#doctorResult').text(`Your Doctor in ${city} name is ${body.data[0].practices[0].name} and address is ${body.data[0].practices[0].visit_address.street}`);
        }, function (error) {
            $('#showErrors').text(`There was an error processing your request: ${error.message}`);
        });


    })
});
