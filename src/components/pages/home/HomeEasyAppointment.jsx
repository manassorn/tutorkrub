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
            
              <div className="col-md-4">
               <div className="d-flex">
                <img src="" width="24" width="24"/>
                <div className="border radius-10">
                  ค้นหาติวเตอร์ง่ายๆ ตรงใจ
                </div>
               </div>
              
              </div>
            
            
            </div>
            
            </div>
          </div>

      </div>

    }
}

export default HomeEasyAppointment;