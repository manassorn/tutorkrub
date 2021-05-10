import { BehaviorSubject } from 'rxjs';
import Cookie from './Cookie'
import Jwt from './Jwt'

const subject = BehaviorSubject(null);
function userId() {
  return subject.value
  /*let accessToken = ''
  if(localStorage) {
    accessToken = localStorage.getItem('accessToken')
  } else {
    accessToken = Cookie.get('accessToken')
  }
  const json = Jwt.parse(accessToken)
  return json.userId*/
}

export default {userId, subject}