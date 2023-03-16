import { CarrinhoStyle } from "./style/carrinhoStyle"
import { useState } from "react"


 const Carrinho = ()=>{

    var [nome,setnome] =useState('ola munod')

    // const setnomes =(ma)=>{

    //    setnome(ma)
    // }


    return (
        <CarrinhoStyle onClick ={()=>setnome("clicadosss")} >
       
        </CarrinhoStyle>
    )
}
export default Carrinho