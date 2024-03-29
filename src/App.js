import React from "react";
import Api from "./Api"
import Auth from "./Auth"

import Wrapper from "./components/common/Wrapper"
import Course from "./components/pages/course/Course"
import Book from "./components/pages/book/Book"
import CourseAdd from "./components/pages/course/CourseAdd"
import CourseEdit from "./components/pages/course/CourseEdit"
import Tutor from "./components/pages/explore/Tutor"
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
import ProfileRegisterTutor from "./components/pages/profile/ProfileRegisterTutor"
import Pay from "./components/pages/Pay"
import Appointment from "./components/pages/appointment/Appointment"
import AppointmentList from "./components/pages/appointment/AppointmentList"
import RegisterStudent from "./components/pages/register/RegisterStudent"
import RegisterTutor from "./components/pages/register/RegisterTutor"
import AdminTutorAdd from "./components/pages/admin/AdminTutorAdd"
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
              <Route path="/admin/tutor/add" element={<AdminTutorAdd/>} />
                
                

              <Route path="/appointment/list" element={<AppointmentList/>} />
              <Route path="/appointment" element={<Appointment/>} />
              <Route path="/book" element={<Book/>} />
              <Route path="/book/course/:courseId" element={<Book/>} />
              <Route path="/course/add" element={<CourseAdd/>} />
              <Route path="/course/edit" element={<CourseEdit/>} />
              <Route path="/explore" element={<Explore/>} />
              <Route path="/explore/tutor/:tutorId" element={<Tutor/>} />
              <Route path="/course" element={<Course/>} />
              <Route path="/pay" element={<Pay/>} />
              <Route path="/profile/tutor" element={<ProfileTutor/>} />
              <Route path="/profile/edit/avatar" element={<ProfileEditAvatar/>} />
              <Route path="/profile/edit/name" element={<ProfileEditName/>} />
              <Route path="/profile/edit/skypeid" element={<ProfileEditSkypeId/>} />
              <Route path="/profile/edit/zoomid" element={<ProfileEditZoomId/>} />
              <Route path="/profile/edit/availability" element={<ProfileEditAvailability/>} />
              <Route path="/profile/edit/email" element={<ProfileEditEmail/>} />
              <Route path="/profile/edit/email/verifycode" element={<ProfileEditEmailVerifyCode/>} />
              <Route path="/profile/edit" element={<ProfileEdit/>} />
              {/*<Route path="/profile/tutor/register" element={<RequireAuth><ProfileTutorRegister/></RequireAuth>} />*/}
              <Route path="/profile/register-tutor" element={<ProfileRegisterTutor/>} />
              <Route path="/profile" element={<Profile/>} />
              
              
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