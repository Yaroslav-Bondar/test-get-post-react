/**
 * if there are no values with true in the passed object
 * returns true otherwise false
 * @param {object} obj - objec of values
 * @returns {bool} - true or false
 */
export const checkInputValid = obj => {
    const truth = Object.values(obj);
    if(truth.includes(true)) return false;
        return true;
}

/**
 * if the array does not contain any  false returns true otherwise false
 * @param {array} arr - array of values
 * @returns {bool} - true or false
 */
export const checkValidInputGroup = arr => {
    if(arr.includes(false)) return false;
        return true;
}  