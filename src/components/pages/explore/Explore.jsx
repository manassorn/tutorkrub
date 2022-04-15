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
    }

    componentDidMount() {
      Api.get('/search')
        .then(response => 
        {
        var tutors = response.data.data
        this.setState({ tutors })
        }
        );
      
      Api.get('/favorites').then(response => {
        const favTutors = response.data.data.tutors
        this.setState({favTutors})
      })
    }
    
    isFavorite(tutorId) {
      console.log(tutorId,'aa',this.state.favTutors[0])
      return this.state.favTutors.indexOf(tutorId) >= 0
    }

    render() {
      return  <div style={{background:'#F5F6F9'}}>
      <div class="container">
        <div class=" border-bottom pb-0 pt-3">

        <div className="row">
        <div class="col-6 col-sm-3 btn-group-round mb-3">
          <div class="btn-group d-flex">
            <button type="button" class="btn btn-white">&nbsp;&nbsp;&nbsp;ชั้นเรียน&nbsp;&nbsp;&nbsp;</button>
            <div class="dropdown-menu dropdown-menu-right" ariap-labelledby="dropdownSchoolLevel">

            {Constant.schoolLevels.map(label => (
              <a class="dropdown-item" href="javaScript:;">{label}</a>

            ))}
            </div>
            <button id="dropdownSchoolLevel" type="button" class="btn btn-white dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="sr-only">Toggle Dropdown</span>
            </button>
          </div>
        </div>


              <div class="col-6 col-sm-3 btn-group-round mb-3">

                <div class="btn-group d-flex">

                  <button type="button" class="btn btn-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;วิชา&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                  <div class="dropdown-menu dropdown-menu-right">
            {Constant.subjects.map(label => (
              <a class="dropdown-item" href="javaScript:;">{label}</a>

            ))}
                  </div>
                  <button type="button" class="btn btn-white dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="sr-only">Toggle Dropdown</span>
                  </button>
                </div>
              </div>
        </div>


       </div>

        <div className="my-4">
          <h1>คณิตศาสตร์</h1>
        </div>
        <div id="course-cards" class="row">

        {this.state.tutors.map(tutor => (
          <Card4 tutor={tutor} isFavorite={this.isFavorite(tutor.id)} />

        ))}




        </div>



        <div class="row">
         <div class="col-sm-12 col-md-6 offset-md-3">
          <button class="btn btn-block btn-outline-primary">next</button>
         </div>
        </div>
       </div>

    </div>

    }
}
export default Explore