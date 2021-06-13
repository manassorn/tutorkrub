import React from "react";
import Api from '../../../Api'
import Me from '../../../Me'
import SimpleTitle from '../../common/SimpleTitle'
import Croppie from 'croppie'
import "croppie/croppie.css"

class ProfileEditAvatar extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        avatar: 'selectFile' //previewImage
      }
      this.uploadInput = React.createRef()
      this.uploadPreview = React.createRef()
      this.readImageFile = this.readImageFile.bind(this)
      this.uploadImageFile = this.uploadImageFile.bind(this)
    }

    componentDidMount() {
      window.addEventListener('hashchange', e => this.onHashChange)
      Api.get('/user/me')
        .then(response => 
        {
        this.setState({ user: response.data.data })
        }
        );
      
      const el = this.uploadPreview.current
      this.croppieInstance = new Croppie(el, {
        viewport: {
          width: 200,
          height: 200,
          type: 'square'
        },
        boundary: {
          width: 300,
          height: 300
        },
        enableOrientation: true,
        enableExif: true
      })
      this.croppieInstance.bind({
        url: '/assets/images/avatars/avatar-1.png'
      });
    }
    
    readImageFile() {
      const input = this.uploadInput.current
      var that = this
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(event) {
          
          that.croppieInstance.bind( {
            url: event.target.result
          });
          
          const img = new Image()
          img.src = event.target.result
          img.onload = ()=>{
            console.log('w',img.naturalWidth)
          }
          
          that.setState({avatar:'previewImage'})
          
        };
      
        reader.readAsDataURL(input.files[0]);
      } else {
        alert('Sorry - you\'re browser doesn\'t support the FileReader API');
      }
    }
    
    uploadImageFile() {
      var id = Me.userId()
      /*
      this.croppieInstance.result('blob', 'original','png',1).then(function(blob) {
        var formData = new FormData()
        formData.append('file', blob)
        Api.post(`/upload/to/user/${id}/avatarUrl`, formData).then(() => {
          location.href = '/user/edit'
        })
      })
      */
      this.croppieInstance.result({
          type: "blob",
          size: "original",
          format: "png",
          quality: 1
        }).then(function(blob) {
        //canvas.toBlob((blob) => {
          var formData = new FormData()
          formData.append('file', blob)
          Api.post(`/upload/to/Users/${id}/avatarUrl`, formData).then(() => {
            location.href = '/user/edit'
          })
        //}, 'image/png',1)
        
      })
      
    }
    
    render() {
      return      <div class="container" style={{maxWidth:'720px'}}>
      
      <SimpleTitle title="อัพโหลดรูป"/>
      
      <div class="pt-3"> 
      
      <div className={this.state.avatar == 'selectFile'? '' :'d-none'}>
      <div id="upload-boundary" style={{border:'dashed 3px #ccc',maxWidth:'500px'}} class="text-center mb-3 p-5 bg-light">
        <h3>
          <a href="javascript:;" onClick={e => this.uploadInput.current.click()}>คลิกที่นี่</a><br/>
<small class="text-muted">เพื่ออัพโหลดรูป</small><br/>
<i class="bx bx-upload"></i>
        </h3>
        <input type="file" ref={this.uploadInput} id="upload-input" accept="image/*" class="d-none" onChange={this.readImageFile} required/>

      </div>
      </div>
      

       <div id="upload-edit" className={this.state.avatar == 'previewImage'? '' :'d-nonex'}>
        <div ref={this.uploadPreview} id="upload-preview" style={{height:'350px'}}></div>

        <div class="p-3 text-center" style={{lineHeight:'30px'}}>
         <a href="#" onClick={e => this.croppieInstance.rotate(-90)} className="btn btn-outline-primary">หมุนรูป <i className="bx bx-rotate-right"></i></a>   &nbsp;&nbsp;&nbsp;
         <a href="#" onClick={e => this.uploadInput.current.click()} className="btn btn-outline-primary">เลือกรูปใหม่ <i className="bx bx-folder-open"></i></a>
        </div>
        <button id="submit-btn" class="btn btn-primary btn-block" onClick={this.uploadImageFile}>บันทึก</button>
       </div>

       
      </div>
     </div> 

    }
}
export default ProfileEditAvatar