import styled from "styled-components"
import media from "../../../static/global-styles"
import { i18n, useTranslation } from "../../../i18n"

import { Icon, Text } from "../../atoms"

export const Header = () => {
  const { t } = useTranslation()
  return (
    <HeaderContainer>
      <ContactContainer>
        <ContactIcons>
          <Icon src="static/icons/social/icon-phone.svg" />
          <Text size="md" tag="p">
            {t("header.phone")}
          </Text>
        </ContactIcons>
        <ContactIcons>
          <Icon src="static/icons/social/icon-telegram.svg/" />
          <Text size="md" tag="p">
            {t("header.telegram")}
          </Text>
        </ContactIcons>
      </ContactContainer>
      <LangSwitcher>
        <p onClick={() => i18n.changeLanguage("ru")}>ru</p>
        <p>/</p>
        <p onClick={() => i18n.changeLanguage("en")}>en</p>
      </LangSwitcher>
      <SocialIcons>
        <Icon src="static/icons/social/icon-facebook.svg/" />
        <Icon src="static/icons/social/icon-instagram.svg/" />
        <Icon src="static/icons/social/icon-linkedin.svg/" />
        <Icon src="static/icons/social/icon-twitter.svg/" />
        <Icon src="static/icons/social/icon-vk.svg/" />
      </SocialIcons>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  align-items: center;
  background: var(--main-dark);
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 15%;
  position: relative;
  width: 100vw;

  ${media.lg`
    padding: 0 8%;
  `}
`

const ContactContainer = styled.div`
  display: flex;

  ${media.md`
    display: none;
  `}
`

const ContactIcons = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row nowrap;
  padding-right: 40px;

  & p {
    color: white;
    font-family: var(--font-text);
  }
`

const SocialIcons = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row nowrap;
`

const LangSwitcher = styled.div`
  color: var(--bw40);
  display: flex;
  flex-flow: row nowrap;
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 600;
  position: absolute;
  right: 1.5rem;

  p {
    color: white;
    cursor: pointer;
    display: block;
    font-family: var(--font-text);
    font-size: 1rem;
    margin: 0;
    padding: 0 0.2rem;
  }
  ${media.xs`
    font-size: 0.8rem;
    right: 0.4rem;
    top: 0.2rem;

    p {
      font-size: 0.8rem;
    }
  `}
`
