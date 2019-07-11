const wreckChecker = require("./wreckChecker");

export const CHECK_WRECK = "CHECK_WRECK";
export const WRECK_CHECKED = " WRECK_CHECKED";

export const checkWreck = (location, key) => dispatch => {
  let checkTheWreck = new wreckChecker();
  checkTheWreck
    .checkWreck(location, key)
    .then(
      // dispatches result into redux store
      result => dispatch(wreckChecked(result))
    )
    .catch(console.error);
};

const wreckChecked = wreck => ({
  type: WRECK_CHECKED,
  payload: wreck
});
