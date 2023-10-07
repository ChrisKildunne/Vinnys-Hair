import sendRequest from "./send-request";

const BASE_URL = '/api/bookings';


export function getBooking(){
    return sendRequest(`${BASE_URL}`)
}

export function createBooking(bookingData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', bookingData);
}
