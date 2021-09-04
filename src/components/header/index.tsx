import React, { useState } from 'react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer, HeaderLogo, HeaderTitleContainer } from './styles'
import logo from '../../assets/logo.png'

interface IHeader {
    goToHome: Function,
    goToList: Function
}

const Header:React.FC<IHeader> = (props) =>{
    const [selected, setSelected] = useState(true)

    function goToList(){
        setSelected(false)
        props.goToList()
    }
    function goToHome(){
        setSelected(true)
        props.goToHome()
    }

    return (
        <HeaderContainer>
            <HeaderTitleContainer>
                <HeaderLogo src={logo}/>
            </HeaderTitleContainer>

            <HeaderButtonsContainer>
                <HeaderButton selected={selected} onClick={() => goToHome()}> BEM-VINDOS! </HeaderButton>
                <HeaderButton selected={!selected} onClick={() => goToList()}> LISTA DE PRESENTES </HeaderButton>
            </HeaderButtonsContainer>
        </HeaderContainer>
    )
}

export default Header