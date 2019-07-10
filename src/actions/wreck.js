const wreckChecker = require("./wreckChecker");

export const CHECK_WRECK = "CHECK_WRECK";
export const WRECK_CHECKED = " WRECK_CHECKED";

export const checkWreck = (location, key) => dispatch => 
{
  let checkTheWreck = new wreckChecker()
  const wreck = checkTheWreck.checkWreck(location, key)
  //let wreck = 
  // wreckChecker.checkWreck(location, key, request)
  // .then(( // dispatches it into redux store
  //   wreck) => 
  //   dispatch(wreckChecked(wreck)))
  //       .catch(console.error);
}

// const wreckChecker = new wreckChecker();
// const wreck = await wreckChecker.checkWreck(location) 
// async checkWreck = location => dispatch => {
    
//   .then(( // dispatches it into redux store
//     wreck) => dispatch(wreckChecked(wreck)))
//         .catch(console.error);
// }

// gets number of times location was used as hashtag
// export const checkWreck = location => dispatch => {
//   const formattedLocation = formatLocation(location);
//   request
//     .get(
//       `https://www.googleapis.com/customsearch/v1?q=${formattedLocation}&cx=007962097164152155274:_9jk37_iaew&key=${API_KEY}`
//     )
//     .then(result => {
//       // picks out the object that contains the pure hashtag
//       return correctItem(result.body.items, formattedLocation);
//     })
//     .then(result => {
//       // takes string with the value, converts into number
//       return stringToNumber(result.snippet);
//     })
//     .then((
//       result // dispatches it into redux store
//     ) => dispatch(wreckChecked(result)))
//     .catch(console.error);
// };

// router.get("/tickets/:id", function(req, res, next) {
//     .then(async ticket => {
//       const riskCalculator = new calculateRisk();
//       const risk = await riskCalculator.main(id, 3);
//       return { risk, ticket };
//     })


// picks the object from json data that is the pure hashtag
// const correctItem = (items, location) => {
//   return items.find(item => {
//     return item.link.includes(
//       `https://www.instagram.com/explore/tags/${location}`
//     );
//   });
// };

// // formats a string to all lower case and removes white spaces
// const formatLocation = location => {
//   return location.replace(/\s+/g, "").toLowerCase();
// };

// // formats a string to get the number in it
// const stringToNumber = string => {
//   const firstLetter = string.match(/[a-zA-Z]/).pop();
//   const firstNumber = parseFloat(string, 10);
//   switch (firstLetter) {
//     case "k":
//       return firstNumber * 1000;
//     case "m":
//       return firstNumber * 1000000;
//     case "b":
//       return firstNumber * 1000000000;
//     default:
//       return firstNumber;
//   }
// };

// const populationDensity = location => {
//   request
//     .get(
//       `https://restcountries.eu/rest/v2/capital/${location}?fields=population;area`
//     )
//     .then(response => {
//       const population = response.body[0].population;
//       const area = response.body[0].area;
//       return population / area;
//     });
// };

const wreckChecked = wreck => ({
  type: WRECK_CHECKED,
  payload: wreck
});
