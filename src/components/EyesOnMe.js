// Code EyesOnMe Component Here
import React from 'react'

function Focus(){
    console.log("Good!")
}
function Blur(){
    console.log("Hey! Eyes on me!")
}

function EyesOnMe() {
  return (
    <div>
        <button onFocus={Focus} onBlur={Blur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe