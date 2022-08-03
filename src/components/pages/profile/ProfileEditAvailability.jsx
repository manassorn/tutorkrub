import React, {useEffect, useState} from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'

import CalendarWeekDesktop from "../../common/CalendarWeekDesktop";

function ProfileEditAvailability(props) {

  const [tutor, setTutor] = useState(null)

  useEffect(() => {
    Api.get('/tutors').then(response => {
      const tutor = response.data.data
      setTutor(tutor)
    });
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <SimpleTitle title="แก้ไขเวลาที่สะดวกสอน" backBtn="/profile"/>
          <br/>
          {tutor && <CalendarWeekDesktop mode="edit" availability={tutor.availability}/>}
        </div>
      </div>
    </div>
  )
}
export default ProfileEditAvailability