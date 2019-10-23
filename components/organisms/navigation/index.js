import * as React from "react"
import styled from "styled-components"
import media from "../../../static/global-styles"
import Link from "next/link"
import { useTranslation } from "../../../i18n"

import { content } from "./nav-content"

export const Navigation = () => {
  const [activeButton, setActiveButton] = React.useState(1)

  const { t } = useTranslation()
  return (
    <NavigationContainer>
      <LogoContainer>
        <Link href="/">
          <img alt="logo" src="static/icons/logo/logo.jpg" />
        </Link>
      </LogoContainer>
      <NavContainer>
        {content.map((button, index) => (
          <li key={button.id}>
            <Link href={button.link}>
              <Button
                onClick={() => setActiveButton(index + 1)}
                current={activeButton === button.id}
              >
                {t(button.label)}
              </Button>
            </Link>
          </li>
        ))}
      </NavContainer>
    </NavigationContainer>
  )
}
const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15%;
  justify-content: flex-end;
  position: relative;

  ${media.lg`
    padding: 0 8%;
  `}

  ${media.md`
    padding: 0 8%;
  `}
`

const NavContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  z-index: 1;

  ${media.md`
    flex-flow: column nowrap;
    padding-left: 30px;

    & li {
      justify-content: space-between;
    }
  `}
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 15%;

  & img {
    width: 220px;
    height: auto;
  }

  & h1 {
    color: var(--main-dark);
    font-family: var(--font-heading);
  }

  ${media.lg`
    top: 60px;
    left: 5%;

    & img {
      width: 150px;
      height: auto;
    }
  `}

  ${media.md`
    top: 0;
    left: 0;
    position: relative;

    & img {
      width: 100%;
      height: auto;
    }
  `}
`

const Button = styled.button`
  background-color: ${(p) => (p.current ? "var(--main-red)" : "transparent")};
  border: none;
  color: ${(p) => (p.current ? "white" : "var(--main-dark)")};
  cursor: pointer;
  display: flex;
  width: 100%;
  font-family: var(--font-button);
  font-size: 1.1429rem;
  font-weight: 600;
  justify-content: center;
  line-height: 3.3;
  outline: 0;
  padding: 0rem 2rem;
  user-select: none;
  white-space: nowrap;

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    opacity: 0.3;
    cursor: default;
  }
`
