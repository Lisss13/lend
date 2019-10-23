import styled from "styled-components"
import media from "../../../static/global-styles"
import { useTranslation } from "../../../i18n"

import { Text } from "../../atoms"

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <FooterContainer>
      <FooterRow>
        <ImageContainer>
          <img alt="logo" src="static/images/footer/01.jpg" />
          <Text size="lg" tag="p">
            {t("footer.first")}
          </Text>
        </ImageContainer>
        <ImageContainer>
          <img alt="logo" src="static/images/footer/02.jpg" />
          <Text size="lg" tag="p">
            {t("footer.second")}
          </Text>
        </ImageContainer>
        <ImageContainer>
          <img alt="logo" src="static/images/footer/03.jpg" />
          <Text size="lg" tag="p">
            {t("footer.third")}
          </Text>
        </ImageContainer>
        <ImageContainer>
          <img alt="logo" src="static/images/footer/04.jpg" />
          <Text size="lg" tag="p">
            {t("footer.fourth")}
          </Text>
        </ImageContainer>
      </FooterRow>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  align-items: center;
  background-image: url("static/images/pills.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  min-height: 50vh;
  padding: 100px 15%;
  width: 100%;

  & h1 {
    color: var(--main-red);
  }

  & p {
    color: white;
    text-align: center;
  }

  ${media.md`
    margin-top: 40px;
    padding: 100px 8%;
  `}

  ${media.xs`
    padding-top: 4rem;
  `}
`

const FooterRow = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: auto;
  width: 100%;

  ${media.lg`
    grid-template-columns: auto;
  `}
`

const ImageContainer = styled.div`
  background: var(--main-red);
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;

  & img {
    flex: 1;
    object-fit: cover;
    width: 100%;
  }
`
