import http from './http';

const key = 'AIzaSyD58SIC_tT2yekw1qq_-OkPLyJhG-5vTbk';

export const search = query => http.get(`search?part=snippet&type=video&key=${ key }&q=${ query }`);