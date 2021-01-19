import axios from "axios";
// const BASEURL = "https://randomuser.me/api/?inc=picture,name,id,email,phone";
const BASEURL = "https://randomuser.me/api/?results=10";

export default {
    search: function (query) {
        return axios.get(BASEURL + query);
    }
};

// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });


import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API


// OR will we need multiple API Calls? OR just one, using the same search, and then the filter uses a table?
// export default {
//   getRandomDog: function() {
//     return axios.get("https://dog.ceo/api/breeds/image/random");
//   },
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
// };