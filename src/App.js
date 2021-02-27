import React from "react";
import Wrapper from "./components/common/Wrapper"
import User from "./components/pages/User"
import UserEdit from "./components/pages/UserEdit"
import UserEditEmail from "./components/pages/UserEditEmail"
import UserEditEmailVerifyCode from "./components/pages/UserEditEmailVerifyCode"
import CourseList from "./components/pages/CourseList"


class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
          <Wrapper>
            <CourseList></CourseList>
          </Wrapper>
        );
    }
}

export default App;