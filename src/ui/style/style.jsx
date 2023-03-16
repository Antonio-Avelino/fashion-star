"use client"

import styled from "styled-components"


export const ColumStyle = styled.div`

  width:${theme=>theme.theme.larguraContainerCenter}%;
    background: ${theme=>theme.theme.color.paraTeste};
    display: flex;
    flex-direction: column;
    margin-top: ${({propriedade})=>propriedade.margin}%;
   

`
export const ProdutoOneRowStyle = styled.div`

    width:${theme=>theme.theme.larguraContainerCenter}%;
    background: ${theme=>theme.theme.color.paraTeste};
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    

`

  
export const RowSimplesStyle = styled.div`

width:${theme=>theme.theme.larguraContainerCenter}%;

background:${theme=>theme.theme.color.paraTeste};
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;

/* margin-top: ${({propriedade})=>propriedade.margin}%; */
${({propriedade})=>propriedade}
`
export const RowSimplesFiloStyle = styled.div`

width:100%;
display: flex;
flex-direction: row;
/* margin-top: ${({propriedade})=>propriedade.margin}%; */
 ${({propriedade})=>propriedade}
`

//novo todos ----
export const RowBodyCenterStyele = styled.div`

  width:100%;
  /* background:${theme=>theme.theme.color.paraTeste2}; */
  ${({propriedade})=>propriedade}
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`
export const RowBodyNoCenterStyle = styled.div`


  width:100%;
  /* background: ${theme=>theme.theme.color.paraTeste}; */
  ${({propriedade})=>propriedade}
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;


`


export const RowCenterStyle = styled.div`


  width:${theme=>theme.theme.larguraContainerCenter}%;
  /* background: ${theme=>theme.theme.color.paraTeste}; */
  ${({propriedade})=>propriedade}
  display: flex;
  
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width:${theme=>theme.theme.mediaqueryTamanho}px){ 

width:${theme=>theme.theme.larguraMobile}%; 
  }
  

`

export const RowNoCenterStyle = styled.div`


  width:${theme=>theme.theme.larguraContainerCenter}%;
  /* background: ${theme=>theme.theme.color.paraTeste}; */
  ${({propriedade})=>propriedade}
  display: flex;
  
  flex-wrap: wrap;
  @media (max-width:${theme=>theme.theme.mediaqueryTamanho}px){ 

width:${theme=>theme.theme.larguraMobile}%; 

  }

`


export const RowBetwenStyle = styled.div`


  width:${theme=>theme.theme.larguraContainerCenter}%;
  /* background: ${theme=>theme.theme.color.paraTeste}; */
  ${({propriedade})=>propriedade}
   display: flex;
   
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width:${theme=>theme.theme.mediaqueryTamanho}px){ 

width:${theme=>theme.theme.larguraMobile}%; 

}

`
// colum
export const ColumCenterStyle = styled.div`


width:${theme=>theme.theme.larguraContainerCenter}%;
${({propriedade})=>propriedade}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`

export const ColumNoCenterStyle = styled.div`


width:${theme=>theme.theme.larguraContainerCenter}%;
${({propriedade})=>propriedade}
display: flex;
flex-direction: column;


`
export const ColumBodyNoCenterStyle = styled.div`


width:100%;
${({propriedade})=>propriedade}
display: flex;
flex-direction: column;


`