import React, {useRef} from "react";
import Api from "../../../Api";
import {Form, Input} from "../../common/FormValidation2";

function KrubIdForm({onComplete}) {
  const krubId = useRef(null);


  function checkKrubId(e) {
    Api.post('/register/checkkrubid', {krubId: krubId.current.value}).then((res) => {
      if(res.data.data.exists === false) {
        onComplete(krubId.current.value)
      } else {
        krubId.current.fail("Krub ID นี้ถูกใช้งานแล้ว")
      }
    }).catch((error) => {
      console.error(error)
    })
    e.preventDefault()
  }

  return (
    <Form onSubmit={e => checkKrubId(e)}>
      <div className="form-group">
        <label>กำหนด @KrubID ให้สามารถจำได้ง่าย และสื่อถึงตัวคุณ เพื่อให้สามารถค้นหาเจอได้ง่าย (สามารถเปลี่ยนได้ภายหลัง)</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <Input ref={krubId} type="text" className="form-control form-control-lg" placeholder="เช่น พี่มายด์, พี่แองจี้" aria-label="KrubID"
                 aria-describedby="basic-addon1" required pattern="[A-Za-z0-9ก-ฮ]*" invalidmessage="โปรดกรอกตัวอักษร ภาษาไทย หรืออ ังกฤษ หรือ ตัวเลข0-9"/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block">ตั้งชื่อ</button>
      {/*</form>*/}
    </Form>
  )
}

export default KrubIdForm