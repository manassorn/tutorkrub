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
  abc () {
    console.log('abc')
    $('.congrats-step1').removeClass('slide-in-left').addClass('slide-out-left');
    $('.congrats-step2').removeClass('slide-out-right').addClass('slide-in-right');

  }
  edf () {
    console.log('edf')
    $('.congrats-step2').addClass('slide-out');
    $('.congrats-step3').addClass('slide-in');

  }
  xyz () {
    $('.congrats-step1').removeClass('slide-out-left').addClass('slide-in-left');
    $('.congrats-step2').removeClass('slide-in-right').addClass('slide-out-right');

  }
  
  back(ele) {
    prevEle = ele.previousSibilng
    prevEle.classList.remove('slide-out-left')
    prevEle.classList.add('slide-in-left')
    ele.classList.remove('slide-in-right')
    ele.classList.add('slide-out-right')
  }
  
  next(e) {
    nextEle = ele.nextSibilng
    nextEle.classList.remove('slide-in-left')
    nextEle.classList.add('slide-out-left')
    ele.classList.remove('slide-out-right')
    ele.classList.add('slide-in-right')
  }


    
    render() {
      
      return <div>
        <div className="modal d-block" tabIndex="-1" role="dialog" id="editTutorPrifileModal">
          <div className="modal-dialog modal-dialog-centeredx" role="document">
            <div className="modal-content">
              <div className="modal-body py-5">
                <div className="text-center">
                  <img src="/assets/images/avatars/avatar-1.png" className="rounded-circle shadow p-1 m-3" width="130" height="130" alt=""/>
                  <h4>ยินดีต้อนรับ<br/>ติวเตอร์คนใหม่</h4>
                </div>
                <div className="position-relative overflow-hidden" style={{height:'300px'}}>
                  <div className="my-4 text-center congrats-step congrats-step1" ref={ele => {this.step1 = ele}}>
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
                    <p>คุณสอนชั้นเรียนไหนบ้าง (เลือกได้หลายชั้น)</p>

                    {Constant.schoolLevels.map(subject => (
                      <CheckBoxBadge label={subject}/>
                    ))}

                    <div className="text-center my-4">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" style={{minWidth:'120px'}} onClick={this.xyz}>กลับ</button>
                    <button type="button" className="btn btn-primary ml-2" style={{minWidth:'120px'}} onClick={e => {this.back(this.step2)}}>ต่อไป</button>
                    </div>

                  </div>

                  <div className="my-4 text-center congrats-step congrats-step3" ref={ele => {this.step3 = ele}}>
                    <p>สอนชั่วโมงละกี่บาท</p>

                    <input type="number" min="50" className="form-control"/>

                    <div className="modal-footerx text-center my-4">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" style={{minWidth:'120px'}}>กลับ</button>
                    <button type="button" className="btn btn-primary ml-2" style={{minWidth:'120px'}}>ต่อไป</button>
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