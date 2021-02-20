import React from "react";
import Wrapper from "./components/common/Wrapper"

class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
                <Wrapper>
                    Hello {name}
                </Wrapper>
        );
    }
}

export default App;