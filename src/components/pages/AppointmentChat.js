import React from "react";
import Api from '../../Api'
import Utils from '../../Utils'
import SimpleTitle from '../common/SimpleTitle'
import './Appointment.css'

class Appointment extends React.Component {


    constructor(props) {
      super(props);
      this.appointmentId = this.props.appointmentId
      this.state = {
        messages: [{text:'test'}]
      }
      
      this.textInputRef = React.createRef()
      
      this.sendMessage = this.sendMessage.bind(this)
      this.addChatRight = this.addChatRight.bind(this)
      this.renderChat = this.renderChat.bind(this)
      this.renderChatLeft = this.renderChatLeft.bind(this)
      this.renderChatRight = this.renderChatRight.bind(this)
    }
    
    componentDidMount() {
      Api.get(`/appointment/${this.appointmentId}/message`)
        .then(response => 
        {
          console.log(JSON.stringify(response.data.data))
        
        this.setState({ messages: response.data.data })
        }
        );
    }
    
    sendMessage() {
      const text = this.textInputRef.current.value
      if(text === '') return
      this.addChatRight(text)
      Api.post(`/appointment/${this.appointmentId}/message`, {text})
    }
    
    addChatRight(text, timestamp = new Date) {
      this.setState(prevState => ({
        messages: [...prevState.messages, {text}
]
      }))
    }
    
    renderChat(message) {        

      if(message.direction == 'left') {
        return this.renderChatLeft()
      } else {
        return this.renderChatRight(message)
      }
    }
    
    renderChatLeft() {
      return <div class="chat-content-leftside"> 
         <div class="media"> 
          <img src="/assets/images/avatars/avatar-3.png" width="48" height="48" class="rounded-circle" alt=""/> 
          <div class="media-body ml-2"> 
           <p class="mb-0 chat-time">Harvey, 2:35 PM</p> 
           <p class="chat-left-msg">Hi, harvey where are you now a days?</p> 
          </div> 
         </div> 
        </div>
    }
    
    renderChatRight(message) {
      return <div class="chat-content-rightside"> 
         <div class="media d-flex ml-auto"> 
          <div class="media-body mr-2"> 
           <p class="mb-0 chat-time text-right">you, 2:37 PM</p> 
           <p class="chat-right-msg">{message.text}</p> 
          </div> 
         </div> 
        </div>
    }

    render() {
        return <div className="border-top p-3">
        <h3>ข้อความ</h3>

       <div class="chat-contentx ps ps--active-y"> 
       
        {this.state.messages.map(message => (<>{this.renderChat(message)}</>)
        )}
        
       </div>
       
       
       
       <div>
       <div class="input-group mb-3">
         <input type="text" class="form-control" placeholder="ส่งข้อความ..." aria-label="message" aria-describedby="button-addon2" ref={this.textInputRef}/>
         <div class="input-group-append">
           <button class="btn btn-primary" type="button" id="button-addon2" onClick={this.sendMessage}>
           <i className="bx bx-send text-light"></i>
           </button>
         </div>
       </div>
       
       
       </div>
       
       </div>

    }
}
export default Appointment