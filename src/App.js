import React from "react";
import Wrapper from "./components/common/Wrapper"
import User from "./components/pages/User"
import UserEdit from "./components/pages/UserEdit"
import UserEditEmail from "./components/pages/UserEditEmail"
import UserEditEmailVerifyCode from "./components/pages/UserEditEmailVerifyCode"
import CourseAdd from "./components/pages/CourseAdd"


class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
          <Wrapper>
            <CourseAdd></CourseAdd>
          </Wrapper>
        );
    }
}

export default App;