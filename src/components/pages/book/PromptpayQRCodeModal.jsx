import React, {useState, useRef, useEffect, forwardRef, useImperativeHandle} from "react";
import format from 'date-fns/format';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import Api from "../../../Api"

function PromptpayQRCodeModal(props) {

  const [show, setShow] = useState(true)
  const [qrCodeUrl, setQRCodeUrl] = useState(null)

  useEffect(() => {

    const startTime = new Date().getTime()
    Api.post('/omise/promptpay/qrcode', {
      course: props.course.id,
      scheduleDate: format(props.scheduleDateTime, 'yyyy-MM-dd'),
      scheduleHour: props.scheduleDateTime.getHour(),
      amount: props.amount,
      sourceId: response.id,
    }).then(res => {
      const qrCodeUrl = res.data.data.qrCodeUrl
      const img = new Image()
      img.src = qrCodeUrl
      const delay5s = 5000 - (new Date().getTime() - startTime)
      setTimeout(() => {
        setQRCodeUrl(qrCodeUrl)
      }, delay5s)
    })

  }, [])

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>QR Code Promptpay</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="text-center">
          {!qrCodeUrl && (
            <div style={{height: '397px'}} className="d-flex justify-content-center align-items-center">
              <div>
                <Spinner animation="border" role="status" className="m-3" style={{width: '100px', height: '100px'}}>
                  <span className="visually-hidden">&nbsp;</span>
                </Spinner>
                <div>
                  กำลังสร้าง QR Code ...
                </div>
              </div>
            </div>
          )}
          {qrCodeUrl && (
            <img src={qrCodeUrl} width="280" height="397"/>
          )}

        </div>
      </Modal.Body>

      {/*<Modal.Footer>*/}
      {/*  <Button variant="outline-danger" >ลบ</Button>*/}
      {/*  <Button variant="primary">บันทึก</Button>*/}
      {/*</Modal.Footer>*/}
    </Modal>
  )
}
export default PromptpayQRCodeModal