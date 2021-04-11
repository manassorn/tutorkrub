import Cookie from './Cookie'
import Jwt from './Jwt'

function userId() {
  let accessToken = ''
  if(localStorage) {
    accessToken = localStorage.getItem('accessToken')
  } else {
    accessToken = Cookie.get('accessToken')
  }
  const json = Jwt.parse(accessToken)
  return json.userId
}

export default {userId}