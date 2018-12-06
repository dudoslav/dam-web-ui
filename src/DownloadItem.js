import React from 'react'

export default function DownloadItem(props) {
  const handleOnDelete = () => fetch(`/downloads/${props.download.id}`, { method: 'DELETE' })

  return (
    <li>
      <details>
        <summary>
          <span>{props.download.name}</span>
          <button className="delete-button" onClick={handleOnDelete}>&#x00d7;</button>
          <progress value={props.download.current} max={props.download.size}></progress>
        </summary>
        <div className="flex-container">
          <div>URL: {props.download.uri}</div>
          <div>SIZE: {props.download.size}</div>
          <div>LOCATION: {props.download.path}</div>
        </div>
      </details>
    </li>
  )
}
