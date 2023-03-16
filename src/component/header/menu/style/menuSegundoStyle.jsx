"use client"

import Link from 'next/link'
import styled from 'styled-components'


export const StyledLInk = styled(Link)`
color: ${theme=>theme.theme.color.textosMenu};
   
text-decoration: none;

`
export const StyledSubMenuLInk = styled(Link)`
   color: ${theme=>theme.theme.color.textosFraco};

text-decoration: none;

` 


export const Menu2Style = styled.nav`

width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 0px;
margin-top: 3%;
margin-bottom: 1%;

.lista1 {
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.lista1 .logo{
    padding: 0px;
    padding-right:6.5em;
    margin: 0px;
    position: relative;


}
.lista1 .logo .logo-circulo{
    width: 1.5em;
    height: 1.5em;
    background: #6c93b3;
    position: absolute;
    border-radius: 1.5em ;
    z-index: -1;
}
.lista1 .logo .logo-principal{
    padding: 0px;
    margin: 0px;
    font-size: 2em;
    font-weight: 800;
    position: relative;
    left:0.3em;
    font-family: 'Poppins';
    
}

.lista1 ul .mas{
    
    color:blue;
    font-size: 27px;
}
.lista1 ul {
    display: flex;
    text-decoration: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin:0px;
    padding: 0px;
    
        

}
.lista1 ul li {
     
    margin: 0px;
    list-style: none;
    font-weight: 700;    
   font-size: 1.1em;

}
.lista1 .lado-esquerdo li {

   color: ${theme=>theme.theme.color.textosMenu};
   padding-right:16px;
   
   
   
}
/* .lista1 .lado-esquerdo li */
.lista2Completa{
    
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    position: relative;

    
}






.lista2 {
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


}
.lista2 ul li {
     
    margin: 0px;
    list-style: none;
    font-weight: 700;    
   font-size: 1.1em;

}
/* fernandaavelino110@gmail.com */
.lista2 ul {
    display: flex;
    text-decoration: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin:0px;
    padding: 0px;
    
        

}
.lista2 .lado-direito li {
    color: ${theme=>theme.theme.color.textosMenu};

margin-left:1em;
   font-weight: 600;
   
       font-size: 1.6em;
}





.lista2 .lado-direito .carrinho .kwanza1{

    margin-right: 0.62em;
    position: relative;
    padding-top: 0.125em;
    padding-right: 0.25em;
}

.lista2 .lado-direito .carrinho  .contador{
    
    width: auto;
    height: auto;
    padding: 4px;
    position: absolute;
    font-size: 8px;
    top: 0;
    right: 0;
    background: #585858;
    color: #ffffff;
    text-align: center;
    border-radius: 100%;
}


.lista2 .lado-direito .carrinho .kwanza{


    font-size: 0.7em;
}


.carrinhoCard{
    
width: 200px;
height: 100px;
background: blue;
position: absolute;
left: 0;
top: 0;
/* display:none; */

}

// parte do submenu
.containerSubMenuOrigin{
    width: 100%;
    height: 30px;
    display: none;
    position: absolute;
    left: 0px;
}
.containerSubMenu{
    display: flex;
    background: #d2e0d9;
    width: 100%;
    position: absolute;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1%;
    z-index: 100;
    box-shadow: rgb(0 0 0 /20%) 0 30px 20px -30px;

}
.lista1 .lado-esquerdo li a:hover  .containerSubMenuOrigin {
    
    display: flex;
}
 .containerSubMenuNoBody{
   
    
    width: ${theme=>theme.theme.larguraContainerCenter}%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /* justify-content: space-between; */
    margin-top: 2%;
   
    
}
.conteudoSubMenu{
    margin-right: 4%;
}
.conteudoSubMenu b{
    font-size:0.87em ;
}
.conteudoSubMenu .paragrfoSubMenu{
    font-size:0.75em ;
text-decoration: none;
 color: ${theme=>theme.theme.color.textosFraco};

}
.conteudoSubMenu .paragrfoSubMenu:hover{
    
    color: ${theme=>theme.theme.color.hoverFraco};
   
}



.imagemSubmenu{
   
    right: 0;
    margin-left: auto;

} 
.imagem{
    
    width: 100%;
    height: 200px;

}
// partes tiradas



`