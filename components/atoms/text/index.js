import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const El = ({ tag, children, className }) => {
  const Component = tag
  return <Component className={className}>{children}</Component>
}

El.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(["span", "div", "p"]),
  children: PropTypes.node.isRequired,
}

El.defaultProps = {
  className: "",
  tag: "div",
}

const textFontSizes = {
  tn: "0.7143rem",
  sm: "0.8571rem",
  rg: "1rem",
  md: "1.143rem",
  lg: "1.286rem",
}

const textLineHeights = {
  tn: "1.5",
  sm: "1.5",
  rg: "1.36",
  md: "1.4",
  lg: "1.5",
}

export const Text = styled(El)`
  font-family: var(--font-text);
  font-size: ${(props) => textFontSizes[props.size]};
  line-height: ${(props) => textLineHeights[props.size]};
  margin: 0;
  padding-top: 0;
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
`

Text.propTypes = {
  align: PropTypes.oneOf(["left", "right", "center"]),
  padding: PropTypes.string,
  size: PropTypes.oneOf(["tn", "sm", "rg", "md", "lg"]),
}

Text.defaultProps = {
  align: "left",
  padding: "0 0 0 0",
  size: "rg",
}
