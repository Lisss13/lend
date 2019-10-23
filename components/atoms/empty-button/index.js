import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const EmptyButton = ({ type, children, onClick, disabled, title }) => (
  <ButtonStyle type={type} onClick={onClick} disabled={disabled} title={title}>
    {children}
  </ButtonStyle>
)

EmptyButton.propTypes = {
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
}

EmptyButton.defaultProps = {
  type: "button",
  onClick: null,
  disabled: false,
  title: undefined,
}

const ButtonStyle = styled.button`
  background-color: transparent;
  border: solid 1px white;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: var(--font-button);
  font-size: 1.1429rem;
  font-weight: 600;
  justify-content: center;
  line-height: 3.3;
  margin: 1.3rem 0;
  outline: 0;
  padding: 0.5rem 2rem;
  user-select: none;

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    opacity: 0.3;
    cursor: default;
  }
`
