import React, {useState, useRef} from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import FormValidation from '../../common/FormValidation'
import {Form, Input} from '../../common/FormValidation2'
import Constant from "../../../Constant";
import ButtonSpinner from "../../common/ButtonSpinner";
import Croppie from "croppie";
import "croppie/croppie.css"

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditingProfilePhoto: false
    }
    this.email = React.createRef()
    this.pwd = React.createRef()
    this.pwd2 = React.createRef()
    this.krubId = React.createRef()
    this.nextButton = React.createRef()
    this.uploadInput = React.createRef()
    this.uploadPreview = React.createRef()
    this.validate = this.validate.bind(this)
    this.register = this.register.bind(this)
    this.readImageFile = this.readImageFile.bind(this)
  }

  componentDidMount() {

    const el = this.uploadPreview.current
    this.croppieInstance = new Croppie(el, {
      viewport: {
        width: 200,
        height: 200,
        type: 'square'
      },
      boundary: {
        width: 300,
        height: 300
      },
      enableOrientation: true,
      enableExif: true
    })
    this.croppieInstance.bind({
      url: '/assets/images/avatars/avatar-1.png'
    });
  }

  validate() {
    if(this.pwd.current.value !== this.pwd2.current.value) {
      try{
        this.pwd2.current.fail("โปรดยืนยันรหัสผ่านให้ถูกต้อง")
      } catch (e) {
        console.error(e)
      }
      return false
    }
    return true
  }

  readImageFile() {
    const input = this.uploadInput.current
    var that = this
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(event) {
        that.croppieInstance.bind( {
          url: event.target.result,
        });

        that.setState({isEditingProfilePhoto: true})

      };

      reader.readAsDataURL(input.files[0]);
    }/* else {
      alert('Sorry - you\'re browser doesn\'t support the FileReader API');
    }*/
  }

  loginFb() {
    window.FB.login(function(response) {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken
        Api.post('/authen/fb', { accessToken })
          .then(response =>
            {
              const user = response.data.data
              Auth.checkLogin()
              //   Me.subject.next(user)
            }
          );

      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  checkEmail(e) {
    Api.post('/register/checkemail', {email:this.email.current.value}).then((res) => {
      if(res.data.data.exists === false) {
        this.nextButton.current.click()
      } else {
        this.email.current.fail("อีเมลนี้ถูกใช้งานแล้ว")
      }

    }).catch((error) => {
      console.error(error)
    })
    e.preventDefault()
  }

  register(event) {
    const email = this.email.current.value
    const password =this.pwd.current.value
    const krubId =this.krubId.current.value
    const loginAccount = {email, password}
    const user = {krubId}

    Api.post('/register', {loginAccount, user}).then(() => {
      this.nextButton.current.click()
      // location.href = '/explore'
    }).catch((error) => {
      this.krubId.current.fail(error.response.data.error.message)
    })
    event.preventDefault()
  }



  render() {
    return <div className="bg-forgot wrapper" style={{backgroundImage:'url(https://i.imgur.com/QOqce2G.png)'}}>
      <div className="authentication-forgot d-flex align-items-center justify-content-center">
        <div className="card shadow-lg forgot-box">
          <div className="card-body p-md-5">
            <h4 className="font-weight-bold">มาเป็นติวเตอร์กันเถอะ</h4>
            <p className="text-muted">มาร่วมเป็นส่วนหนึ่งกับเรา!</p>


            <div id="carouselExampleSlidesOnly" className="carousel slide" data-interval="false" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">


                  <button id="submit-login-btn" type="button" className="btn btn-white btn-lg btn-block" href="#carouselExampleSlidesOnly" data-slide="next">
                    <i className="bx bx-envelope "></i>  ลงทะเบียนด้วยอีเมล
                  </button>
                  <button id="submit-login-btn" type="button" className="btn btn-white btn-lg btn-block">
                    <img src="/public/assets/images/logos/logo-f.png" width="32" height="32"/> ลงทะเบียนด้วย Facebook
                  </button>
                  <button id="submit-login-btn" type="button" className="btn btn-white btn-lg btn-block">
                    <img src="/public/assets/images/logos/logo-G.png" width="32" height="32"/> ลงทะเบียนด้วย Google
                  </button>
                </div>
                <div className="carousel-item">

                  <Form validate={this.validate} onSubmit={e => this.checkEmail(e)}>

                    <div className="form-group">
                      <label>อีเมล</label>
                      <Input ref={this.email} id="email" type="email" className="form-control form-control-lg" placeholder="example@gmail.com"
                             required invalidmessage="โปรดกรอกอีเมลให้ถูกต้อง"/>

                    </div>
                    <div className="form-group mt-2">
                      <label>รหัสผ่าน</label>

                      <Input ref={this.pwd} id="pwd" type="password" className="form-control form-control-lg" placeholder="" required invalidmessage="กรุณากรอกรหัสผ่าน"/>

                    </div>
                    <div className="form-group mt-2">
                      <label>ยืนยันรหัสผ่าน</label>
                      <Input ref={this.pwd2} id="pwd2" type="password" className="form-control form-control-lg" placeholder="" required invalidmessage="กรุณากรอกยืนยันรหัสผ่าน"/>
                    </div>
                    <button id="submit-login-btn" type="submit" className="btn btn-primary btn-lg btn-block">ลงทะเบียน
                    </button>
                    <a ref={this.nextButton} href="#carouselExampleSlidesOnly" data-slide="next" className="btn btn-link btn-lg btn-block d-nonex" >test next</a>
                  </Form>
                </div>
                <div className="carousel-item">

                  <KrubIdForm onComplete={(krubId) => {
                    this.krubId = krubId
                    this.nextButton.current.click()
                  }}/>
                </div>
                <div className="carousel-item">
                  <div  className={this.state.isEditingProfilePhoto?'d-none':''}>
                    <div className="border-primary radius-30 p-5 text-center" style={{borderStyle:'dashed',borderWidth:'5px'}}>

                      <a className="btn btn-link btn-lg btn-block d-nonex" onClick={e => this.uploadInput.current.click()}>
                        <i className="bx bx-image bx-md"></i><br/>
                        อัพโหลดรูปโปรไฟล์
                      </a>
                      <input type="file" ref={this.uploadInput} id="upload-input" accept="image/*" className="d-none"
                             onChange={this.readImageFile} required/>


                    </div>
                  </div>
                  <div className={this.state.isEditingProfilePhoto?'':'d-none'}>
                    <div ref={this.uploadPreview} id="upload-preview" style={{height: '350px'}}></div>

                    <div className="pb-3 text-center" style={{lineHeight: '30px'}}>
                      <a onClick={e => this.croppieInstance.rotate(-90)}
                         className="btn btn-outline-primary">หมุนรูป <i
                        className="bx bx-rotate-right"></i></a>   &nbsp;&nbsp;&nbsp;
                      <a onClick={e => this.uploadInput.current.click()}
                         className="btn btn-outline-primary">เลือกรูปใหม่ <i className="bx bx-image"></i></a>
                    </div>
                    <ButtonSpinner onClick={e => this.uploadImageFile(e)}/>
                  </div>

                  <a ref={this.nextButton} href="#carouselExampleSlidesOnly" data-slide="next" className="btn btn-link btn-lg btn-block d-nonex" >test next</a>

                </div>
                <div className="carousel-item">
                  <TutorSubjectsUpdate onComplete={subjects => {
                    this.tutorSubjects = subjects
                    this.nextButton.current.click()
                  }}/>
                </div>
                <div className="carousel-item">
                  <TutorLevelsUpdate onComplete={levels => {
                    this.tutorLevels = levels
                    this.nextButton.current.click()
                  }}/>
                </div>
                <div className="carousel-item">
                  <TutorPriceUpdate onComplete={price => {
                    this.tutorPrice = price
                    this.nextButton.current.click()
                  }}/>
                </div>
                <div className="carousel-item">

                  <div className="text-center">
                    <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" style={{width: '120px'}}>
                      <g stroke="#007bff" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"
                         stroke-linejoin="round">
                        <path className="circle"
                              d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"/>
                        <path className="tick" d="M6.5 13.5L10 17 l8.808621-8.308621"/>
                      </g>
                    </svg>
                  </div>

                  <a href="/explore" className="btn btn-link btn-lg btn-block" >ฉันเป็นติวเตอร์</a>
                  <a href="/explore" className="btn btn-link btn-lg btn-block" >ฉันเป็นนักเรียน</a>

                </div>
              </div>
            </div>




          </div>

        </div>
      </div>
    </div>

  }
}

function KrubIdForm({onComplete}) {
  const krubId = useRef(null);

  function save() {
    onComplete(krubId.current.value)
  }

  return (
    <Form>
      <div className="form-group">
        <label>กำหนด @KrubID ให้สามารถจำได้ง่าย และสื่อถึงตัวคุณ เพื่อให้สามารถค้นหาเจอได้ง่าย (สามารถเปลี่ยนได้ภายหลัง)</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <Input ref={krubId} type="text" className="form-control form-control-lg" placeholder="เช่น พี่มายด์, พี่แองจี้" aria-label="KrubID"
                 aria-describedby="basic-addon1" required pattern="[A-Za-z0-9ก-ฮ]*" invalidmessage="โปรดกรอกตัวอักษร ภาษาไทย หรืออ ังกฤษ หรือ ตัวเลข0-9"/>
        </div>
      </div>
      <button onClick={save} className="btn btn-primary btn-lg btn-block">ตั้งชื่อ</button>
      <a onClick={onComplete} className="btn btn-link btn-lg btn-block d-nonex" >test next</a>
      {/*</form>*/}
    </Form>
  )
}

function TutorProfileImageUpdate({onComplete}) {

}

function TutorSubjectsUpdate({onComplete}) {

  const checkBoxes = []
  const [buttonDisable, setButtonDisable] = useState(true)

  function onClick() {
    setButtonDisable(checkBoxes.every(cb => !cb.checked))
  }

  function save() {
    const subjects = checkBoxes.filter(ele => ele.checked).map(ele => ele.value)
    onComplete(subjects)
  }

  return (
    <>
      <div className="form-group">
        <label>สอนวิชาอะไร (เลือกได้หลายวิชา)</label><br/>

        {Constant.subjects.map((subject, i) => (
          <CheckBoxBadge ref={ele => checkBoxes[i] = ele} label={subject} onClick={onClick}/>
        ))}

      </div>
      <button onClick={save} className="btn btn-primary btn-lg btn-block" disabled={buttonDisable}>บันทึก
      </button>
      <a onClick={onComplete} className="btn btn-link btn-lg btn-block d-nonex" >test next</a>
    </>
  )
}

function TutorLevelsUpdate ({onComplete}) {

  const checkBoxes = []
  const [buttonDisable, setButtonDisable] = useState(true)

  function onClick() {
    setButtonDisable(checkBoxes.every(cb => !cb.checked))
  }

  function save() {
    const levels = checkBoxes.filter(ele => ele.checked).map(ele => ele.value)
    onComplete(levels)
  }

  return (
    <>
      <div className="form-group">
        <label>สอนชั้นอะไร (เลือกได้หลายชั้น)</label><br/>
        {Constant.schoolLevels.map((level, i) => (
          <CheckBoxBadge ref={ele => checkBoxes[i] = ele} label={level} onClick={e => onClick()}/>
        ))}
      </div>
      <button onClick={save} className="btn btn-primary btn-lg btn-block" disabled={buttonDisable}>บันทึก
      </button>
      <a onClick={onComplete} className="btn btn-link btn-lg btn-block d-nonex" >test next</a>
    </>
  )
}

function TutorPriceUpdate({onComplete}) {

  let price = undefined
  function save() {
    onComplete(price.value)
  }

  return (
    <>

      <div className="form-group">
        <label>ราคาต่อชั่วโมง</label><br/>

        <div className="input-group mb-3" style={{maxWidth:'300px'}}>
          <input ref={ele => price = ele} type="number" className="form-control" placeholder=""
                 aria-label="Recipient's username" aria-describedby="basic-addon2" min="50"/>
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">บาทต่อชั่วโมง</span>
          </div>
        </div>

      </div>
      <button onClick={save} className="btn btn-primary btn-lg btn-block">บันทึก
      </button>
      <a onClick={onComplete} className="btn btn-link btn-lg btn-block d-nonex" >test next</a>
    </>
  )
}

class CheckBoxBadge extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick(e) {
    this.checked = this.checkBox.checked
    this.value = this.checkBox.value
    this.props.onClick(e)
  }
  render() {
    return <div className="form-check form-check-inline border badge badge-pill text py-1 px-2">
      <input ref={ele => this.checkBox= ele} onClick={e => this.onClick(e)} className="form-check-input" type="checkbox" id={this.props.label} value={this.props.label}/>
      <label className="form-check-label" htmlFor="inlineCheckbox3">{this.props.label}</label>
    </div>
  }
}
export default Register;