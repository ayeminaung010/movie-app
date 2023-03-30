import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const ProgressBar = ({percentage}) => {
  return (
    <div>
        <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#3e65c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
        })}
        />
    </div>
  )
}

export default ProgressBar