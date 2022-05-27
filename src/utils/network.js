
/**
 * receiving data 
 * @param {String} url - url for request
 * @returns {Promise} - Promise with query result
 */
export const getApiResource = async (url, options) => {
    
    const response = await fetch(url, options);
    // if(!response.success) {
    //     console.log(response);
    //     return 
    // }
    console.log(response);
    return await response.json();

} 