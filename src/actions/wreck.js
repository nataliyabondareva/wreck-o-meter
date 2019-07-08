import * as request from "superagent";

export const CHECK_WRECK = "CHECK_WRECK";
export const WRECK_CHECKED = " WRECK_CHECKED"

// picks the object from json data that is the pure hashtag
const correctItem = (items, location) => {
  return items.find(item => { 
    return item.link === `https://www.instagram.com/explore/tags/${location}/`})
}

// formats a string to all lower case and removes white spaces
const formatLocation = location => {
  return location.replace(/\s+/g, '').toLowerCase()
}

// formats a string to get the number in it 
const stringToNumber = string => {
  return string.replace(/\D/g,'')
}

//checks whether 
export const checkWreck = location => dispatch => {
  const formattedLocation = formatLocation(location)
  request
    .get(`https://www.googleapis.com/customsearch/v1?q=${formattedLocation}&cx=007962097164152155274:_9jk37_iaew&key=AIzaSyCDF0iKJO05R6bRsbur_CfPnH5JijpkCLQ`)
    .then(result => {
      dispatch(wreckChecked(correctItem(result.body.items, formattedLocation)))
    })
    // .then(result => dispatch(wreckChecked(result)))
    .catch(console.error);
};

const wreckChecked = wreck => ({
  type: WRECK_CHECKED,
  payload: wreck
});
