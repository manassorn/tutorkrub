import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Api from '../../../Api'
import CalendarCarousel2 from "../../common/CalendarCarousel2";

function Tutor() {
  let { tutorId } = useParams();
  const [tutor, setTutor] = useState(null)

  useEffect(() => {
    Api.get(`/search?tutorid=${tutorId}`).then(response => {
      setTutor(response.data.data[0])
    }).catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-12 col-lg-8 col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="media">
                <div className="text-center">
                  <img src={tutor?tutor.avatarUrl:' '} style={{maxWidth:'100px'}} className="m3 rounded-circle p-1 border" alt="..."/>
                  <br/>
                  <span className="badge badge-pill badge-success mt-3">ใหม่</span>
                </div>
                <div className="media-body pl-3">
                  <h5 className="card-title">{tutor?tutor.krubId:' '} </h5>
                  <p className="card-text">
                    <span className="text-muted pr-3">ชั้นเรียน</span>
                    {tutor?tutor.tutorLevels: ' '}
                    <br/>
                    <span className="text-muted pr-3">วิชา</span>
                    {tutor?tutor.tutorSubjects: ' '}
                    <br/>
                    <span className="text-muted pr-3">ราคา</span>
                    {tutor?tutor.tutorPrice: ' '} บาทต่อชั่วโมง
                  </p>
                  <p className="card-text">
                  </p>
                </div>
              </div>
            </div>
            <div className="border-top d-flex">
              <div className="p-2 w-100 text-center border-right" style={{color:'#DADADA'}}>&#9733;&nbsp;&#9733;&nbsp;&#9733;&nbsp;&#9733;&nbsp;&#9733;</div>
              <div className="p-2 w-100 text-center border-right">0 รีวิว</div>
              <div className="p-2 w-100 text-center">0 ชั่วโมง</div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">แนะนำตัว </h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-4">
          <div className="card">
            <div className="card-body">
              <CalendarCarousel2/>

              <a href="#" className="btn btn-primary mt-3 btn-block">นัดหมายเวลา</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Tutor