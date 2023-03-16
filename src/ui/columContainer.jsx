import { ColumCenterStyle,ColumNoCenterStyle,ColumBodyNoCenterStyle} from "./style/style"



export const ColumCenter =({children,propriedade})=>{



    return (

        <ColumCenterStyle propriedade={propriedade} >
            {children}
        </ColumCenterStyle>
    )
}



export const ColumNoCenter =({children,propriedade})=>{



    return (

        <ColumNoCenterStyle propriedade={propriedade} >
            {children}
        </ColumNoCenterStyle>
    )
}


export const ColumBodyNoCenter =({children,propriedade})=>{



    return (

        <ColumBodyNoCenterStyle propriedade={propriedade} >
            {children}
        </ColumBodyNoCenterStyle>
    )
}





