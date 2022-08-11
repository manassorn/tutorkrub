import React from "react";
import Api from '../../../Api'
import Constant from '../../../Constant'
import SimpleTitle from '../../common/SimpleTitle'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import './Explore.scss'

class Explore extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        tutors: [],
        favTutors: []
      }
      this.isFavorite = this.isFavorite.bind(this)
      this.toggleFavorite = this.toggleFavorite.bind(this)
    }

    componentDidMount() {
      Api.get('/search/tutors')
        .then(response => 
        {
        var tutors = response.data.data
        this.setState({ tutors })
        }
        );
      
      Api.get('/favorites').then(response => {
        const favTutors = response.data.data.tutors || []
        this.setState({favTutors})
      })
    }
    
    isFavorite(tutorId) {
      return this.state.favTutors.indexOf(tutorId) >= 0
    }

    toggleFavorite(tutorId, currentFlag) {
      if(currentFlag) {
        this.setState({favTutors: this.state.favTutors.filter(t => t != tutorId)})
        Api.delete('/favorites/tutors/' + tutorId).then(response => {
          console.log('delete ok')
        })
      } else {
        this.setState({favTutors: [...this.state.favTutors,tutorId]})
        Api.put('/favorites/tutors/' + tutorId).then(response => {
          console.log('put ok')
        })
      }
    }

    render() {
      return  (
        <div>
          <div className="container">
            <div className=" border-bottom pb-0 pt-3">

            <div className="row">
              <div className="col-6 col-sm-3 btn-group-round mb-3">
                <select className="form-control form-control-md bg-light" id="exampleFormControlSelect1">
                  <option>เลือกชั้นเรียน</option>
                  {Constant.schoolLevels.map(label => (
                    <option key={label}>{label}</option>
                  ))}
                </select>
              </div>

              <div className="col-6 col-sm-3 btn-group-round mb-3">
                <select className="form-control form-control-md bg-light" id="exampleFormControlSelect1">
                  <option>เลือกวิชา</option>
                  {Constant.subjects.map(label => (
                    <option key={label}>{label}</option>
                  ))}
                </select>
              </div>

            </div>


           </div>

            <div className="my-4">
            {/*  <h1>คณิตศาสตร์</h1>*/}
            </div>
            <div id="course-cards" className="row">

            {this.state.tutors.map(tutor => (
              <Card4 key={tutor.id} tutor={tutor} isFavorite={this.isFavorite(tutor.id)} toggleFavorite={this.toggleFavorite}/>

            ))}




            </div>



            <div className="row">
             <div className="col-sm-12 col-md-6 offset-md-3">
              {/*<button className="btn btn-block btn-outline-primary">next</button>*/}
             </div>
            </div>
           </div>

        </div>
      )
    }
}
export default Explore