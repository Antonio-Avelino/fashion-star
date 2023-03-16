
import BannerPrincipalC from '../ui/banner/bannerPrincipalC'
import BannerMarcaC from '../ui/banner/bannerMarcasC'
import { RowBodyCenterC,RowBodyNoCenterC,RowCenterC,RowBetwenC,RowNoCenterC} from '../ui/rowContainer'
import { ColumCenter,ColumNoCenter,ColumBodyNoCenter } from '../ui/columContainer'


// import {ThemeProvider} from 'styled-components'
// import Theme from '../theme/theme'

export default function Home (){

  return (
    <>
    <BannerPrincipalC>

    <h1> ola munod </h1>
<h1> ola munod </h1>
    </BannerPrincipalC>
    <BannerMarcaC>

    </BannerMarcaC>

    <RowBodyCenterC propriedade={{background:'none'}} >
    <ColumNoCenter  propriedade={{background:'blue'}} >
        <h1>parte1 -texto</h1>
        
            <RowBodyNoCenterC propriedade={{background:'blue'}} >
            <h1>parte1.1</h1> <h1>parte1.2</h1>
            </RowBodyNoCenterC>
        
    </ColumNoCenter>

</RowBodyCenterC>  

<RowBodyCenterC>
<RowNoCenterC>
            <h1>parteTexto</h1> 
            </RowNoCenterC>
            </RowBodyCenterC>
            
<RowBodyCenterC>
            
            
          <RowBetwenC propriedade={{background:'blue'}} >
          <h1>card</h1> <h1>card</h1> <h1>card</h1>    
                          
                      </RowBetwenC>
  </RowBodyCenterC>
  
<RowBodyCenterC>
            
            
            <RowBetwenC propriedade={{background:'red' ,'margin-top':'1%'}}  >
                                <h1>card</h1>  <h1>card2 </h1> 
        
  
                        </RowBetwenC>
    </RowBodyCenterC>
    <RowBodyCenterC  >
            
            
            <RowBetwenC  propriedade={{background:'blue','margin-top':'1%'}} >
                                <h1>card</h1>  <h1>card2 </h1>  <h1>card2 </h1> 
        
  
                        </RowBetwenC>
    </RowBodyCenterC>


    {/* barra de pequisa */}
    
      <RowBodyCenterC propriedade={{background:'red','margin-top':'1%'}} >

            <RowBetwenC propriedade={{background:'blue'}} >
                    <h1>parte1</h1>   <h1>parte2</h1>
             </RowBetwenC>

        </RowBodyCenterC>

    </>
  )
}