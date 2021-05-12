import Jwt from './Jwt'
import Cookie from './Cookie'

const Auth ={
  accessTokenDev: undefined,
  getUserId: () => {
    const token = localStorage? localStorage.getItem('accessToken') : Cookie.get('accessToken')
    if (!token) return undefined
    const json = Jwt.parse(token)
    return json.userId
  },
}
export default Auth