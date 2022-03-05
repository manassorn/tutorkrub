import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import './HomeEasyAppointment.css'

class HomeEasyAppointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.details = [
          {
            image:'1',
            title:'เลือกติวเตอร์',
          },
          {
            image:'2',
            title:'เลือกเวลา',
          },
          {
            image:'3',
            title:'ชำระเงิน',
          },
          {
            image:'4',
            title:'เริ่มเรียน',
          },

        ]
          
        
    }

    componentDidMount() {
      
    }

    render() {
      return <div className="py-5" style={{'background':'#027bff'}}>
          <div className="text-center text-white">
            <h2>
            นัดหมายง่ายสบายๆ
            </h2>
          </div>
          

          <div className="row">
            {this.details.map(d => (

            <div className="col-md-3">
            <div className="row">
                <div className="col-2 col-md-3 align-self-center">
                 <img className="m-2" src="http://v.fastcdn.co/u/c787f3ba/25900801-0-arrow.png" width="80%" />
                </div>
                <div className="col-10 col-md-9 p-3">
                  <div className="text-center radius-10 box-shadow py-3 bg-white">
                      <h4 className="text-weight-bold mb-0">{d.title}</h4>
                  </div>
                </div>

            
            </div>
            
            </div>
            ))}

          </div>

      </div>

    }
}

export default HomeEasyAppointment;