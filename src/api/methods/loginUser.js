import Api from 'src/api';
import ApiConstants from '@api/ApiConstants';

export default function loginUser(username, password) {
  return Api(ApiConstants.LOGIN, { username, password }, 'post', null);
}
