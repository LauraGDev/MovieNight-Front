const API_BASE = "http://localhost:8080/"; 
const API_AUTH_BASE = `${API_BASE}auth/`;
const API_ENDPOINTS_BASE = `${API_BASE}api/v1/`;  

// API Auth Endpoints
export const URL_API_SIGNIN = `${API_AUTH_BASE}register`;
export const URL_API_LOGIN = `${API_AUTH_BASE}login`;

// API Endpoints
export const URL_API_ALL_CONTENT = `${API_ENDPOINTS_BASE}content/`;