import { RowBodyCenterStyele,RowBodyNoCenterStyle,RowCenterStyle,RowBetwenStyle,
    RowNoCenterStyle } from "./style/style"




export const RowBodyCenterC =({children,propriedade})=>{



    return (

        <RowBodyCenterStyele propriedade={propriedade}>
            {children}
        </RowBodyCenterStyele>
    )
}
export const RowBodyNoCenterC =({children,propriedade})=>{



    return (

        <RowBodyNoCenterStyle propriedade={propriedade}>
            {children}
        </RowBodyNoCenterStyle>
    )
}

export const RowCenterC =({children,propriedade})=>{



    return (

        <RowCenterStyle  propriedade={propriedade}>
            {children}
        </RowCenterStyle>
    )
}


export const RowNoCenterC =({children,propriedade})=>{



    return (

        <RowNoCenterStyle  propriedade={propriedade}>
            {children}
        </RowNoCenterStyle>
    )
}



export const RowBetwenC =({children,propriedade})=>{



    return (

        <RowBetwenStyle  propriedade={propriedade}>
            {children}
        </RowBetwenStyle>
    )
}