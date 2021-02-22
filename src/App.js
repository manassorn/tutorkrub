import React from "react";
import Wrapper from "./components/common/Wrapper"
import User from "./components/pages/User"
import UserEdit from "./components/pages/UserEdit"
import UserEditEmail from "./components/pages/UserEditEmail"
import UserEditEmailVerifyCode from "./components/pages/UserEditEmailVerifyCode"
import UserEditAvatar from "./components/pages/UserEditAvatar"


class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
          <Wrapper>
            <UserEditAvatar></UserEditAvatar>
          </Wrapper>
        );
    }
}

export default App;