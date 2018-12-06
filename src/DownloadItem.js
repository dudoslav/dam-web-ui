import React from 'react'

export default function DownloadItem(props) {
  return (
    <li>
      <details>
        <summary>
          <span>{props.download.name}</span>
          <button>&#x00d7;</button>
          <progress value={props.download.current} max={props.download.size}></progress>
        </summary>
        <div>
          {props.download.uri}
        </div>
      </details>
    </li>
  )
}
