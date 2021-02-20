import React from "react";
import Wrapper from "./components/common/Wrapper"
import User from "./components/pages/User"


class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
                <Wrapper>
                    <User></User>
                </Wrapper>
        );
    }
}

export default App;