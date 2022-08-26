import React, {useState, useRef, useEffect, forwardRef, useImperativeHandle} from "react";
import format from 'date-fns/format';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import Api from "../../../Api"

function PromptpayQRCodeModal(props) {

  const [show, setShow] = useState(true)
  const [qrCodeUrl, setQRCodeUrl] = useState(null)
  const [countDown, setCountDown] = useState(0)

  useEffect(() => {
    const payment = props.payment
    console.log(payment)
    if (payment && payment.promptpayQRCodeUrl) {
      showQRCode(payment.promptpayQRCodeUrl)
    } else {
      Api.post('/omise/promptpay/qrcode', {
        paymentId: payment.id
      }).then(res => {
        showQRCode(res.data.data.promptpayQRCodeUrl)
      })
    }

    const intervalId = startCountDown()
    return(() => {
      clearInterval(intervalId)
    })
  }, [])

  function showQRCode(qrCodeUrl) {
    const img = new Image()
    img.src = qrCodeUrl
    // delay for preload image
    setTimeout(() => {
      setQRCodeUrl(qrCodeUrl)
    }, 1000)
  }

  function startCountDown() {
    const intervalId = setInterval(() => {
      setCountDown((countDown) => {
        if(countDown == 0) return 360
        else return  countDown - 1
      })
    }, 1000)
    return intervalId
  }

  function timer(mins) {
    return pad(Math.floor(mins / 60)) + ':' + pad((mins % 60))
  }

  function pad(digit) {
    return ('0' + digit).slice(-2)
  }

  return (
    <Modal show={show} onHide={() => setShow(false)} size="sm">
      <Modal.Header closeButton className="bg-light-primary">
        <Modal.Title>
          <h4 className="mb-0 text-primary">฿100</h4>
        </Modal.Title>
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
            <>
              <img src={qrCodeUrl} width="100%" />
              <p>โปรดใช้โทรศัพท์มือถือสแกนภายใน <span className="text-primary">{timer(countDown)}</span> นาที</p>
            </>
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