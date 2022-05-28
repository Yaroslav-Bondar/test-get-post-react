// https://frontend-test-assignment-api.abz.agency/api/v1
// https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5'
const HTTPS = 'https://';
const API_ROOT = 'frontend-test-assignment-api.abz.agency/api/v1/';
const API_USERS = 'users';
export const API_PARAM_PAGE = '?page=';
export const API_PARAM_COUNT = 'count=';
// export const API_USERS_PARAM_PAGE = API_PARAM_PAGE + 1;
const API_USERS_PARAM_COUNT = API_PARAM_COUNT + 6;
// export const API_USERS_PATH = HTTPS + API_ROOT + API_USERS + API_PARAM_PAGE + '&' + API_USERS_PARAM_COUNT; 

export const API_USERS_PATH = HTTPS + API_ROOT + API_USERS; 
