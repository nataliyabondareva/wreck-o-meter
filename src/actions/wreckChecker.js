// import { API_KEY } from "../app-env";
const request = require("superagent");

module.exports = class wreckChecker {
  async checkWreck(location, API_KEY) {
    let key = API_KEY;
    let timesHashtagged = await this.getTimesHashtagged(location, key);
    let locationInformation = await this.getLocationInformation(location);
    // let wreck = await this.getWreck(timesHashtagged, locationInformation);
    const wreck = timesHashtagged / locationInformation;
    console.log("params", wreck, timesHashtagged, locationInformation);
    return { locationInformation };
  }
  // return wreck(timesHashtagged, locationInformation)
  // }

  // gets popularity by dividing the times hashtagged by area and returns it along with population density
  // async getWreck(timesHashtagged, locationInformation) {
  //   console.log('locinfo', timesHashtagged, locationInformation)
  //   let wreck = timesHashtagged / locationInformation.area;
  //   return {wreck}
  // }

  async getLocationInformation(location) {
    request
      .get(
        `https://restcountries.eu/rest/v2/capital/${location}?fields=population;area`
      )
      .then(response => {
        const population = response.body[0].population;
        const area = response.body[0].area;
        const populationDensity = population / area;
        return { populationDensity, area };
      })
      .then(response => {
        return response;
      });
  }

  // gets number of times location was used as hashtag
  async getTimesHashtagged(location, key) {
    // picks the object from json data that is the pure hashtag
    const correctItem = (items, location) => {
      return items.find(item => {
        return item.link.includes(
          `https://www.instagram.com/explore/tags/${location}`
        );
      });
    };

    // formats a string to all lower case and removes white spaces
    const formatLocation = location => {
      return location.replace(/\s+/g, "").toLowerCase();
    };

    // formats a string to get the number in it
    const stringToNumber = string => {
      const firstLetter = string.match(/[a-zA-Z]/).pop();
      const firstNumber = parseFloat(string, 10);
      switch (firstLetter) {
        case "k":
          return firstNumber * 1000;
        case "m":
          return firstNumber * 1000000;
        case "b":
          return firstNumber * 1000000000;
        default:
          return firstNumber;
      }
    };

    // gets number of times location was hashtagged
    let formattedLocation = formatLocation(location);
    request
      .get(
        `https://www.googleapis.com/customsearch/v1?q=${formattedLocation}&cx=007962097164152155274:_9jk37_iaew&key=${key}`
      )
      .then(result => {
        // picks out the object that contains the pure hashtag
        return correctItem(result.body.items, formattedLocation);
      })
      .then(result => {
        // takes string with the value, converts into number
        return stringToNumber(result.snippet);
      })
      .then(result => console.log('hi there', result))
      // .then((
      //   result // dispatches it into redux store
      // ) => dispatch(wreckChecked(result)))
      .catch(console.error);
  }
};
