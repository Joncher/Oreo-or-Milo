import React, {useState} from 'react'
import './App.css';

const App = () => {

  
    const [progress, setProgress] = useState('getUpload')
    const [url, setImageURL] = useState(undefined)
    const [errorMessage, setErrorMessage] = useState('')
    
const content = () => {
    // eslint-disable-next-line default-case
    switch(progress){
      case 'getUpload' :
        return <div>Please upload an image</div>
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
