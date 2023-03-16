import {ListaMenu1,ListaMenu1B}  from "./lista/menulista1"
import { Menu1Style, StyledLInk } from "./style/menuPrimeiroStyle"
// import StyledLInk from 'next/StyledLInk'

const MenuPrimeiro = ()=>{

    

    return (

        <Menu1Style>
            <div className="lista1" >
            <ul className="lado-esquerdo" >
                {
            
            ListaMenu1.map(dados=>{
                return (
                    <li key={dados.nome} >
                           <StyledLInk href='/mas'>
                        
                        {/* <a > */}
                            {dados.nome}
                            {/* </a> */}
                    </StyledLInk>
                    </li>

                )
            })

                }                   
                   
                </ul>
            </div>
            <div className="lista1" >
                <ul className="lado-direito">
 
                {
            
            ListaMenu1B.map(dados=>{
                return (
 
                    <li key={dados.nome} >
                           <StyledLInk href='/mas'>
                        
                        {/* <a > */}
                            {dados.nome}
                            {/* </a> */}
                    </StyledLInk>
                    </li>

                )
            })

                }
                </ul>

</div>
        
        </Menu1Style>
    )

}


export default MenuPrimeiro