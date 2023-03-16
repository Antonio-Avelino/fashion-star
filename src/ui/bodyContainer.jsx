"use client"
import BodyContainerStyle from "./style/bodyContainerStyle"


const BodyContainer = ({children})=>{

    return (
    <BodyContainerStyle>
    
        {children}
    </BodyContainerStyle>
 
    )


}

export default BodyContainer