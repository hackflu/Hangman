import type React from "react"
import "./Box.css"

type BoxProp = {
  value: string
  sendToParent: (letter: string) => void
  isDisabled: boolean
}

function Box({ value, sendToParent, isDisabled }: BoxProp) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) return
    sendToParent(value)
  }

  return (
    <div 
      className="box" 
      onClick={handleClick}
      style={{
        pointerEvents: isDisabled ? 'none' : 'auto',
        opacity: isDisabled ? 0.6 : 1,
      }}
    >
      {value}
    </div>
  );
}
export default Box;