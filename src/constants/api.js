// https://frontend-test-assignment-api.abz.agency/api/v1
// https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5'
const HTTPS = 'https://';
const API_ROOT = 'frontend-test-assignment-api.abz.agency/api/v1/';
const API_USERS = 'users';
const API_POSITIONS = 'positions';
const API_TOKEN = 'token';
const API_PARAM_PAGE = '?page=';
const API_PARAM_COUNT = 'count=';
const API_USERS_PARAM_COUNT = API_PARAM_COUNT + 6;
const API_USERS_PARAM_PAGE = API_PARAM_PAGE + 1;

export const API_USERS_PATH = HTTPS + API_ROOT + API_USERS; 
export const API_USERS_PARAMS = API_USERS_PARAM_PAGE + '&' + API_USERS_PARAM_COUNT; 
export const API_POSITIONS_PATH = HTTPS + API_ROOT + API_POSITIONS;
export const API_TOKEN_PATH = HTTPS + API_ROOT + API_TOKEN; 