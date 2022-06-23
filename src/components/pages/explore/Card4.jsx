import React from "react";
import {Link} from "react-router-dom";

class Card4 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      tutor: {},
      isFavorite: this.props.isFavorite
    }
    this.toggleFavorite = this.toggleFavorite.bind(this)
  }

  componentDidUpdate(prevProps) {
    if(this.state.isFavorite != this.props.isFavorite) {
      this.setState({isFavorite: this.props.isFavorite})
    }
  }

  toggleFavorite(tutorId) {
    this.props.toggleFavorite(tutorId, this.state.isFavorite)
  }

  render() {
    const tutor = this.props.tutor

    return (
      <div className="col-md-6 mb-3">
        <div className="card">
          <div className="card-body">

            <div className="media">
              <div className="text-center">
                <img className="rounded-circle mb-2 p-1 border" src={tutor.avatarUrl} alt="" width="80"/>
                <br/>
                <p className="text-secondary mb-3">ติวเตอร์</p>
              </div>
              <div className="media-body pl-3">
                <h5 className="font-weight-bold mt-2 mb-3">{tutor.krubId}</h5>

                <div>
                  <i className="lni lni-graduation bx-xs mr-1 text-primary" />
                  <span>{tutor.tutorSubjects && tutor.tutorSubjects.join(', ')}</span>
                </div>
                <div>
                  <i className="lni lni-flag-alt bx-xs mr-1 text-primary" />
                  <span>{tutor.tutorLevels && tutor.tutorLevels.join(', ') }</span>

                </div>
                <div>
                  <i className="lni lni-coin bx-xs mr-1 text-primary" />
                  <span>฿{tutor.price || tutor.tutorPrice} / ชั่วโมง</span>

                </div>
                <div className="mt-3">
                  <Link to={`/explore/tutor/${tutor.id}`} className="stretched-link">ดูรายละเอียด</Link>
                </div>

              </div>
              <a href="#" style={{width:'26px'}} className={`heart ${this.state.isFavorite?'active':''}`} onClick={e => this.toggleFavorite(tutor.id)}>&nbsp;
              </a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default Card4