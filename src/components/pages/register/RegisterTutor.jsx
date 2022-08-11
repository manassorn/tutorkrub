import React, {useState, useRef, useEffect} from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import {Link} from "react-router-dom";
import Constant from "../../../Constant";
import ButtonSpinner from "../../common/ButtonSpinner";
import Croppie from "croppie";
import "croppie/croppie.css"
import {isDebugMode} from "../../../Debug";
import CheckBoxBadge from "./CheckBoxBadge";
import LoginAccountForm from "./LoginAccountForm"
import KrubIdForm from "./KrubIdForm";

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.nextButton = React.createRef()
    this.registerTutor = this.registerTutor.bind(this)
  }

  componentDidMount() {

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

  registerTutor() {
    const registerTutorData = {
      email: this.email,
      pwd: this.pwd,
      krubId: this.krubId,
      teachSubjects: this.teachSubjects,
      teachLevels: this.teachLevels,
      tutorPrice: this.tutorPrice
    }

    Api.post('/register/tutor', registerTutorData).then(() => {
      this.nextButton.current.click()
      // location.href = '/explore'
    }).catch((error) => {
      console.error(error)
    })
  }

  render() {
    return <div className="bg-forgot wrapper" style={{backgroundImage:'url(https://i.imgur.com/QOqce2G.png)'}}>
      <div className="authentication-forgot d-flex align-items-center justify-content-center">
        <div className="card shadow-lg forgot-box">
          <div className="card-body p-md-5">
            <h4 className="font-weight-bold">มาเป็นติวเตอร์กันเถอะ</h4>
            <p className="text-muted">ยินดีต้อนรับติวเตอร์คนใหม่! เป็นนักเรียน<Link to="/register">คลิกที่นี่</Link>
              <a ref={this.nextButton} href="#carouselExampleSlidesOnly" data-slide="next" className={isDebugMode?'':'d-none'}>test next</a>
            </p>




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

                  <LoginAccountForm onComplete={({email, pwd}) => {
                    this.email = email
                    this.pwd = pwd
                    this.nextButton.current.click()
                  }}/>
                </div>
                <div className="carousel-item">

                  <KrubIdForm onComplete={krubId => {
                    console.log('krubId',krubId)
                    this.krubId = krubId
                    this.nextButton.current.click()
                  }}/>
                </div>
                <div className="carousel-item">
                  <TutorProfileImageForm onComplete={imageBlob => {
                    this.tutorProfileImageBlob = imageBlob
                    this.nextButton.current.click()
                  }}/>
                </div>
                <div className="carousel-item">
                  <TutorSubjectsForm onComplete={subjects => {
                    this.teachSubjects = subjects
                    this.nextButton.current.click()
                  }}/>
                </div>
                <div className="carousel-item">
                  <TutorLevelsForm onComplete={levels => {
                    this.teachLevels = levels
                    this.nextButton.current.click()
                  }}/>
                </div>
                <div className="carousel-item">
                  <TutorPriceUpdate onComplete={price => {
                    this.tutorPrice = price
                    this.registerTutor()
                    // this.nextButton.current.click()

                    // console.log(this.email,this.pwd)
                    // console.log(this.krubId)
                    // console.log(this.teachSubjects,this.teachLevels,this.tutorPrice)
                    // console.log(this.tutorProfileImageBlob)
                  }}/>
                </div>
                <div className="carousel-item">

                  <div className="text-center">
                    <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" style={{width: '120px'}}>
                      <g stroke="#007bff" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round"
                         strokeLinejoin="round">
                        <path className="circle"
                              d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"/>
                        <path className="tick" d="M6.5 13.5L10 17 l8.808621-8.308621"/>
                      </g>
                    </svg>
                    <h4 className="font-weight-bold mt-4">ยินดีต้อนรับ 🎉</h4>
                    <p className="text-muted">ชื่อของคุณจะปรากฏอยู่ที่หน้าค้นหา <Link to="/explore">ไปดูกันเลย</Link></p>
                  </div>

                </div>
              </div>
            </div>




          </div>

        </div>
      </div>
    </div>

  }
}

function TutorProfileImageForm({onComplete}) {
  const [isEditMode, setEditMode] = useState(false)
  const browseFileInput = useRef(null)
  const imageEditor = useRef(null)
  let croppieInstance = useRef(null)

  useEffect(() => {
    croppieInstance.current = new Croppie(imageEditor.current, {
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
    croppieInstance.current.bind({
      url: '/public/assets/images/avatars/avatar-1.png'
    });
  }, [])

  function onImageFileChange() {
    const input = browseFileInput.current
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function(event) {
        croppieInstance.current.bind({
          url: event.target.result,
        });
        setEditMode(true)
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  function save() {
    croppieInstance.current.result({
      type: "blob",
      size: {width:700},
      format: "png",
      quality: 1
    }).then(function(imageBlob) {
      //canvas.toBlob((blob) => {
      // var formData = new FormData()
      // formData.append('file', blob)
      onComplete(imageBlob)

    })
  }

  return (
    <>
      <div  className={isEditMode?'d-none':''}>
        <div className="border-primary radius-30 p-5 text-center" style={{borderStyle:'dashed',borderWidth:'5px'}}>

          <a className="btn btn-link btn-lg btn-block d-nonex" onClick={e => browseFileInput.current.click()}>
            <i className="bx bx-image bx-md"></i><br/>
            อัพโหลดรูปโปรไฟล์
          </a>
          <input type="file" ref={browseFileInput} id="upload-input" accept="image/*" className="d-none"
                 onChange={onImageFileChange} required/>


        </div>
      </div>
      <div className={isEditMode?'':'d-none'}>
        <div ref={imageEditor} style={{height: '350px'}}></div>

        <div className="pb-3 text-center" style={{lineHeight: '30px'}}>
          <a onClick={e => croppieInstance.rotate(-90)}
             className="btn btn-outline-primary">หมุนรูป <i
            className="bx bx-rotate-right"></i></a>   &nbsp;&nbsp;&nbsp;
          <a onClick={e => browseFileInput.current.click()}
             className="btn btn-outline-primary">เลือกรูปใหม่ <i className="bx bx-image"></i></a>
        </div>
        <button onClick={save} className="btn btn-primary btn-lg btn-block">บันทึก</button>
        {/*<ButtonSpinner  onClick={e => save}/>*/}
      </div>

    </>
  )
}

function TutorSubjectsForm({onComplete}) {

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
          <CheckBoxBadge ref={ele => checkBoxes[i] = ele} label={subject} key={subject} onClick={onClick}/>
        ))}

      </div>
      <button onClick={save} className="btn btn-primary btn-lg btn-block" disabled={buttonDisable}>บันทึก
      </button>
    </>
  )
}

function TutorLevelsForm ({onComplete}) {

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
          <CheckBoxBadge ref={ele => checkBoxes[i] = ele} label={level} key={level} onClick={e => onClick()}/>
        ))}
      </div>
      <button onClick={save} className="btn btn-primary btn-lg btn-block" disabled={buttonDisable}>บันทึก</button>
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
      {/*<button onClick={save} className="btn btn-primary btn-lg btn-block">บันทึก</button>*/}
      <ButtonSpinner onClick={e => save}>บันทึก</ButtonSpinner>
    </>
  )
}

export default Register;