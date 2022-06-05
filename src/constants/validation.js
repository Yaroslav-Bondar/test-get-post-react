export const RFC2822_EMAIL_VALIDATION = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const PHONE_VALIDATION = /^[\+]{0,1}380([0-9]{9})$/;

const HELPER_MESSAGES = {
    name: {
        helper: 'should be 2-60 characters',
        label: 'user name',
    },
    email: {
        helper: 'must be a valid email according to RFC2822',
        label: 'email',
    },
    phone: {
        helper: 'should start with code of Ukraine +380',
        label: 'phone number',
    }
}
// a set of messages to correct user input
export const VALID_MESSAGES = {
    errors : {
        minLengthError: 'too few characters entered',
        maxLengthError: 'too many characters', 
        isEmptyError: 'field can not be empty',
        patternError: 'input doesn`t match validation pattern',
        imageDimensionsError: 'must be at least 70x70px',
        fileTypeError: 'should be jpg/jpeg image',
        fileSizeError: 'size must not exceed 5MB',
    },
    ...HELPER_MESSAGES,
}

