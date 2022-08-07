import React from "react";
import Api from '../../../Api'

function CourseEditModal(props) {

  return (
    <div className="modal fade" id={props.id || 'courseEditModal'}  tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="course-name" className="col-form-label">ชื่อคอร์ส:</label>
                <input type="text" className="form-control" id="course-name"/>
                <small id="ืcourseNameHelp" className="form-text text-muted">เช่น ภาษาอังกฤษ ม.1 - ม.6</small>
              </div>
              <div className="form-group">
                <label htmlFor="course-price" className="col-form-label">ราคาต่อชั่วโมง:</label>
                <input type="text" className="form-control" id="course-price"/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">ปิด</button>
            <button type="button" className="btn btn-primary">บันทึก</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CourseEditModal