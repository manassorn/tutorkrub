import React, {useState, useRef, useEffect, forwardRef, useImperativeHandle} from "react";
import Constant from "../../../Constant";
import CheckboxPill from "./CheckboxPill";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Api from "../../../Api"

const ProfileEditTeachingLevelsModal = forwardRef((props, ref) =>  {
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

    const teachLevels = checkboxesRef.current
      .filter(item => item.getChecked())
      .map(item => item.getValue())
    Api.put('/tutors', {teachLevels}).then(response => {
      close()
      props.onChange(teachLevels)
    }).catch(error => {

    })
  }

  return (
    <Modal show={show}  onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>สอนชั้นเรียน</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>สอนชั้นเรียน:</p>
        {Constant.schoolLevels.map((level, i) => (
          <CheckboxPill label={level} defaultChecked={props.levels.indexOf(level) >= 0} ref={el => checkboxesRef.current[i] = el} />
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={save}>บันทึก</Button>
      </Modal.Footer>
    </Modal>
  )
})
export default ProfileEditTeachingLevelsModal