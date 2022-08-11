import React, {useEffect, useRef, useState} from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import SimpleTitle from '../../common/SimpleTitle'
import CalendarWeekPreview2 from "../../common/CalendarWeekPreview2";
import CourseEditModal from "../../pages/course/CourseEditModal";
import ProfileEditTeachingSubjectsModal from "./ProfileEditTeachingSubjectsModal";
import ProfileEditTeachingLevelsModal from "./ProfileEditTeachingLevelsModal";
import ProfileEditCourseModal from "./ProfileEditCourseModal";
import LevelRangeDisplay from "../../common/LevelRangeDisplay";


function Profile(props) {
  const subjectsEditModal = useRef(null)
  const levelsEditModal = useRef(null)
  const courseEditModal = useRef(null)
  const [tutor, setTutor] = useState(null)
  const [teachSubjects, setTutorSubjects] = useState([])
  const [teachLevels, setTutorLevels] = useState([])
  const [courses, setCourses] = useState([])
  const [editingCourse, setEditingCourse] = useState(null)

  useEffect(() => {
    Api.get('/tutors').then(response => {
      const tutor = response.data.data
      setTutor(tutor)
      setTutorSubjects(tutor.teachSubjects)
      setTutorLevels(tutor.teachLevels)
    });
    Api.get('/courses').then(response => {
      const courses = response.data.data
      setCourses(courses)
    });
  }, [])

  function openModal(ref, e) {
    ref.current.open()
    e.preventDefault()
  }

  function onCourseChange(course) {
    const c = [...courses]
    const coursePos = c.map(item => item.id).indexOf(course.id)
    if(coursePos < 0) {
      c[c.length] = course
    } else {
      c[coursePos] = course
    }
    setCourses(c)
  }

  return (
    <div>
      <div className="row bg-light border-bottom">
        <div className="offset-md-2 col-md-8">
          <div className="media align-items-centerx py-4">
            <div style={{width:'130px',height:'130px'}}>
              <img src={'/public/assets/images/avatars/avatar-default.jpg'} className="rounded-circle shadow" width="130" height="130" alt=""/>
            </div>
            <div className="media-body pl-3">
              <h4 className="mb-0 font-weight-bold">Manassorn</h4>
              <p className="mb-0 text-secondary">@manassorn</p>
            </div>
            <div className={'px-4'}>
              <button className={'btn btn-primary px-5'}>แก้ไขโปรไฟล์</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="media align-items-center radius-10 mt-4 border" style={{backgroundColor:'#8EE9EE'}}>
            <div style={{width:'130px'}}>
              <img src="/public/assets/images/tutor-left.jpg" width="130" className={'radius-10'}/>
            </div>
            <div className="media-body pl-3 pb-3">
              <h4 className="mb-0 font-weight-bold">สนใจเป็นติวเตอร์</h4>
              <p className="mb-0 text-secondary">@manassorn</p>
            </div>
            <div className={'px-4'}>
              <a href="/profile/register-tutor" className="btn btn-primary px-5'">&nbsp;&nbsp;&nbsp;สมัครตอนนี้&nbsp;&nbsp;&nbsp;</a>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="media align-items-center radius-10 mt-4 border text-white" style={{backgroundColor:'#006DB6'}}>
            <div style={{width:'130px'}}>
              <img src="/public/assets/images/share-social.png" width="130" className={'radius-10'}/>
            </div>
            <div className="media-body pl-3 pb-3">
              <h4 className="mb-0 font-weight-bold">แชร์โซเชียล</h4>
              <p className="mb-0">โพสลงโซเชียล ด้วยภาพสวยงาม เพิ่มโอกาสให้คนเห็น</p>
            </div>
            <div className={'px-4'}>
              <button className={'btn btn-warning px-5'}>แชร์ไปยัง Facebook ฟรี</button>
            </div>
          </div>
        </div>
      </div>




      <div className={'container'}>

        <div className="row mt-3">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <h5 className="font-weight-bold mb-0">ข้อมูลการสอน</h5>
                  </div>
                  <div className="dropdown ml-auto">
                    <div className="cursor-pointer text-dark font-24 dropdown-toggle dropdown-toggle-nocaret"
                         data-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded"></i>
                    </div>
                    <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item"
                                                                          href="javaScript:;">Action</a>
                      <a className="dropdown-item" href="javaScript:;">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="javaScript:;">Something else here</a>
                    </div>
                  </div>
                </div>

                <div className="media align-items-center mt-3">
                  <div style={{width:'90px'}}>
                    <p className="text-secondary mb-0">สอนวิชา</p>
                  </div>
                  <div className="media-body">
                    <p className="font-weight-bold mb-0">{teachSubjects.join(', ')}</p>
                  </div>
                  <a href="#" className="btn btn-sm btn-link text-secondary" onClick={e => openModal(subjectsEditModal, e)}>แก้ไข</a>
                </div>
                <hr/>

                <div className="media align-items-center mt-3">
                  <div style={{width:'90px'}}>
                    <p className="text-secondary mb-0">สอนชั้นเรียน</p>
                  </div>
                  <div className="media-body">
                    <p className="font-weight-bold mb-0"><LevelRangeDisplay levels={teachLevels}/></p>
                  </div>
                  <a href="#" className="btn btn-sm btn-link text-secondary" onClick={e => openModal(levelsEditModal, e)}>แก้ไข</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <h5 className="font-weight-bold mb-0">คอร์ส</h5>
                  </div>
                  <button className="btn btn-sm btn-outline-secondary radius-10 ml-auto" onClick={e => {setEditingCourse(null);openModal(courseEditModal, e)}}><i className="bx bx-plus"></i> เพิ่มคอร์ส</button>

                </div>

                <div>
                  {courses.map((course, i) => (
                    <>
                      <div className="media align-items-center mt-3">
                        <div className="media-body">
                          <p className="font-weight-bold mb-0">{course.title}</p>
                          <p className="text-secondary mb-0">{course.price}฿/ชั่วโมง</p>
                        </div>
                        <a href="#" className="btn btn-sm btn-link text-secondary" onClick={e => {setEditingCourse(course);openModal(courseEditModal, e)}}>แก้ไข</a>
                      </div>
                      {i!=courses.length-1 && <hr/>}
                    </>
                  ))}
                </div>
              </div>
            </div>

          </div>
          <div className={'col-md-4'}>
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <h5 className="font-weight-bold mb-0">เวลาที่สะดวกสอน</h5>
                  </div>
                  <a href="/profile/edit/availability" className="btn btn-sm btn-outline-secondary radius-10 ml-auto">แก้ไข</a>
                </div>

                {tutor ? (
                  <div>
                    <CalendarWeekPreview2 availability={tutor.availability}/>
                  </div>
                ) : (
                  <div className="text-center mt-4">
                    <img src="/public/assets/images/calendar-gray.jpg" width="150"/><br/>
                    <span className="text-secondary">ไม่พบตารางสอน</span>
                  </div>
                )}

              </div>
            </div>
          </div>
      </div>
      </div>

      <ProfileEditTeachingSubjectsModal ref={subjectsEditModal} subjects={teachSubjects} onChange={setTutorSubjects}/>
      <ProfileEditTeachingLevelsModal ref={levelsEditModal} levels={teachLevels} onChange={setTutorLevels}/>
      <ProfileEditCourseModal ref={courseEditModal} course={editingCourse} tutor={tutor} onChange={onCourseChange}/>
    </div>
  )
}

export default Profile