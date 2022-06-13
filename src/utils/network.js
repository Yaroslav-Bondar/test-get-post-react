/**
 * receiving data 
 * @param {String} url - url for request
 * @returns {Promise} - Promise with query result
 */
export const getApiResource = async url => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if(!data.success) {
            throw Error(`proccess server errors: ${data.message}`)
        }
        return data;
    } catch(error) {
        return error;
    }

}

/**
 * sending a post request to the server
 * @param {object} form - input form
 * @param {string} urlPath - post request url
 * @param {string} urlToken - token url
 * @returns {Promise} - Promise with query result
 */
export const pushFormData = async (form, urlPath, urlToken) => {
    // get form data
    const formData = new FormData(form);
    try {
        // get token
        const token = await getApiResource(urlToken);
        if(!token.success) {
            throw Error(`proccess server errors: ${token.message}`)
        } else {
            // post request
            const response = await fetch(urlPath, 
                    { 
                        method: 'POST', 
                        body: formData, 
                        headers: {'Token': token.token},
                    }
                    );
            const data = await response.json();
            if(!data.success) {
                throw Error(`proccess server errors: ${data.message}`)
            } else {
                return data;
            }
        }
    } catch(error) {
        return error; 
    }
}
