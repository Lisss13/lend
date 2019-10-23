import styled from "styled-components"
import media from "../../../static/global-styles"
import { useTranslation } from "../../../i18n"

import { Text, Heading, EmptyButton } from "../../atoms"

export const AboutUs = () => {
  const { t } = useTranslation()
  return (
    <AboutContainer>
      <DescriptionContainer>
        <Heading size="lgx" tag="h1">
          {t("aboutUs.title")}
        </Heading>
        <Text size="lg" tag="p">
          {t("aboutUs.description")}
        </Text>
        <Text size="lg" tag="p">
          {t("aboutUs.description")}
        </Text>
        <EmptyButton>
          <Text size="lg" tag="p">
            {t("aboutUs.button")}
          </Text>
        </EmptyButton>
      </DescriptionContainer>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  align-items: center;
  background-image: url("static/images/doctor.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  min-height: 90vh;
  padding: 0 15%;
  width: 100%;

  ${media.lg`
    padding: 0 8%;
  `}

  ${media.md`
    background-position: bottom;
    background-size: contain;
    min-height: auto;
    padding: 20px 8% 100px 8%;
  `}
`

const DescriptionContainer = styled.div`
  height: auto;
  width: 55%;
  max-width: 820px;
  background-color: var(--main-dark);
  opacity: 0.4;
  padding: 1% 2%;

  & h1 {
    color: white;
  }

  & p {
    color: white;
    font-family: var(--font-text);
  }

  ${media.lg`
    width: 70%;
  `}

  ${media.md`
    width: 100%;
  `}
`
