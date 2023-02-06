const axios = require('axios');

const HttpError = require('../models/http-error');

// const API_KEY = 'AIzaSyAU5D7LMdUFWdTK_NGlUev2fIAgWAkdUwU';

// async function getCoordsForAddress(address) {
//   // return {
//   //   lat: 40.7484474,
//   //   lng: -73.9871516
//   // };
//   const response = await axios.get(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//       address
//     )}&key=${API_KEY}`
//   );

//   const data = response.data;

//   if (!data || data.status === 'ZERO_RESULTS') {
//     const error = new HttpError(
//       'Could not find location for the specified address.',
//       422
//     );
//     throw error;
//   }

//   const coordinates = data.results[0].geometry.location;

//   return coordinates;
// }

async function getCoordsForAddress(address) {
  return {
    lat: 37.8651,
    lng: 119.5383
  };
}


module.exports = getCoordsForAddress;
