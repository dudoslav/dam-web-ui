import React from 'react'

export default function DownloadItem(props) {
  return (
    <li>
      <details>
        <summary>
          <span>{props.download.name}</span>
          <button>&#x00d7;</button>
          <progress value={props.download.progress} max="100"></progress>
        </summary>
        <div>
          DETAILS
        </div>
      </details>
    </li>
  )
}
