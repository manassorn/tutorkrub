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
            <div className="d-flex flex-columm flex-md-rowx">
            
              <div className="border m-1" style={{width:'350px'}}>
               ddd
              
              </div>
                        
              <div className="border m-1" style={{width:'350px'}}>
               ddd
              
              </div>
              
              <div className="border m-1" style={{width:'350px'}}>
               ddd
              
              </div>
            
            </div>
            
            </div>
          </div>

      </div>

    }
}

export default HomeEasyAppointment;