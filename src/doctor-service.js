export class DoctorService {
    getDoctorByName(firstName, lastName, city){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&location=${city}&sort=last-name-asc&skip=0&limit=10&user_key=f32a294c81862966871f24cf3fb8246a`;
            request.onload = function() {
              if (this.status === 200) {
                resolve(request.response);
              } else {
                reject(Error(request.statusText));
              }
            }
            request.open("GET", url, true);
            request.send();
          });

    }

    // getDoctorByPractice(practice){

    // }

}