import React from "react";

class HomeFooter extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div>
      <div className="d-none d-md-block">
      <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#0099ff" fill-opacity="1" d="M0,32L24,58.7C48,85,96,139,144,144C192,149,240,107,288,101.3C336,96,384,128,432,154.7C480,181,528,203,576,181.3C624,160,672,96,720,101.3C768,107,816,181,864,224C912,267,960,277,1008,261.3C1056,245,1104,203,1152,165.3C1200,128,1248,96,1296,90.7C1344,85,1392,107,1416,117.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
      
      
      </div>
      
      <div className="d-md-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      
      
          <div className="text-white text-center pt-5 pb-3" style={{background:'#0099ff'}}>
              <span className="h6">4 ประโยชน์</span>
              <p className="h4">ที่จะได้รับ</p>
          </div>
      
        <div className="row mx-0" style={{background:'#0099ff'}}>
            <div className="col-md-4 offset-md-2">
                <div className="col-5 col-md-12 mx-auto">
                    <img src="/assets/images/home/student-write.png" width="100%"/>
                </div>
 
            </div>
            <div className="col-md-4 text-white mx-3">
            
            
         <div class="mt-4 media"> 
           <div class="product-img">
             <img src="/assets/images/home/mobile.jpg" width="100%" className="radius-10"/>
           </div> 
           <div class="media-body pl-3"> 
            <h5 class="font-weight-bold">ไม่ผูกมัด</h5> 
            <p className="mb-1">
 ชำระค่าเรียนเป็นครั้ง ครั้งละ 1 ชั่วโมง
            </p>
           </div> 
          </div>
            
            
         <div class="mt-4 media"> 
           <div class="product-img">
             <img src="/assets/images/home/online.png" width="100%" className="radius-10"/>
           </div> 
           <div class="media-body pl-3"> 
            <h5 class="font-weight-bold">เรียนออนไลน์</h5> 
            <p className="mb-1">
 เรียนได้จากทุกที่ เว้นระยะห่างทางสังคม
            </p>
           </div> 
          </div>
          
          
          
         <div class="mt-4 media"> 
           <div class="product-img">
             <img src="/assets/images/home/calendar-flat.png" width="100%" className="radius-10"/>
           </div> 
           <div class="media-body pl-3"> 
            <h5 class="font-weight-bold">เลือกเวลาเรียนได้เอง</h5> 
            <p className="mb-1">
 นัดหมายเวลาที่สะดวกได้เอง
            </p>
           </div> 
          </div>
            
 
          <div class="mt-4 media"> 
            <div class="product-img"> 
            <img src="/assets/images/home/shakehand-white.png" width="100%"/>
            </div> 
            <div class="media-body pl-3"> 
             <h5 class="font-weight-bold">ปลอดภัย ไม่โกง</h5> 
             <p className="mb-1">
  เงินจะโอนไปให้ติวเตอร์ หลังจากเรียนจบเท่านั้น
             </p>
            </div> 
           </div>
           
           
    
    

            
            
            </div>
      </div>
      
      
      
      
      
      
      
      <div className="bg-light">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,250.7C672,224,768,128,864,117.3C960,107,1056,181,1152,202.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
      
      
        
      </div>

    }
}

export default HomeFooter