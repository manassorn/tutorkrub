import React from "react";
import Constant from '../../../Constant'
import './ProfileEdit.css'
import './ProfileTutorCongrats.scss'
import ConfettiCannon from "./ConfettiCannon";

class ProfileTutorcongrats extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
        }
        this.subjectOptions = Constant.subjects.map(a => {return {value:a, label:a}})
        this.levelOptions = Constant.schoolLevels.map(a => {return {value:a, label:a}})
      this.back = this.back.bind(this)
      this.next = this.next.bind(this)
    }
  
  back(ele) {
    this.progress1.classList.remove(
      'progress-1','progress-2','progress-3','reverse')
    if (ele == this.step2) {
      this.progress1.classList.add('progress-1','reverse')
    } else if (ele == this.step3) {
      this.progress1.classList.add('progress-2','reverse')
    }
    const prevEle = ele.previousSibling
    prevEle.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-right', 'slide-in-left')
    prevEle.classList.add('slide-in-left')
    ele.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-right', 'slide-in-left')
    ele.classList.add('slide-out-right')
  }
  
  next(ele) {
    this.progress1.classList.remove(
      'progress-1','progress-2','progress-3','reverse')
    if (ele == this.step1) {
      this.progress1.classList.add('progress-1')
    } else if (ele == this.step2) {
      this.progress1.classList.add('progress-2')
    } else if (ele == this.step3) {
      this.progress1.classList.add('progress-3')
      const confetti = new ConfettiCannon();
    }
    const nextEle = ele.nextElementSibling
    nextEle.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-right', 'slide-in-left')
    nextEle.classList.add('slide-in-right')
    ele.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-right', 'slide-in-left')
    ele.classList.add('slide-out-left')
  }


    
    render() {
      
      return <div>
        <canvas id="canvas"></canvas>
        <div className="modal d-block" tabIndex="-1" role="dialog" id="editTutorPrifileModal" style={{background:'rgba(241,243,246,0.6)'}}>
          <div className="modal-dialog modal-dialog-centeredx" role="document">
            <div className="position-absolute" style={{left:'20px',top:'10px', zIndex:'100'}}>
              <img src="/assets/images/logo1.png" width="60"/>
            </div>
            <div className="modal-content">
              <div className="modal-body py-5">
                <div className="text-center">
                  <div className="m-3 mx-auto position-relative" style={{width:'130px',height:'130px'}}>
                    <img src="/assets/images/avatars/avatar-1.png" style={{left:0}} className="rounded-circle shadow p-2 position-absolute" width="130" height="130" alt=""/>
                    <svg viewBox="0 0 63.6619772368 63.6619772368">
                      <circle ref={ele => {this.progress1 = ele}} className="pie1x" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>
                    </svg>
                  </div>
                  <h4>ยินดีต้อนรับ<br/>ติวเตอร์คนใหม่</h4>
                </div>
                <div className="position-relative overflow-hidden" style={{height:'300px'}}>
                  <div className="my-4 text-center congrats-step congrats-step1" ref={ele => {this.step1 = ele}}>
                    {/*<div className="my-4 progress mx-auto" style={{height:'3px',maxWidth:'300px'}}>*/}
                    {/*  <div class="progress-bar" role="progressbar" style={{width:'33%'}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>*/}
                    {/*</div>*/}
                    <p>คุณสอนวิชาอะไร (เลือกได้หลายวิชา)</p>

                    {Constant.subjects.map(subject => (
                      <CheckBoxBadge label={subject}/>
                    ))}
                    <div className="text-center my-4">
                      <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" style={{minWidth:'120px'}}>กลับ</button>
                      <button type="button" className="btn btn-primary ml-2" style={{minWidth:'120px'}} onClick={e => {this.next(this.step1)}}>ต่อไป</button>
                    </div>

                  </div>

                  <div className="my-4 text-center congrats-step congrats-step2" ref={ele => {this.step2 = ele}}>
                    {/*<div className="my-4 progress mx-auto" style={{height: '3px', maxWidth: '300px'}}>*/}
                    {/*  <div className="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow="66"*/}
                    {/*       aria-valuemin="0" aria-valuemax="100"></div>*/}
                    {/*</div>*/}
                    <p>คุณสอนชั้นเรียนไหนบ้าง (เลือกได้หลายชั้น)</p>

                    {Constant.schoolLevels.map(subject => (
                      <CheckBoxBadge label={subject}/>
                    ))}

                    <div className="text-center my-4">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" style={{minWidth:'120px'}} onClick={e => {this.back(this.step2)}}>กลับ</button>
                    <button type="button" className="btn btn-primary ml-2" style={{minWidth:'120px'}} onClick={e => {this.next(this.step2)}}>ต่อไป</button>
                    </div>

                  </div>

                  <div className="my-4 text-center congrats-step congrats-step3" ref={ele => {this.step3 = ele}}>
                    {/*<div className="my-4 progress mx-auto" style={{height: '3px', maxWidth: '300px'}}>*/}
                    {/*  <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100"*/}
                    {/*       aria-valuemin="0" aria-valuemax="100"></div>*/}
                    {/*</div>*/}
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
                    <button type="button" className="btn btn-primary ml-2" style={{minWidth:'120px'}} onClick={e =>{this.next(this.step3)}}>เรียบร้อย
                      &nbsp;<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>
                    </div>

                  </div>

                  <div className="text-center congrats-step congrats-step4" ref={ele => {this.step4 = ele}}>
                    <div className="my-4 font-60">
                      🎉
                    </div>
                    <div className="modal-footerx text-center my-4">
                      <button type="button" className="btn btn-link" data-dismiss="modal" style={{minWidth:'150px'}} onClick={e =>{this.back(this.step3)}}>ไปยังหน้าโปรไฟล์</button>
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