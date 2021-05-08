


function init() {
  window.fbAsyncInit = function() {
    setTimeout(()=>{
      
   FB.init({
    xfbml            : true,
    version          : 'v10.0'
   });
    },3000)

  };

  (function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) return;
   js = d.createElement(s); js.id = id;
   js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
   fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

const Fb = {
  init
}

export default Fb