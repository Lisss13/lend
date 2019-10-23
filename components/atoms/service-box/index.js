import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const ServiceBox = ({ children, colored }) => {
  const color = colored ? "var(--main-red)" : "transparent"
  return (
    <ServiceBoxContainer style={{ background: color }}>
      {children}
    </ServiceBoxContainer>
  )
}

ServiceBox.propTypes = {
  children: PropTypes.node,
  colored: PropTypes.bool,
}

ServiceBox.defaultProps = {
  children: null,
  colored: false,
}

const ServiceBoxContainer = styled.div`
  align-items: center;
  border: solid 1px var(--main-red);
  display: flex;
  flex-flow: column nowrap;
  outline: 0;
  padding: 0rem 2rem;
  padding: 10%;
  width: 100%;

  & i {
    height: 50px;
    width: 50px;
  }
`
