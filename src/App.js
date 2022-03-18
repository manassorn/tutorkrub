import React from "react";
import Api from "./Api"
import Auth from "./Auth"

import Wrapper from "./components/common/Wrapper"
import Course from "./components/pages/course/Course"
import Checkout from "./components/pages/checkout/Checkout"
import CheckoutCreditCard from "./components/pages/checkout/CheckoutCreditCard"
import CourseAdd from "./components/pages/course/CourseAdd"
import CourseEdit from "./components/pages/course/CourseEdit"
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
import Register from "./components/pages/register/Register"
import Login from "./components/pages/Login"
import Home from "./components/pages/home/Home"
// IMPORT

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/appointment/list" component={AppointmentList} />
              <Route path="/appointment" component={Appointment} />
              <Route path="/checkout/creditcard" component={CheckoutCreditCard} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/course/add" component={CourseAdd} />
              <Route path="/course/edit" component={CourseEdit} />
              <Route path="/explore" component={Explore} />
              <Route path="/course" component={Course} />
              <Route path="/pay" component={Pay} />
              <Route path="/profile/tutor/congrats" component={ProfileTutorCongrats} />
              <Route path="/profile/tutor" component={ProfileTutor} />
              <Route path="/user/edit/avatar" component={ProfileEditAvatar} />
              <Route path="/user/edit/name" component={ProfileEditName} />
              <Route path="/user/edit/skypeid" component={ProfileEditSkypeId} />
              <Route path="/user/edit/zoomid" component={ProfileEditZoomId} />
              <Route path="/user/edit/availability" component={ProfileEditAvailability} />
              <Route path="/user/edit/email" component={ProfileEditEmail} />
              <Route path="/user/edit/email/verifycode" component={ProfileEditEmailVerifyCode} />
              <Route path="/user/edit" component={ProfileEdit} />
              <Route path="/user" component={Profile} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />

              <Redirect to="/" />
            </Switch>
            </Wrapper>
          </BrowserRouter>

        );
    }
}

export default App;