import React from "react";
import Wrapper from "./components/common/Wrapper"
import Course from "./components/pages/Course"
import CourseAdd from "./components/pages/CourseAdd"
import CourseList from "./components/pages/CourseList"
import User from "./components/pages/User"
import UserEdit from "./components/pages/UserEdit"
import UserEditEmail from "./components/pages/UserEditEmail"
import UserEditEmailVerifyCode from "./components/pages/UserEditEmailVerifyCode"
import Pay from "./components/pages/Pay"
import Appointment from "./components/pages/Appointment"
// IMPORT

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";



class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
         <Wrapper>
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={CourseList} />
                
                <Route path="/appointment" component={Appointment} />
                <Route path="/course/add" component={CourseAdd} />
                <Route path="/course" component={Course} />
                <Route path="/explore" component={CourseList} />
                <Route path="/pay" component={Pay} />
                <Route path="/user/edit/email" component={UserEditEmail} />
                <Route path="/user/edit/email/verifycode" component={UserEditEmailVerifyCode} />
                <Route path="/user/edit" component={UserEdit} />
                <Route path="/user" component={User} />

                <Redirect to="/" />
            </Switch>
          </BrowserRouter>
          
         </Wrapper>
        );
    }
}

export default App;