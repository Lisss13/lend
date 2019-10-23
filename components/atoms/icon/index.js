import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const Icon = ({ src, onClick }) => {
  return (
    <IconContainer onClick={onClick}>
      <img alt="icon" src={src} />
    </IconContainer>
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
}

const IconContainer = styled.i`
  align-items: center;
  display: flex;
  grid-area: icon;
  height: 22px;
  justify-content: center;
  margin: 0 8px;
  width: 22px;

  & img {
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
`
