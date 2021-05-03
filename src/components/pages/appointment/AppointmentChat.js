import React from "react";
import {toDate} from 'date-fns-tz'
import {formatDistance} from 'date-fns'
import {th} from 'date-fns/locale'
import Api from '../../../Api'
import Me from '../../../Me'
import Utils from '../../../Utils'
import SimpleTitle from '../../common/SimpleTitle'
import HeaderIcon from '../../common/HeaderIcon'
import './Appointment.css'

class Appointment extends React.Component {


    constructor(props) {
      super(props);
      this.appointmentId = this.props.appointmentId
      this.state = {
        messages: []
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
          
        let messages = response.data.data
        messages.sort((a,b) => {
          if (a.timestamp < b.timestamp) {
            return -1
          } else if(a.timestamp > b.timestamp) {
            return 1
          } else {
            return 0
          }
        })
        this.setState({ messages })
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

      if(message.from === Me.userId()) {
        return this.renderChatRight(message)

      } else {
        return this.renderChatLeft(message)

      }
    }
    
    renderChatLeft(message) {
      return <div class="chat-content-leftside"> 
         <div class="media"> 
          <img src={message.fromAvatarUrl} width="48" height="48" class="rounded-circle" alt=""/> 
          <div class="media-body ml-2"> 
           <p class="mb-0 chat-time"> {formatDistance(toDate(message.timestamp), new Date(), {addSuffix:true,locale:th})}</p> 
           <p class="chat-left-msg">{message.text}</p> 
          </div> 
         </div> 
        </div>
    }
    
    renderChatRight(message) {
      return <div class="chat-content-rightside"> 
         <div class="media d-flex ml-auto"> 
          <div class="media-body mr-2"> 
           <p class="mb-0 chat-time text-right">คุณ, 
           {formatDistance(toDate(message.timestamp), new Date(), {addSuffix:true,locale:th})}</p> 
           <p class="chat-right-msg">{message.text}</p> 
          </div> 
         </div> 
        </div>
    }

    render() {
        return <div className="border-top p-3">
        
        <HeaderIcon text="ข้อความ"/>
        
        <h3>ข้อความ</h3>
        
        <div className="">
        <img src="/assets/images/icons/chat.svg" />
        </div>

       <div class="d-none chat-contentx ps ps--active-y"> 
       
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