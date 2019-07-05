import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor-service';


$(document).ready(function() {
  $('#searchName').click(function(){
      let firstName = $('#firstName').val();
      let lastName = $('#lastName').val();
      let city = "wa-seattle";
      let doctorService = new DoctorService();
      let promise = doctorService.getDoctorByName(firstName, lastName, city);

      promise.then(function(response) {
        let body = JSON.parse(response);
        $('#doctorResult').text(`Your Doctor in ${city} name is ${body.data[0].practices[0].name} and address is ${body.data[0].practices[0].visit_address.street}`);
      }, function(error) {
        $('#showErrors').text(`There was an error processing your request: ${error.message}`);
      });

      
  })
});
