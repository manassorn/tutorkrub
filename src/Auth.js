import { BehaviorSubject } from 'rxjs';
import Jwt from './Jwt'
import Cookie from './Cookie'
import Api from './Api'

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
        const status = 'loggedin'
        subject.next({status,user})
      }).catch(function(error) {
        subject.next({status:'failed', user: null})
      })
  },
  observeLogin: (fn) => {
    subject.subscribe(fn)
  }
}

export default Auth