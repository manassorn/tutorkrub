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
    Api.get('/authen/checkLogin').then(function(response) {
        const login = response.data.data
        const loginStatus = login.loginStatus
        subject.next({loginStatus,user})
      }).catch(function(error) {
        subject.next({status:'failed', user: null})
      })
  },
  observeLogin: (fn) => {
    subject.subscribe(fn)
  }
}

export default Auth