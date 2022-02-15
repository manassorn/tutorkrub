import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import './HomeGettingStarted.css'

class HomeEasyAppointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
      
    }

    render() {
      return <div className="py-5">
          <div className="text-center">
            <h2>
            นัดหมายง่ายสบายๆ
            </h2>
          </div>
          

          <div className="row">
            <div className="col-md-10 offset-md-1">
            <div className="row">

              {[0,1,2,3,4].map(i => (
                <div className="col-md-3 px-4" style={{width:'200px'}}>
                  <div style={{boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px;'}} className="text-center radius-10">
                    <img src="https://i.imgur.com/BDmdbeI.png" style={{width: '60%'}} /><br/>
                      <h2>asdf</h2>
                      <p className="px-3 pb-3">dfsdfsdfsd asd asdf as fasd fasd fasd fasd fads fas fa sfas df asasdf.
                        asf</p>
                  </div>
                </div>
              ))}

            
            </div>
            
            </div>
          </div>

      </div>

    }
}

export default HomeEasyAppointment;