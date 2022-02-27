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
            title:'เริ่มเ',
          },

        ]
          
        
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
            {this.details.map(d => (

            <div className="col-md-3">
            <div className="row">
                <div className="col-2">
                 <img src="http://v.fastcdn.co/u/c787f3ba/25900801-0-arrow.png" />
                </div>
                <div className="col-10">
                  <div className="text-center radius-10 box-shadow">
                      <h4 className="text-weight-bold">{d.title}</h4>
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