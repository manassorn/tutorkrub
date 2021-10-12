import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'

class CheckoutCreditCard extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          course: {},
          selectedDateHour: undefined, 
          qrUri:''
        }
      this.onCalendarChanged = this.onCalendarChanged.bind(this)
      this.createAppointment = this.createAppointment.bind(this)
      this.pay = this.pay.bind(this)
    }
    
    componentDidMount() {
      const {OmiseCard} = window;
      OmiseCard.configure({
        publicKey: 'OMISE_PUBLIC_KEY'
      });

      OmiseCard.configureButton('#checkout-button', {
        amount: 3000,
        currency: 'USD',
        buttonLabel: 'Pay 30 USD'
      });
    }
    
    onCalendarChanged(selectedDateHour){
      this.setState({selectedDateHour})
    }
    
    createAppointment() {
      console.log(this.courseId)
      Api.post(`/appointments/course/${this.courseId}`, {
        startTime: this.state.selectedDateHour,
        length: 1
      })
        .then(response => 
        {
          location.href = '/appointment/list'
        }
        )
    }
    
    createOmiseSource(amount, callback) {
      Omise.setPublicKey('pkey_test_5kscphkh3r2cqs8plug'); 
      Omise.createSource(
        'promptpay', { 
          "amount": amount, 
          "currency": "THB" 
          
        }, function(statusCode, response) {
          console.log(response["id"])
          if(callback) callback(response["id"])
        });
    }
    
    pay() {
      const amount = 2000
      const that = this
      this.createOmiseSource(amount, (sourceId) => {
        Api.post('/omise/charge/promptpay', {sourceId, amount}).then((res) => {
          const qrUri = res.data.data.qrUri
          that.setState({qrUri})
        })
      })
    }
    
    render() {
      return      <div class="container pt-3 border-top" style={{maxWidth:'720px'}}>
      
       <SimpleTitle title='จ่ายผ่านบัตรเครดิต' />
       
       <div>
         <form id="checkoutForm" method="POST" action="/charge">
           <input type="hidden" name="omiseToken" />
           <input type="hidden" name="omiseSource" />
           <button type="submit" id="checkoutButton">Checkout</button>
         </form>

      </div>

     </div>

    }
}

export default CheckoutCreditCard