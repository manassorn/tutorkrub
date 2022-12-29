import React from "react"
import "./SeeWhatTutorKrubOffers.scss"

function SeeWhatTutorKrubOffers() {

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="mb-5">สิ่งที่จะได้รับจาก TutorKrub</h2>
      </div>
      <div className="row">
        {[0,2,3].map((i) => (
          <div className="col-4">
            <div className="d-flex flex-column align-items-center">
              <img src={`/public/assets/images/home/offer-${i}.png`} className="px-5" width="80%" alt="..."/>
              <h4 className="mt-3">เรียนตัวต่อตัว</h4>
              <p className="text-muted">ค้นหาติวเตอร์จากทั่วทุกทิศของประเทศไทย ระบบการค้นหาที่ยื่ดหยุ่นช่วยให้นักเรียนสามารถเจอติวเตอร์ที่ตรงใจ ในราคาและเวลาที่เหมาะสม</p>
              <p className="font-weight-bold"><a href="javaScript:;" className="card-link">Another link <i className="bx bx-caret-right"></i> </a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SeeWhatTutorKrubOffers