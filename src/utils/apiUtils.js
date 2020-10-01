import axios from 'axios';
import qs from 'qs';
//import { API_ROOT } from '../../env';

const API_VERSION_STOREFRONT = '/api/v2/storefront';
const API_ROOT = 'http://192.168.0.105:3000';

function handleAPI( path, params, method, data = null) {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Content-Length': data.length
  };
  let url = API_ROOT + path;
  url = url +'?'+ qs.stringify(params, { arrayFormat: 'brackets' })
  return axios({
    method,
    url,
    data,
    headers
  });
}

export { handleAPI, API_VERSION_STOREFRONT };
