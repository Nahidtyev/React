import React from 'react'
import "./progress.css"
import zxcvbn from 'zxcvbn'


const PasswordStrength = ({password}) => {
    const testResult = zxcvbn(password);
    var num = testResult.score * 100/3;
    
    const progColor = () =>{
      if (num >= 0 && num < 34) {
        return 'red';
      } else if (num >= 34 && num < 67) {
        return 'yellow';
      } else {
        return 'green';
      }
    }

    const progText = () =>{
      if (num <= 0){
        return ''
      } else if(num > 0 && num < 34) {
        return 'Week';
      } else if (num >= 34 && num < 67) {
        return 'So..';
      } else {
        return 'Strong';
      }
    }

    const changeColor = () => ({
      width: `${num}%`,
      background: progColor(),
      height:'7px',
    })


  return (
    <>
    <div className="progress" style={{height:'7px'}}>
        <div className="progress-bar" style={changeColor()}></div>
      </div>
      <p className='text'>{progText()}</p>
    </>
  )
}

export default PasswordStrength