
/**
 * receiving data 
 * @param {String} url - url for request
 * @returns {Promise} - Promise with query result
 */
//  , options
export const getApiResource = async url => {
    
    const response = await fetch(url);
    
    console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;

}
export const pushFormData = async (form, urlPath, urlToken) => {
    // get form data
    const formData = new FormData(form);
    try {
        // get token
        const token = await getApiResource(urlToken);
        console.log('token', token);
        if(!token.success) {
            // console.log('proccess server errors: ', token.message);
            // return false;
            throw Error(`proccess server errors: , ${token.message}`)
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
            console.log('data', data);
            if(!data.success) {
                throw Error(`proccess server errors: , ${data.message}`)
                // console.log('proccess server errors: ', data.message);
                // return false;
            } else {
                return data;
            }
        }
    } catch(error) {
        return error; 
        // console.log('proccess network errors: ', error);
        // return false;
    }
}

// js var formData = new FormData(); 
// file from input type='file' 
// var fileField = document.querySelector('input[type="file"]'); 
// formData.append('position_id', 2); 
// formData.append('name', 'Jhon'); 
// formData.append('email', 'Jhon@gmail.com'); 
// formData.append('phone', '+380955388485');
// formData.append('photo', fileField.files[0]);

// fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', 
// { method: 'POST', body: formData, headers: { 'Token': token, 
// get token with GET api/v1/token method }, })
// .then(function(response) { return response.json(); }) 
// .then(function(data) { console.log(data); 
// if(data.success) { // process success response }
// else { // proccess server errors } }) 
// .catch(function(error) { // proccess network errors });
//  sdw@wesd.wewewe
// +380344444444