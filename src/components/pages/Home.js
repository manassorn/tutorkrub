import React from "react";
import HomeGettingStarted from "./HomeGettingStarted";

class Home extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          weekIncrement: 0
        }
        this.daysOfWeek = ['จันทร์',
        'อังคาร',
        'พุธ',
        'พฤหัส',
        'ศุกร์',
        'เสาร์',
        'อาทิตย์']
        var curr = new Date;
        var monday = curr.getDate() - curr.getDay() +1;
        
        this.dates = [0,1,2,3,4,5,6].map(i => new Date(curr.setDate(monday +i)))

        this.nextWeek = this.nextWeek.bind(this)
        this.prevWeek = this.prevWeek.bind(this)
    }

    componentDidMount() {
      /*Api.get('/crud/course')
        .then(response => 
        {
          console.log('courses',response.data.data)
        
        this.setState({ courses: response.data.data })
        }
        );
      */
    }
    
    prevWeek() {
      this.setState({ weekIncrement: this.state.weekIncrement -1 })
    }
    
    nextWeek() {
      this.setState({weekIncrement: this.state.weekIncrement +1})
    }

    render() {
      return <div class="">
        <HomeGettingStarted/>

      
     </div> 

    }
}

export default Home