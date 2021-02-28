import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'
import './Course.css'

class Pay extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        weekIncrement: 0
      }
      
    }

    componentDidMount() {
      /*Api.get('/crud/course')
        .then(response => 
        {
          console.log('courses',response.data.data)
        
        this.setState({ courses: response.data.data })
        }
        );
      */
    }

    render() {
        return      <div class="container pt-3"> 
      <div class="row border-bottom mb-3 pb-3"> 
       <div class="col"> 
        <h3 class="mb-0">รับสอนคณิตศาสตร์</h3> 
        <span class="text-muted pr-2">โดย manassorn </span> 
        <br/> 
       </div> 
      </div> 
      <div class="row"> 
       <div class="col-12"> 
        <h5>พุธ 20 ธันวาคม 2563</h5> 
        <div class="border p-2 rounded">
          00:00 - 01:00 
        </div> 
       </div> 
      </div> 
      <div class="row"> 
       <div class="col-12 border-top mt-3 pt-3"> 
        <h5>เลือกช่องทางชำระเงิน</h5> 
        <div class="border p-3 rounded"> 
         <input type="radio"/> Promptpay 
        </div> 
        <h5>โค้ดส่วนลด</h5> 
      <div class="form-group mt-2"> 
       <label>ชื่อคอร์ส</label> 
       <input id="name" type="text" class="form-control" placeholder="พิมพ์ชื่อคอร์ส"/> 
      </div> 

       </div> 
       <div class="col-12 border-top mt-3 pt-3"> 
        <div class="row"> 
         <div class="col font-weight-bold"> 
          <h5> ยอดรวม </h5> 
         </div> 
         <div class="col text-right text-primary font-weight-bold" style="font-size:18px">
           $15 
         </div> 
        </div> 
        <div class="row"> 
         <div class="col"> 
          <button class="btn btn-block btn-primary mt-3 mb-5">ชำระเงิน</button> 
         </div> 
        </div> 
       </div> 
      </div> 
     </div> 

    }
}
export default Pay