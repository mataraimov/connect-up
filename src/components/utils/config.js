export const DOMAIN = 'lizaloxyshka.pythonanywhere.com';
export const DEBUG_MODE = window.location.hostname === 'localhost';
export const API_URL = DEBUG_MODE ? 'http://lizaloxyshka.pythonanywhere.com' : `https://${DOMAIN}`;
