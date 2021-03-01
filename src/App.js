import React from "react";
import Wrapper from "./components/common/Wrapper"
import User from "./components/pages/User"
import UserEdit from "./components/pages/UserEdit"
import UserEditEmail from "./components/pages/UserEditEmail"
import UserEditEmailVerifyCode from "./components/pages/UserEditEmailVerifyCode"
import Pay from "./components/pages/Pay"
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
              <Route path="/dist/index" component={User} />
              <Route path="/dist/pay" component={Pay} />
              <Redirect to="/dist/index" />
            </Switch>
          </BrowserRouter>
          
         </Wrapper>
        );
    }
}

export default App;