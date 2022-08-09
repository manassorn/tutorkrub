import React, {useState, useRef, useEffect, forwardRef, useImperativeHandle} from "react";
import Constant from "../../../Constant";
import CheckboxPill from "./CheckboxPill";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Api from "../../../Api"

const ProfileEditCourseModal = forwardRef((props, ref) =>  {
  useImperativeHandle(ref, () => ({
    open() {
      setShow(true)
    }
  }));
  const [show, setShow] = useState(false)
  const titleRef = useRef('');
  const priceRef = useRef('');

  function close() {
    setShow(false)
  }

  function save() {

    if (props.course) {
      const course = {
        id: props.course && props.course.id || '',
        title: titleRef.current.value,
        price: priceRef.current.value
      }
      Api.put(`/courses/${props.course && props.course.id || 'undefined'}`, course).then(response => {
        close()
        props.onChange(course)
      }).catch(error => {

      })
    } else {
      const course = {
        title: titleRef.current.value,
        price: priceRef.current.value
      }
      Api.post(`/courses`, course).then(response => {
        close()
        props.onChange(course)
      }).catch(error => {

      })
    }

  }

  return (
    <Modal show={show}  onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>คอร์ส</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="course-name" className="col-form-label">ชื่อคอร์ส:</label>
            <input type="text" className="form-control" id="course-title" ref={titleRef} defaultValue={props.course && props.course.title}/>
            <small id="ืcourseNameHelp" className="form-text text-muted">เช่น ภาษาอังกฤษ ม.1 - ม.6</small>
          </div>
          <div className="form-group">
            <label htmlFor="course-price" className="col-form-label">ราคาต่อชั่วโมง:</label>
            <input type="text" className="form-control" id="course-price" ref={priceRef} defaultValue={props.course && props.course.price}/>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={save}>ลบ</Button>
        <Button variant="primary" onClick={save}>บันทึก</Button>
      </Modal.Footer>
    </Modal>
  )
})
export default ProfileEditCourseModal