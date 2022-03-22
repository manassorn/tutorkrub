import React from "react";
import Constant from '../../../Constant'
import './ProfileEdit.css'
import './ProfileTutorCongrats.scss'

class ProfileTutorcongrats extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
        }
        this.subjectOptions = Constant.subjects.map(a => {return {value:a, label:a}})
        this.levelOptions = Constant.schoolLevels.map(a => {return {value:a, label:a}})
    }
  
  back(ele) {
    const prevEle = ele.previousSibling
    prevEle.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-right', 'slide-in-left')
    prevEle.classList.add('slide-in-left')
    ele.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-right', 'slide-in-left')
    ele.classList.add('slide-out-right')
  }
  
  next(ele) {
    console.log(ele.nextElementSibling.outerHTML)
    const nextEle = ele.nextElementSibling
    nextEle.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-right', 'slide-in-left')
    nextEle.classList.add('slide-in-right')
    ele.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-right', 'slide-in-left')
    ele.classList.add('slide-out-left')
  }


    
    render() {
      
      return <div>
        <div className="modal d-block" tabIndex="-1" role="dialog" id="editTutorPrifileModal">
          <div className="modal-dialog modal-dialog-centeredx" role="document">
            <div className="position-absolute" style={{left:'20px',top:'10px'}}>
              <img src="/assets/images/logo1.png" width="60"/>
            </div>
            <div className="modal-content">
              <div className="modal-body py-5">
                <div className="text-center">
                  <img src="/assets/images/avatars/avatar-1.png" className="rounded-circle shadow p-1 m-3" width="130" height="130" alt=""/>
                  <h4>ยินดีต้อนรับ<br/>ติวเตอร์คนใหม่</h4>
                </div>
                <div className="position-relative overflow-hidden" style={{height:'300px'}}>
                  <div className="text-center congrats-step congrats-step1" ref={ele => {this.step1 = ele}}>
                    <div className="my-4 progress mx-auto" style={{height:'3px',maxWidth:'300px'}}>
                      <div class="progress-bar" role="progressbar" style={{width:'33%'}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>คุณสอนวิชาอะไร (เลือกได้หลายวิชา)</p>

                    {Constant.subjects.map(subject => (
                      <CheckBoxBadge label={subject}/>
                    ))}
                    <div className="text-center my-4">
                      <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" style={{minWidth:'120px'}}>กลับ</button>
                      <button type="button" className="btn btn-primary ml-2" style={{minWidth:'120px'}} onClick={e => {this.next(this.step1)}}>ต่อไป</button>
                    </div>

                  </div>

                  <div className="my-4x text-center congrats-step congrats-step2" ref={ele => {this.step2 = ele}}>
                    <div className="my-4 progress mx-auto" style={{height: '3px', maxWidth: '300px'}}>
                      <div className="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow="66"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>คุณสอนชั้นเรียนไหนบ้าง (เลือกได้หลายชั้น)</p>

                    {Constant.schoolLevels.map(subject => (
                      <CheckBoxBadge label={subject}/>
                    ))}

                    <div className="text-center my-4">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" style={{minWidth:'120px'}} onClick={e => {this.back(this.step2)}}>กลับ</button>
                    <button type="button" className="btn btn-primary ml-2" style={{minWidth:'120px'}} onClick={e => {this.next(this.step2)}}>ต่อไป</button>
                    </div>

                  </div>

                  <div className="my-4x text-center congrats-step congrats-step3" ref={ele => {this.step3 = ele}}>
                    <div className="my-4 progress mx-auto" style={{height: '3px', maxWidth: '300px'}}>
                      <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>สอนชั่วโมงละกี่บาท</p>

                    <div className="input-group mb-3 mx-auto" style={{maxWidth:'300px'}}>
                      <input type="number" className="form-control" placeholder=""
                             aria-label="Recipient's username" aria-describedby="basic-addon2" min="50"/>
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">บาทต่อชั่วโมง</span>
                        </div>
                    </div>

                    <div className="modal-footerx text-center my-4">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" style={{minWidth:'120px'}} onClick={e =>{this.back(this.step3)}}>กลับ</button>
                    <button type="button" className="btn btn-primary ml-2" style={{minWidth:'120px'}}>เรียบร้อย</button>
                    </div>

                  </div>

              </div>


              </div>
            </div>
          </div>
        </div>

    </div>
    }
};

class CheckBoxBadge extends React.Component {
  render() {
    return <div className="form-check form-check-inline border badge badge-pill text py-1 px-2">
      <input className="form-check-input" type="checkbox" id={this.props.lable} value="option3"/>
        <label className="form-check-label" htmlFor="inlineCheckbox3">{this.props.label}</label>
    </div>
  }
}

export default ProfileTutorcongrats