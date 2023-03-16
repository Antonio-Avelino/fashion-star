"use client"
import styled from "styled-components"


const BannerMarcaCStyle = styled.div`

    width:${theme=>theme.theme.larguraContainerCenter}%;
    height: 10vh;
    background: ${theme=>theme.theme.color.paraTeste2};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
   @media (max-width:${theme=>theme.theme.mediaqueryTamanho}px){ 

width:${theme=>theme.theme.larguraMobile}%; 
  }
`

export default BannerMarcaCStyle