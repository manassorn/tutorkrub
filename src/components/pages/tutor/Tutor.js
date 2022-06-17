import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Api from '../../../Api'

function Tutor() {
  let { tutorId } = useParams();
  console.log(tutorId)
  const [tutor, setTutor] = useState(null)

  useEffect(() => {
    console.log(tutorId)
    // const a = location.href.split('/')
    // const id = a[a.length-1]
    Api.get(`/search?tutorid=${tutorId}`).then(response => {
      setTutor(response.data.data)
    }).catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <div className="container pt-5">
      <div className="col-12 col-lg-4 col-xl-3">
        <div className="card">
          <img src="/public/assets/images/gallery/02.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p> <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Tutor