"use client"
import styled from "styled-components"


const BannerPrincipalCStyle = styled.div`

${console.log(theme=>theme.theme)}
    width:${theme=>theme.theme.larguraContainerCenter}%;
    height: 45vh;
    background: ${theme=>theme.theme.color.paraTeste};
   
    /* width: 100%;
    height: 400px;
    background: red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
      /* @media (max-width:${theme=>theme.theme.mediaqueryTamanho}px){ 

width:${theme=>theme.theme.larguraMobile}%; 
  } */

`

{/*<BannerPrincipalC>  

<h1>parte1.1</h1> <h1>parte1.2</h1>

*/}</BannerPrincipalC> 
    {/* <ThemeProvider theme = {Theme} > */}
{/* <BannerPrincipalC>  

<h1>parte1.1</h1> <h1>parte1.2</h1>

</BannerPrincipalC> */}
{/* 
<BannerMarcaC>

 </BannerMarcaC> */}
 {/* <RowBodyCenterC propriedade={{background:'blue'}} >
    <ColumNoCenter propriedade={{background:'red'}} >
        <h1>parte1 -texto</h1>
        
            <RowBodyNoCenterC propriedade={{background:'blue'}} >
            <h1>parte1.1</h1> <h1>parte1.2</h1>
            </RowBodyNoCenterC>
        
    </ColumNoCenter>

</RowBodyCenterC>   */}
 {/* </ThemeProvider> */}


export default BannerPrincipalCStyle