import React from "react";
import Wrapper from "./components/common/Wrapper"
import User from "./components/pages/User"
import UserEdit from "./components/pages/UserEdit"
import UserEditEmail from "./components/pages/UserEditEmail"


class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
                <Wrapper>
                    <UserEditEmail></UserEditEmail>
                </Wrapper>
        );
    }
}

export default App;