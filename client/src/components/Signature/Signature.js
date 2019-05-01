import React from 'react'
import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'
 
ReactDOM.render(
  <SignatureCanvas penColor='blue'
    canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />,
  document.getElementById('react-container')
)