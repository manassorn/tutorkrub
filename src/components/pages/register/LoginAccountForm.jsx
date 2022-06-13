import React, {useRef} from "react";
import Api from "../../../Api";
import {Form, Input} from "../../common/FormValidation2";

function LoginAccountForm({onComplete}) {
  const pwd = useRef(null)
  const pwd2 = useRef(null)
  const email = useRef(null)

  function validate() {
    if(pwd.current.value !== pwd2.current.value) {
      pwd2.current.fail("โปรดยืนยันรหัสผ่านให้ถูกต้อง")
      return false
    }
    return true
  }

  function checkEmail(e) {
    Api.post('/register/checkemail', {email: email.current.value}).then((res) => {
      if(res.data.data.exists === false) {
        onComplete({
          email: email.current.value,
          pwd: pwd.current.value
        })
      } else {
        email.current.fail("อีเมลนี้ถูกใช้งานแล้ว")
      }
    }).catch((error) => {
      console.error(error)
    })
    e.preventDefault()
  }

  return (
    <Form validate={validate} onSubmit={e => checkEmail(e)}>

      <div className="form-group">
        <label>อีเมล</label>
        <Input ref={email} id="email" type="email" className="form-control form-control-lg" placeholder="example@gmail.com"
               required invalidmessage="โปรดกรอกอีเมลให้ถูกต้อง"/>

      </div>
      <div className="form-group mt-2">
        <label>รหัสผ่าน</label>

        <Input ref={pwd} id="pwd" type="password" className="form-control form-control-lg" placeholder="" required invalidmessage="กรุณากรอกรหัสผ่าน"/>

      </div>
      <div className="form-group mt-2">
        <label>ยืนยันรหัสผ่าน</label>
        <Input ref={pwd2} id="pwd2" type="password" className="form-control form-control-lg" placeholder="" required invalidmessage="กรุณากรอกยืนยันรหัสผ่าน"/>
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block">ลงทะเบียน</button>
    </Form>
  )
}

export default LoginAccountForm