import styled from "styled-components"
import media from "../../../static/global-styles"
import { useTranslation } from "../../../i18n"

import { Heading, Text } from "../../atoms"

export const AboutProduct = () => {
  const { t } = useTranslation()
  return (
    <ProductContainer>
      <SideContainer>
        <Heading size="lgx" tag="h1">
          {t("aboutProduct.title")}
        </Heading>
        <Text size="lg" tag="p">
          {t("aboutProduct.firstDescription")}
        </Text>
        <Text size="lg" tag="p">
          {t("aboutProduct.secondDescription")}
        </Text>
        <Button> {t("aboutProduct.button")}</Button>
      </SideContainer>
      <SideContainer>
        <img alt="logo" src="static/images/drugs.jpg" />
      </SideContainer>
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr;
  padding: 100px 15% 0 15%;
  width: 100%;

  ${media.lg`
    padding: 100px 8% 0 8%;
    grid-template-columns: auto;
  `}
`

const SideContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;

  & img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  & h1 {
    padding: 0 0 100px 0;
  }

  & p {
    padding: 0 0 50px 0;
  }

  ${media.md`
    & p {
      padding: 0 0 20px 0;
    }

    & h1 {
    padding: 0 0 40px 0;
    font-size: 2.286rem;
   }

  `}

  ${media.lg`
    & img {
      display: none;
    }
  `}
`

const Button = styled.button`
  background-color: var(--main-red);
  border: none;
  width: fit-content;
  color: white;
  cursor: pointer;
  font-family: var(--font-button);
  font-size: 1.1429rem;
  font-weight: 600;
  justify-content: center;
  line-height: 3.3;
  margin: 1.3rem 0;
  outline: 0;
  margin: 0;
  padding: 0rem 2rem;
  user-select: none;

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    opacity: 0.3;
    cursor: default;
  }

  ${media.md`
    margin-top: 20px;
  `}

  ${media.sm`
    width: auto;
  `}
`
