import React, {useState} from 'react'
import ImageUploader from 'react-images-upload'
import './App.css';


const UploadComponent = props =>{
  <form>
    <label>
      File Upload URL:
      <input id='urlInput' type='text' onChange={props.onUrlChange} value={props.url}></input>
    </label>
    <ImageUploader
      key = "image-uploader"
      withIcon = {true}
      singleImage = {true}
      withPreview = {true}
      label = "Maximum size file: 5MB"
      buttonText = "Choose File Image"
      onChange = {props.onImage}
      imgExtension = {['.jpg', '.png', '.jpng']}
      maxFileSize= {5242880}
    ></ImageUploader>
  </form>
}

const App = () => {

  
    const [progress, setProgress] = useState('getUpload')
    const [url, setImageURL] = useState(undefined)
    const [errorMessage, setErrorMessage] = useState('')

const content = () => {
    // eslint-disable-next-line default-case
    switch(progress){
      case 'getUpload' :
        return <UploadComponent onUrlChange={onUrlChange} onImage={onImage} url={url}/>
      case 'uploading':
        return <h2>Uploading...</h2>
      case 'uploaded':
        return <img source= {url} alt='uploaded'/>
      case 'uploadError':
        return (
          <>
            <div>Error message = {errorMessage}</div>
            <div>Please upload an image</div>
          </>
        )
    }
  }


  return(
    <div className = "App">
       <h1>Upload an Image of Milo and/or Oreo</h1>
       {content()}
    </div>
  )
}

export default App
