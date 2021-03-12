import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'
import './Course.css'

class Course extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          weekIncrement: 0,
          availableHours: [[]],
          course: {}
        }
        this.daysOfWeek = ['จันทร์',
        'อังคาร',
        'พุธ',
        'พฤหัส',
        'ศุกร์',
        'เสาร์',
        'อาทิตย์']
        var curr = new Date;
        var monday = curr.getDate() - curr.getDay() +1;
        
        this.dates = [0,1,2,3,4,5,6].map(i => new Date(curr.setDate(monday +i)))

        this.nextWeek = this.nextWeek.bind(this)
        this.prevWeek = this.prevWeek.bind(this)
    }

    componentDidMount() {
      Api.get('/crud/course')
        .then(response => 
        {
          const course = response.data.data
          this.setState({course})
          const tutorId = course.tutorId

          return Api.get(`/user/${tutorId}/availableHours`)
        }
        ).then(response => {
          const availableHours = response.data.data
          this.setState({availableHours})
        });
      
      
    }
    
    prevWeek() {
      this.setState({ weekIncrement: this.state.weekIncrement -1 })
    }
    
    nextWeek() {
      this.setState({weekIncrement: this.state.weekIncrement +1})
    }

    render() {
      return      <div class="container pt-3 border-top" style={{maxWidth:'720px'}}>
      
      
       <SimpleTitle title='รายละเอียดคอร์ส' />
       
       
       
              <div class="p-3">
        <div class="text-center d-flex justify-content-center">
         <img src="assets/images/avatars/avatar-1.png" class="rounded-circle shadow" width="130" height="130" alt=""/>
         <div class="m-3 text-left">
          <h3>รับสอนคณิตศาสตร์</h3>
        <span class="text-muted">&bull;&nbsp;&nbsp;manassorn&nbsp;&nbsp;<br/>&bull;&nbsp;&nbsp;สอนแล้ว 0 ครั้ง &nbsp;<br/>
        &bull;&nbsp; 0 ดาว</span> 




         </div>
        </div>
        
        
        <div class="text-muted mt-2">
          afsghs shhsjsjsjss hsjsjsjsjsj sj djdjd jdjd ucudus hdj djks jsiwow jxjd jskkkdkd xjkd xbxh xxj djdkkdkd dkkdkd djkd {this.state.weekIncrement}
        </div>

        
       </div>

       
       
       
       
      
      <div class="border rounded"> 
       <div class="p-2"> 
        <h3>วัน<span class="text-muted" style={{fontSize:'16px'}}> จองล่วงหน้าได้ 90 วัน</span></h3> 
        
        
        <div class="row mb-2 pb-2 align-items-stretch m-0"> 
        
         <div class="col-1 p-0"> 
         <button class="btn btn-outline-primary d-flex align-items-center justify-content-center" style={{width:'100%',height:'100%'}} onClick={this.prevWeek}>
         <i class="lni lni-chevron-left"></i> 
         </button>
          
         </div> 
         
         
         
         
         <div class="col borderx">
           
           
           
        <div id="date" class="row">
        {[0,1,2,3,4,5,6].map(i => (
         <div class="col-3 p-1"> 
          <div class="option border rounded text-center pb-3 pt-3">
            {this.daysOfWeek[i]} 
           <br/> 
           <b>{this.dates[i].getDate()}</b> 
          </div> 
         </div> 
        ))}

        </div> 
           
           
         </div> 
         <div class="col-1 p-0"> 
         <button class="btn btn-outline-secondary d-flex align-items-center justify-content-center" style={{width:'100%',height:'100%'}} onClick={this.nextWeek}>
         <i class="lni lni-chevron-right"></i> 
         </button>
          
         </div> 
        </div> 

        
        
        
      <div style={{fontSize:'12px'}} className="text-center text-secondary border-bottom pb-3 mb-3">
        {[0,1,2,3,4].map(i => (
        <span className={(this.state.weekIncrement == i)?'text-primary':''}>&#9679;&nbsp;</span>
        ))}
      </div>
        
        
        <h3>ช่วงเวลา</h3> 
        <div id="part-of-day" class="row border-bottom mb-3 pb-3 ml-0 mr-0"> 
         <div class="option col border rounded text-center p-1 m-1 selected"> 
          <h5><img src="assets/images/part-of-day/night.svg" alt="" width="28"/></h5>
          <small>เช้ามืด<br/>00:00 - 06:00</small> 
         </div> 
         <div class="option col border rounded text-center  p-1 m-1 disabled"> 
          <h5><img src="assets/images/part-of-day/morning.svg" alt="" width="28"/></h5>
          <small>เช้า<br/>06:00 - 12:00</small> 
         </div> 
         <div class="option col border rounded text-center p-1 m-1 bg-selected"> 
          <h5><img src="assets/images/part-of-day/afternoon.svg" alt="" width="28" /></h5>
          <small>บ่าย<br/>12:00 - 18:00</small> 
         </div> 
         <div class="option col border rounded text-center p-1 m-1"> 
          <h5><img src="assets/images/part-of-day/evening.svg" alt="" width="28"/></h5>
          <small>กลางคืน<br/>18:00 - 00:00</small> 
         </div> 
        </div> 
        <h3>เวลา</h3> 
        <div id="time" class="row m-0">
        {[1,2,3,4].map(i => (
         <div class="option col border rounded-pill text-center p-1 m-1">
           00:00-00:00 
         </div>
        ))}

 
        </div> 
       </div> 
      </div> 
      
      <div>
        <button class="btn btn-primary btn-block mt-3 mb-5">นัดหมาย</button>
      </div>
      
     </div> 

    }
}

export default Course