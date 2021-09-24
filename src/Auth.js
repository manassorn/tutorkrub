import Jwt from './Jwt'
import Cookie from './Cookie'
import Api from './Api'
import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(null);

const Auth ={
  accessTokenDev: undefined,
  getUserId: () => {
    const token = localStorage? localStorage.getItem('accessToken') : Cookie.get('accessToken')
    if (!token) return undefined
    const json = Jwt.parse(token)
    return json.userId
  },
  checkLogin: () => {
    Api.get('/users/me').then(function(response) {
      const user = response.data.data
      subject.next(user)
      }).catch(function(error) {
    })
  },
  observeLogin: (fn) => {
    subject.subscribe(fn)
  }
}
Auth.checkLogin()
export default Auth