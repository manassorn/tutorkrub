import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'
import './course/Course.css'

class Pay extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        weekIncrement: 0
      }
      
    }

    componentDidMount() {
      
    }

    render() {
        return      <div class="container pt-3"> 
<form id="payment-form" action="https://sandbox-cdnv3.chillpay.co/Payment/" method="post" role="form" class="form-horizontal"> 
<modernpay:widget id="modernpay-widget-container" data-merchantid="M031222" data-amount="10000" data-orderno="00000001" data-customerid="123456" data-mobileno="0889999999" data-clientip="182.232.163.141" data-routeno="1" data-currency="764" data-description="Test Payment" data-apikey="YKtcaYGPR1FyDon7KXYwCTD1WJv5gk91AfgVGW1C6nrfoIrjNCGBb2LK2yBrUtYr"> 
</modernpay:widget>
<button type="submit" id="btnSubmit" value="Submit" class="btn">Payment</button> 
</form> 
<script async src="https://sandbox-cdnv3.chillpay.co/js/widgets.js?v=1.00" charset="utf-8"></script>
    
     </div> 

    }
}
export default Pay