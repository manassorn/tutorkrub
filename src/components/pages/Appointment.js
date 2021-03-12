import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'
import './Course.css'

class Appointment extends React.Component {


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
        return      <div class="container pt-3 border-top" style={{maxWidth:'720px'}}>
      
      
       <SimpleTitle title='รายละเอียดนัดหมาย' />
       
       
       
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
          afsghs shhsjsjsjss hsjsjsjsjsj sj djdjd jdjd ucudus hdj djks jsiwow jxjd jskkkdkd xjkd xbxh xxj djdkkdkd dkkdkd djkd 
        </div>

        
       </div>
     </div> 

    }
}
export default Appointment