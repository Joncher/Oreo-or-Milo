import React, {useState} from 'react'
import ImageUploader from 'react-images-upload'
import './App.css';


const UploadComponent = props => (
  <form>
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
)

const App = () => {

  
    const [progress, setProgress] = useState('getUpload')
    const [errorMessage, setErrorMessage] = useState('')
    const url = "oreo-or-milo"

    const onImage = async ( failedImages, successImages) => {

      setProgress('uploading')

      try {
        console.log("successimages", successImages)
      } catch (error) {
        console.log("errorin upload", error)
        setErrorMessage(error.message)
        setProgress('uploadError')
      }
    }

    

const content = () => {
    // eslint-disable-next-line default-case
    switch(progress){
      case 'getUpload' :
        return <UploadComponent onImage={onImage} />
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
