import React from 'react'
import Carousel from "./Carousel";

function Faq() {

  return (
    <div className="py-5 home-faq" style={{background: '#F5F6F9'}}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="mb-5">คำถามที่พบบ่อย</h2>
        </div>
        <div className="row font-16">
          <div className="col-sm-6">
            <div className="list-group list-group-flushx">
              {[0,1,2,3,4,5].map(() => (
                <a href="#" className="list-group-item list-group-item-action bg-light"><i className="bx bx-help-circle font-20"></i> ฉันจะมั่นใจได้อย่างไรว่าเงินของฉันปลอดภัย</a>
              ))}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="list-group list-group-flushx">
              {[0,1,2,3,4,5].map(() => (
                <a href="#" className="list-group-item list-group-item-action bg-light"><i className="bx bx-help-circle font-20"></i> ฉันจะมั่นใจได้อย่างไรว่าเงินของฉันปลอดภัย</a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Carousel/>
        </div>
      </div>
    </div>
  )
}

export default Faq