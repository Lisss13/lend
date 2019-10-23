import styled from "styled-components"
import media from "../../../static/global-styles"
import { useTranslation } from "../../../i18n"

import { ServiceBox, Icon, Heading, Text } from "../../atoms"

export const Service = () => {
  const { t } = useTranslation()
  return (
    <ServiceContainer>
      <ServiceBox colored={true}>
        <Icon src="static/icons/service/calendar.svg/" />
        <NormalHeading tag="h2" size="lg" padding="20px 0 0 0">
          {t("service.appointment.title")}
        </NormalHeading>
        <NormalText tag="p" size="md" style={{ color: "white" }}>
          {t("service.appointment.description")}
        </NormalText>
      </ServiceBox>
      <ServiceBox>
        <Icon src="static/icons/service/siren.svg/" />
        <ColoredHeading tag="h2" size="lg" padding="20px 0 0 0">
          {t("service.emergency.title")}
        </ColoredHeading>
        <ColoredHeading tag="h2" size="lg">
          {t("service.emergency.phone")}
        </ColoredHeading>
        <ColoredText tag="p" size="md">
          {t("service.emergency.description")}
        </ColoredText>
      </ServiceBox>
      <ServiceBox colored={true}>
        <Icon src="static/icons/service/hours.svg/" />
        <NormalHeading tag="h2" size="lg" padding="20px 0 0 0">
          {t("service.opening.title")}
        </NormalHeading>
        <NormalText tag="p" size="md" style={{ color: "white" }}>
          {t("service.opening.mon")}
        </NormalText>
        <NormalText tag="p" size="md" style={{ color: "white" }}>
          {t("service.opening.sat")}
        </NormalText>
        <NormalText tag="p" size="md" style={{ color: "white" }}>
          {t("service.opening.sun")}
        </NormalText>
      </ServiceBox>
    </ServiceContainer>
  )
}

const ServiceContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 100px 15% 0 15%;
  width: 100%;

  & h2 {
    text-align: center;
  }

  & p {
    padding-top: 10px;
    text-align: center;
  }

  ${media.lg`
    grid-template-columns: auto;
  `}

  ${media.md`
    padding: 100px 8% 0 8%;
  `}
`

const NormalHeading = styled(Heading)`
  color: white;
`

const ColoredHeading = styled(Heading)`
  color: var(--main-red);
`

const NormalText = styled(Text)`
  color: white;
`

const ColoredText = styled(Text)`
  color: var(--main-red);
`
