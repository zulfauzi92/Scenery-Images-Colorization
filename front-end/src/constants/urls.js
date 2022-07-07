import Cookies from "js-cookie";

export const SERVER_NAME = "http://localhost:8000";
const BASE_URL = SERVER_NAME + "/api";
export const STORAGE_URL = SERVER_NAME + "/storage/";

let JWT = null;
if (Cookies.getJSON("USER") !== undefined) JWT = Cookies.getJSON("USER").token;

//INITIALIZE
export const JWT_HEADER = JWT;

//LOGIN & REGISTER API
export const LOGIN_API = `${BASE_URL}/login`;
export const REGISTER_API = `${BASE_URL}/register`;

export const GET_INVOICE = (bookingId) =>
    `${BASE_URL}/my-booking/user/invoice/${bookingId}`;

export const GET_DETAIL_ROOM = (roomId) =>
    `${BASE_URL}/room/show/${roomId}`;

export const GET_HOME = () => 
    `${BASE_URL}/room/home`;

export const GET_ROOMS = () => 
    `${BASE_URL}/colorization/results`;

export const GET_OFFICE_ROOMS = () => 
    `${BASE_URL}/my-office/read`;

export const CREATE_OFFICE = `${BASE_URL}/my-office/create`;