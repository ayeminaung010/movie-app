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
            backgroundColor: "#111827",
            textColor: "#fff",
            pathColor: percentage > 70 ? "#22c55e ": "#fbbf24",
            trailColor: "transparent"
        })}
        />
    </div>
  )
}

export default ProgressBar