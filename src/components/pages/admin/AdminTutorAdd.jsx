import React, {useState, useRef, useEffect} from "react";
import Api from '../../../Api'
import Constant from "../../../Constant";
import "croppie/croppie.css"
import {isDebugMode} from "../../../Debug";
import CheckBoxBadge from "./CheckBoxBadge";
// import LoginAccountForm from "./LoginAccountForm"
// import KrubIdForm from "./KrubIdForm";

function AdminTutorAdd() {

  let name, fbPostURL;
  const levelCheckBoxes = []
  const subjectCheckBoxes = []

  function addTutor() {
    const tutor = {
      name: name.value,
      fbPostURL: fbPostURL.value,
      teachSubjects: subjectCheckBoxes.filter(ele => ele.checked).map(ele => ele.value),
      teachLevels: levelCheckBoxes.filter(ele => ele.checked).map(ele => ele.value)
    }

    console.log(tutor)

    Api.post('/admin/tutor', tutor).then(() => {
      // this.nextButton.current.click()
      // location.href = '/explore'
      alert('Done!')
    }).catch((error) => {
      console.error(error)
    })
  }

  return (<div className="bg-forgot wrapper" style={{backgroundImage:'url(https://i.imgur.com/QOqce2G.png)'}}>
    <div className="authentication-forgot d-flex align-items-center justify-content-center">
      <div className="card shadow-lg forgot-box">
        <div className="card-body p-md-5">
          <h4 className="font-weight-bold">มาเป็นติวเตอร์กันเถอะ</h4>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input ref={ele => name = ele} type="name" className="form-control" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="fbPostURL">fbPostURL</label>
            <input ref={ele => fbPostURL = ele} type="fbPostURL" className="form-control" id="fbPostURL" />
          </div>

          <div className="form-group">
            <label>สอนชั้นอะไร (เลือกได้หลายชั้น)</label><br/>
            {Constant.schoolLevels.map((level, i) => (
              <CheckBoxBadge ref={ele => levelCheckBoxes[i] = ele} label={level} key={level}/>
            ))}
          </div>

          <div className="form-group">
            <label>สอนวิชาอะไร (เลือกได้หลายวิชา)</label><br/>

            {Constant.subjects.map((subject, i) => (
              <CheckBoxBadge ref={ele => subjectCheckBoxes[i] = ele} label={subject} key={subject}/>
            ))}
          </div>

          <button onClick={addTutor} className="btn btn-primary btn-lg btn-block">บันทึก</button>




        </div>

      </div>
    </div>
  </div>)
}

export default AdminTutorAdd;