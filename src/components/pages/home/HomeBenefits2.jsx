import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import './HomeBenefits2.css'

class HomeBenefits2 extends React.Component {

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
            desc:'ไม่ว่าจะเช้า-สาย-บ่าย-เย็น ตี 1 ตี 2 ก็ยังได้'
          },
          {
            image:'4',
            title:'เรียน 1 ต่อ 1',
            desc:'เป็นกันเอง เรียนตามสไตล์ที่ชอบ'
          },
          {
           image: '5',
           title: 'หลากหลายวิชา',
           desc: 'มีติวเตอร์หลากหลายวิชา'
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
          

          <div className="row mx-0">
            <div className="col-md-10 offset-md-1">
            <div className="row mx-0">


                
                
              {this.details.map(d => (
                <div className="col-md-3 px-4">
                  <div className="text-center radius-10 box-shadow">
                    <img src={`/assets/images/home/asset${d.image}.png`} style={{width: '60%'}} /><br/>
                      <h5 className="text-weight-bold">{d.title}</h5>
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

export default HomeBenefits2;