import styled from "styled-components"
import PropTypes from "prop-types"

export const Layout = ({ children }) => (
  <LayoutContainer>{children}</LayoutContainer>
)

Layout.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.string,
}

Layout.defaultProps = {
  children: null,
}

const LayoutContainer = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
`
