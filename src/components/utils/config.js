export const DOMAIN = 'connectappproject.pythonanywhere.com';
export const DEBUG_MODE = window.location.hostname === 'localhost';
export const API_URL = DEBUG_MODE
  ? 'http://connectappproject.pythonanywhere.com'
  : `https://${DOMAIN}`;
