import { BehaviorSubject } from 'rxjs';
import Cookie from './Cookie'
import Jwt from './Jwt'

const subject = new BehaviorSubject(null);
function userId() {
  return subject.value.id
  /*let accessToken = ''
  if(localStorage) {
    accessToken = localStorage.getItem('accessToken')
  } else {
    accessToken = Cookie.get('accessToken')
  }
  const json = Jwt.parse(accessToken)
  return json.userId*/
}
function getUser() {
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
function setUser(user) {
  subject.next(user)
}
function subscribe(fn) {
  subject.subscribe(fn)
}

export default {getUser,userId, subject,setUser, subscribe}