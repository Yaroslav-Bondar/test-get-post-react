export const RFC2822_EMAIL_VALIDATION = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const PHONE_VALIDATION = /^[\+]{0,1}380([0-9]{9})$/;

const HELPER_MESSAGES = {
    name: {
        helper: 'Should be 2-60 characters',
        label: 'User name',
    },
    email: {
        helper: 'Must be a valid email according to RFC2822',
        label: 'Email',
    },
    phone: {
        helper: 'Should start with code of Ukraine +380XXXXXXXXX',
        label: 'Phone number',
    }
}
// a set of messages to correct user input
export const VALID_MESSAGES = {
    errors : {
        minLengthError: 'Too few characters entered',
        maxLengthError: 'Too many characters', 
        isEmptyError: 'Field can not be empty',
        patternError: 'Input doesn`t match validation pattern',
        imageDimensionsError: 'Must be at least 70x70px',
        fileTypeError: 'Should be jpg/jpeg image',
        fileSizeError: 'Size must not exceed 5MB',
    },
    ...HELPER_MESSAGES,
}

