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
            title:'ชำระเงินปลอดภัย',
            desc:'เราเป็นตัวกลางชำระเงิน และโอนเงินให้ติวเตอร์เมื่อเรียนจบ'
          },
          {
            image:'2',
            title:'ขั้นต่ำ 1 ชั่วโมง',
            desc:'เรียนครั้งละ 1 - 2 ชั่วโมง ไม่จำเป็นต้องเรียนเป็นคอร์ส'
          },
          {
            image:'3',
            title:'เลือกเวลาเรียนเอง',
            desc:'สามารถเลือกเวลาได้เอง ตี 1 ตี 2 ก็ยังได้'
          },
          {
            image:'4',
            title:'เรียน 1 ต่อ 1',
            desc:'เป็นกันเอง เรียนตามสไตล์ที่ชอบ'
          },
          {
           image: '5',
           title: 'มีติวเตอร์หลายวิชา',
           desc: 'มีติวเตอร์พร้อมสอนหลากหลายวิชา'
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
            <div className="col-md-10 offset-md-1">
            <div className="row">


                
                
              {this.details.map(d => (
                <div className="col-md-3 px-4">
                  <div className="text-center radius-10 box-shadow">
                    <img src={`/assets/images/home/asset${d.image}.png`} style={{width: '60%'}} /><br/>
                      <h2>{d.title}</h2>
                      <p className="px-3 pb-3">{d.desc}</p>
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