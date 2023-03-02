import axios from "axios";

const keys = {
  method: 'GET',
  url: 'https://api-gate2.movieglu.com/',
  headers: {
    'x-api-key:': 'YAxMtBgPYy4vxS9tf5NHv22myN9wZv6l55TREWZ0',
    'authorization': 'Basic Q09MTF8xNV9YWDpPYTJ0c21XeWZsdVE=',
    'api-version': 'v200',
    'client': 'COLL_15',
    'device-datetime': '2023-02-22T12:07:57.296Z',
    'territory': 'XX',
    'geolocation': '-22.0;14.0'
  },
};
axios.request(keys).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

export default keys;
function Test(){
  const promise = axios.get('https://api-gate2.movieglu.com/filmsNowShowing/?n=10')
  const dataPromise = promise.then((response) => response.data)
  return dataPromise
}
// now we can use that data from the outside!
//axiosTest()
 //   .then(data => {response.json({ message: 'Request received!', data })
 //   })
 //   .catch(err => console.log(err))
//
 //   function axiosTest() {
 //     return axios.get('https://api-gate2.movieglu.com/filmsNowShowing/?n=10').then(response => response.data)
 // }