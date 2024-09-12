const API_BASE = "http://localhost:8080"; 
const API_AUTH_BASE = `${API_BASE}/auth`;
const API_ENDPOINTS_PROFILES = `${API_BASE}/profiles`;  
const API_ENDPOINTS_CONTENT = `${API_BASE}/api/content`

// API Auth Endpoints
export const URL_API_SIGNIN = `${API_AUTH_BASE}/register`;
export const URL_API_LOGIN = `${API_AUTH_BASE}/login`;

// API Endpoints
export const URL_API_ADD_PROFILE= `${API_ENDPOINTS_PROFILES}/new-profile`;
export const URL_API_GET_PROFILES= `${API_ENDPOINTS_PROFILES}/getProfiles`;
export const URL_API_ADD_CONTENT_PROFILE = (id) => `${API_ENDPOINTS_CONTENT}/${id}/addToWatchlist`;

// The Movie DB API
export const PHOTO_BASE_URL = "https://image.tmdb.org/t/p/original/";
export const URL_SEARCH_BY_TITLE = "https://api.themoviedb.org/3/search/multi?include_adult=false&language=es-ES&query="
export const URL_MOVIE_DETAIL = (id) => `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=es-ES`;
export const URL_TV_DETAIL = (id) => `https://api.themoviedb.org/3/tv/${id}?append_to_response=credits&language=es-ES`
