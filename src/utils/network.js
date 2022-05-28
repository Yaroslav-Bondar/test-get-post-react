
/**
 * receiving data 
 * @param {String} url - url for request
 * @returns {Promise} - Promise with query result
 */
//  , options
export const getApiResource = async (url) => {
    
    const response = await fetch(url);
    // if(!response.success) {
    //     console.log(response);
    //     return 
    // }
    console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;

} 