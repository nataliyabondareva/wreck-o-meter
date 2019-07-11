// import { API_KEY } from "../app-env";
const request = require("superagent");

module.exports = class wreckChecker {
  async checkWreck(location, API_KEY) {
    let key = API_KEY;
    let timesHashtagged = await this.getTimesHashtagged(location, key);
    let locationInformation = await this.getLocationInformation(location);
    const wreck = timesHashtagged / locationInformation.area;
    const populationDensity = locationInformation.populationDensity;
    console.log("wreck is", wreck, );
    return { wreck, populationDensity };
  }
  
  async getLocationInformation(location) {
    const locationInformation = 
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
      return locationInformation;
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
    const timesHashtagged =
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
      .catch(console.error);
      return timesHashtagged
  }
};
