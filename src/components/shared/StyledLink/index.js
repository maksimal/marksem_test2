import React from 'react';
import "./StyledLink.scss"

export default function StyledLink({ linkText, linkURL }) {
  return (
    <div className="styled-link-container">
      <a className="styled-link" href={linkURL}>{linkText}</a>
    </div>

  )
}