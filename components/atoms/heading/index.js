import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const El = ({ tag, children, className }) => {
  const Component = tag
  return <Component className={className}>{children}</Component>
}

El.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.node.isRequired,
}

El.defaultProps = {
  className: "",
  tag: "h3",
}

const headingFontSizes = {
  tnx: "0.8571rem",
  tn: "1rem",
  sm: "1.143rem",
  rg: "1rem",
  md: "1.286rem",
  lg: "2.286rem",
  lgx: "3.571rem",
}

const headingLineHeights = {
  tnx: "1.5",
  tn: "1.5",
  sm: "1.5",
  rg: "1.5",
  md: "1.5",
  lg: "1.5",
  lgx: "1.5",
}

const headingFontWeight = {
  normal: "400",
  bold: "600",
}

export const Heading = styled(El)`
  color: ${(props) => props.color};
  font-family: var(--font-heading);
  font-size: ${(props) => headingFontSizes[props.size]};
  font-weight: ${(props) => headingFontWeight[props.weight]};
  line-height: ${(props) => headingLineHeights[props.size]};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
`

Heading.propTypes = {
  align: PropTypes.oneOf(["left", "right", "center"]),
  color: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["tnx", "tn", "sm", "rg", "md", "lg", "lgx"]),
  weight: PropTypes.oneOf(["normal", "bold"]),
}

Heading.defaultProps = {
  align: "left",
  color: "var(--bw85)",
  margin: "0",
  padding: "0",
  size: "rg",
  weight: "normal",
}
