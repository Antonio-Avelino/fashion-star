import MenuContanerStyle from "./style/menuConatainerStyle"


const MenuContainer = ({children})=>{

    return (
        <MenuContanerStyle>
        {children}
        </MenuContanerStyle>
    )

}

export default MenuContainer