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
            title:'ค้นหาติวเตอร์',
          },
          {
            image:'2',
            title:'เลือกเวลา',
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
      return <div className="py-4" style={{'background':'#027bff'}}>
          <div className="text-center text-white">
            <h2>
            นัดหมายง่ายสบายๆ
            </h2>
          </div>
          

          <div className="row mx-0">
            {this.details.map(d => (

            <div className="col-md-4">
            <div className="row mt-3">
                <div className="col-2 col-md-3 align-self-center text-right pr-0">
                 <img className="" src="http://v.fastcdn.co/u/c787f3ba/25900801-0-arrow.png" width="90%" />
                </div>
                <div className="col-10 col-md-9">
                  <div className="text-center radius-10 box-shadow py-3 bg-white">
                      <h4 className="text-weight-bold mb-0">{d.title}</h4>
                  </div>
                </div>

            
            </div>
            
            </div>
            ))}

          </div>

          <div className="text-center text-white m-3">
            <h3>ทดลองเรียน</h3>
          <button class="btn btn-danger bg-rose radius-10 py-2 px-5">ค้นหาติวเตอร์</button>
          <p>สอบถามข้อมูลเพิ่มเติม <a href="#" className="text-white">คลิก</a></p>
          
          </div>
          


      </div>

    }
}

export default HomeEasyAppointment;