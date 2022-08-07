import React, {useState, useRef, useEffect, forwardRef, useImperativeHandle} from "react";
import Constant from "../../../Constant";
import CheckboxPill from "./CheckboxPill";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Api from "../../../Api"

const ProfileEditTeachingSubjectsModal = forwardRef((props, ref) =>  {
  useImperativeHandle(ref, () => ({
    open() {
      setShow(true)
    }
  }));
  const [show, setShow] = useState(false)
  const checkboxesRef = useRef([]);

  function close() {
    setShow(false)
  }

  function save() {

    const tutorSubjects = checkboxesRef.current
      .filter(item => item.getChecked())
      .map(item => item.getValue())
    Api.put('/tutors', {tutorSubjects}).then(response => {
      close()
      props.onChange(tutorSubjects)
    }).catch(error => {

    })
  }

  return (
    <Modal show={show}  onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>สอนวิชา</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>สอนชั้นเรียน:</p>
        {Constant.subjects.map((subject, i) => (
          <CheckboxPill label={subject} defaultChecked={props.subjects.indexOf(subject) >= 0} ref={el => checkboxesRef.current[i] = el} />
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={save}>บันทึก</Button>
      </Modal.Footer>
    </Modal>
  )
})
export default ProfileEditTeachingSubjectsModal