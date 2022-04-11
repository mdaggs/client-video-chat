import React from 'react'

export default function TopBar() {
  function linkClick() {
    window.open('https://github.com/mdaggs', "_blank")
  }

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        Video-Chat
      </div>
      <div className="top-bar-right">
        <button 
            className="github-button"
            onClick={linkClick}
            >
              https://github.com/mdaggs
        </button>
      </div>
      </div>
  )
}