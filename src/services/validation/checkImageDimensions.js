/**
 * checking the image dimensions according to the passed parameters
 * @param {object} options - check options
 * @param {object} options - an object containing information about the file
 * @returns {bool} - error status
 */
export async function checkImageDimensions(options, value) {
    // potential for error when validations.fileType is not defined
    // check file format
    if(!options.fileType.includes(value.type)) {
        console.log('file type does not match validation settings');
        return null;
    } 
    const promiseError = new Promise((resolve, reject) => {
        const reader = new FileReader();
        //read the contents of image file.
        reader.readAsDataURL(value);
        reader.onload = e => {
            //initiate the JavaScript image object.
            const img = new Image();
            //set the base64 string return from FileReader as source.
            img.src = e.target.result;
            //validate the file height and width
            img.onload = function() {
                const currentHeight = this.height;
                const currentWidth = this.width;
                const requiredHeight = options.imageDimensions.height;
                const requiredWidth = options.imageDimensions.width;
                const checkParameter = options.imageDimensions.check;
                // less than check
                if(checkParameter === 'min') {
                    if(currentHeight < requiredHeight || currentWidth < requiredWidth) {
                        console.log('the width or height of the image is smaller than required');
                        resolve(true);
                    } else {
                        console.log('the width and height of the image is correct');
                        resolve(false);
                    } 
                }
                // greater than check
                if(checkParameter === 'max') {
                    if(currentHeight > requiredHeight || currentWidth > requiredWidth) {
                        console.log('the width or height of the image is larger than required');
                        resolve(true);                                        
                    } else {
                        console.log('the width and height of the image is correct');
                        resolve(false);
                    } 
                }
            }
        }
    });
    return promiseError;
}