import React from "react";
import Wrapper from "./components/common/Wrapper"
import User from "./components/pages/User"
import UserEdit from "./components/pages/UserEdit"


class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
                <Wrapper>
                    <UserEdit></UserEdit>
                </Wrapper>
        );
    }
}

export default App;