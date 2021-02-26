'use strict';

const e = React.createElement;

class CourseCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    componentDidMount() {

    }

    render() {
        const card = <div class="col-6 col-md-3">
            <div class="card" style={{'box-shadow':'none'}}>
                <img class="card-img-top rounded rounded-lg" src="assets/images/avatars/avatar-1.png" alt="Card image cap"/>
                <div class="card-body p-0">
                    <p class="card-text">
                        <a href="course.html" className="stretched-link text-dark">รับสอนคณิตศาสตร์</a><br/>
                        ราคา <b>฿100/ชั่วโมง</b>
                    </p>
                </div>
            </div>
        </div> ;
        const cards = [card, card, card, card]
        return cards
    }
}

const domContainer = document.querySelector('#course-cards');
ReactDOM.render(e(CourseCards), domContainer);