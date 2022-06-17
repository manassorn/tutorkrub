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
        <Link to={`/tutor/${tutor.id}`}>
          <div className="border radius-10 p-3 bg-white">
            <div className="d-flex align-items-centerx">
              <div>
                <img className="mr-3 rounded-circle mb-3" src={tutor.avatarUrl} alt="" width="80"/>
              </div>
              <div className="flex-grow-1">
                <h5 className="font-weight-bold mt-2 mb-1">{tutor.krubId}</h5>

                <p className="text-secondary mb-3">ติวเตอร์</p>

              </div>
              <a href="#" style={{width:'26px'}} className={`heart ${this.state.isFavorite?'active':''}`} onClick={e => this.toggleFavorite(tutor.id)}>&nbsp;
              </a>
            </div>
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

          </div>
        </Link>
      </div>
    )
  }
}
export default Card4