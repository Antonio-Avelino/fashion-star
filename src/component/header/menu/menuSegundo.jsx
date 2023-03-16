"use client"

import {ListaMenu1,ListaMenu1B}  from "./lista/menulista1"
import { Menu2Style,StyledLInk,StyledSubMenuLInk } from "./style/menuSegundoStyle"
import { ListaMenu2 } from "./lista/menulista2"

import {BsFillAlarmFill} from "react-icons/bs"
import {RiShoppingCartLine} from "react-icons/ri"
import {BiHeart,BiChevronDown,BiMenu,BiZoomOut} from "react-icons/bi"
// import {Img} from 'next/Img'

import Link from 'next/link'
import Carrinho from "./carrinho"

import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const MenuSegundo = ()=>{

    

    return (

        <Menu2Style>
            
            <div className="lista1" >
               
               <div className="logo" >
                <div className="logo-circulo" >
                    
                </div>
               <span className='logo-principal' >
                .Star</span> 
                
               </div>
                 
            <ul className="lado-esquerdo" >
            
              {
            
            ListaMenu2.map(dados=>{

                              
                     
                return (
                  <>
                    <li key={dados.nome} >

                        <StyledLInk href='/' >
                     
                               {dados.nome} 
{dados.subMenu? <BiChevronDown></BiChevronDown>:null}
          
          {dados.subMenu? 
          <div className="containerSubMenuOrigin" >
            <div className="containerSubMenu" >
            
            <div className="containerSubMenuNoBody" >
               
            {dados.subMenu?.map((subMenus)=>{
   
   return (<>
   <div className="conteudoSubMenu" >
   <b>{subMenus.titlo}</b>
   {subMenus.nome.map((dados)=>{
   
    //    return (<>
    //        <div className="paraGrafo" >
         
    //         <Link href='/ma' className="paragrfoSubMenu" >
          
    //             {dados.nome}
    //         </Link>
    //        </div>
    //    </>)
   })} 
   </div>
   </>)
   })} 
   

{   dados.imagem?<div className="imagemSubmenu" >
   
   <img className="imagem" src={dados.imagem} alt="" />

 

   </div>:null}
   
   
   
   </div>      
   
   </div>
   </div>
          :null}


                        </StyledLInk>
                                           </li>
                                           </>

                )
            })

                }                   
                   

                   
                </ul>
            </div>
           

<div className="lista2Completa" >
             <div className="lista2" >
                <ul className="lado-direito">
 
 <li  key={22} className="carrinho" >

    
<span className="kwanza1" >
    <span className="contador favorito" >
0
    </span>
    <BiHeart>
    
    </BiHeart>

</span>
 </li>
 
 <li className="carrinho cestoCarrinho" key={23}>



<span className="kwanza1" >
    <span className="contador" >
0
    </span>
<RiShoppingCartLine>

</RiShoppingCartLine>

</span>
<span className="kwanza" >
    
Kz00.00   
</span>
 </li>
                </ul>

</div> 
{/* <Carrinho/>  */}

{/* <div className="carrinhoCard" >

</div> */}

</div>
        </Menu2Style>
    )

}


export default MenuSegundo