import React from "react";
import Api from "./Api"
import Auth from "./Auth"

import Wrapper from "./components/common/Wrapper"
import Course from "./components/pages/course/Course"
import Checkout from "./components/pages/checkout/Checkout"
import CheckoutCreditCard from "./components/pages/checkout/CheckoutCreditCard"
import CourseAdd from "./components/pages/course/CourseAdd"
import CourseEdit from "./components/pages/course/CourseEdit"
import Tutor from "./components/pages/tutor/Tutor"
import Explore from "./components/pages/explore/Explore"
import Profile from "./components/pages/profile/Profile"
import ProfileEdit from "./components/pages/profile/ProfileEdit"
import ProfileEditAvailability from "./components/pages/profile/ProfileEditAvailability"
import ProfileEditName from "./components/pages/profile/ProfileEditName"
import ProfileEditSkypeId from "./components/pages/profile/ProfileEditSkypeId"
import ProfileEditZoomId from "./components/pages/profile/ProfileEditZoomId"
import ProfileEditEmail from "./components/pages/profile/ProfileEditEmail"
import ProfileEditAvatar from "./components/pages/profile/ProfileEditAvatar"
import ProfileEditEmailVerifyCode from "./components/pages/profile/ProfileEditEmailVerifyCode"
import ProfileTutor from "./components/pages/profile/ProfileTutor"
import ProfileTutorCongrats from "./components/pages/profile/ProfileTutorCongrats"
import Pay from "./components/pages/Pay"
import Appointment from "./components/pages/appointment/Appointment"
import AppointmentList from "./components/pages/appointment/AppointmentList"
import RegisterStudent from "./components/pages/register/RegisterStudent"
import RegisterTutor from "./components/pages/register/RegisterTutor"
import Login from "./components/pages/Login"
import Home from "./components/pages/home/Home"
import Test from "./components/test"
// IMPORT

import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useLocation,
  Navigate
} from "react-router-dom";



class App extends React.Component {
  componentDidMount(){
    Auth.checkLogin()
  }
    render() {
        const { name } = this.props;
        return (
          <BrowserRouter>
            <Wrapper>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/test" element={<Test/>} />
              <Route path="/register" element={<RegisterStudent/>} />
              <Route path="/register/tutor" element={<RegisterTutor/>} />
              <Route path="/login" element={<Login/>} />
              {/*<Route path="/profile/tutor/congrats" element={<RequireAuth><ProfileTutorCongrats/></RequireAuth>} />*/}
              <Route path="/profile/tutor/congrats" element={<ProfileTutorCongrats/>} />
                
                

              <Route path="/appointment/list" element={<AppointmentList/>} />
              <Route path="/appointment" element={<Appointment/>} />
              <Route path="/checkout/creditcard" element={<CheckoutCreditCard/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/course/add" element={<CourseAdd/>} />
              <Route path="/course/edit" element={<CourseEdit/>} />
              <Route path="/explore" element={<Explore/>} />
              <Route path="/course" element={<Course/>} />
              <Route path="/tutor/:tutorId" element={<Tutor/>} />
              <Route path="/pay" element={<Pay/>} />
              <Route path="/profile/tutor" element={<ProfileTutor/>} />
              <Route path="/user/edit/avatar" element={<ProfileEditAvatar/>} />
              <Route path="/user/edit/name" element={<ProfileEditName/>} />
              <Route path="/user/edit/skypeid" element={<ProfileEditSkypeId/>} />
              <Route path="/user/edit/zoomid" element={<ProfileEditZoomId/>} />
              <Route path="/user/edit/availability" element={<ProfileEditAvailability/>} />
              <Route path="/user/edit/email" element={<ProfileEditEmail/>} />
              <Route path="/user/edit/email/verifycode" element={<ProfileEditEmailVerifyCode/>} />
              <Route path="/user/edit" element={<ProfileEdit/>} />
              <Route path="/user" element={<Profile/>} />
              
              
              <Route path="*" element={              <Navigate to="/" replace/>} />

            </Routes>
            </Wrapper>
          </BrowserRouter>

        );
    }
}

class RequireAuth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginStatus: 'unknown'
    }
  }
  componentDidMount() {
    
    Auth.observeLogin((login)=>{
      if(login) {
        console.log(login)
        const loginStatus = login.loginStatus
        this.setState({loginStatus})

      }
    })
  }
  render() {
    if (this.state.loginStatus == 'unknown') {
    } else if (this.state.loginStatus == 'not_authorized') {
      console.log('xxx')
      return <Navigate to="/login" state={{ from: location }} replacex />;
    } else if (this.state.loginStatus == 'authorized') {
      console.log('abc')
      return this.props.children
    }
    console.log(this.state.loginStatus)
    return null
  }
}

export default App;