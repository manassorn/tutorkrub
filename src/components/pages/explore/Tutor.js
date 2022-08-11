import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Api from '../../../Api'
import CalendarCarousel from "../../common/CalendarCarousel";
import CalendarByWeek3Steps from "../../common/CalendarByWeek3Steps";
import LevelRangeDisplay from "../../common/LevelRangeDisplay";

function Tutor() {
  let { tutorId } = useParams();
  const [tutor, setTutor] = useState(null)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    Api.get(`/search/tutors?id=${tutorId}`).then(response => {
      const tutor = response.data.data[0]
      console.log(tutor.availability)
      setTutor(tutor)
    }).catch(error => {
      console.error(error)
    })
    Api.get(`/courses`).then(response => {
      setCourses(response.data.data)
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
                    <LevelRangeDisplay levels={tutor && tutor.teachLevels || []}/>
                    <br/>
                    <span className="text-muted pr-3">วิชา</span>
                    {tutor && tutor.teachSubjects.join(', ')}
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
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">คอร์ส </h5>
              {courses.map((course, i) => (
                <>
                  <div className="media align-items-center mt-3">
                    <div className="media-body">
                      <p className="font-weight-bold mb-0">{course.title}</p>
                      <p className="text-secondary mb-0">{course.price}฿/ชั่วโมง</p>
                    </div>
                    <a href={'/checkout/course/' + course.id} className="btn btn-sm btn-outline-primary radius-10">นัดหมาย</a>
                  </div>
                  { i < courses.length - 1 && <hr/>}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-4">
          <div className="card">
            <div className="card-body">
              {tutor && <CalendarCarousel availability={tutor && tutor.availability}/>}


              {/*<a href="#" className="btn btn-primary mt-3 btn-block">นัดหมายเวลา</a>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Tutor