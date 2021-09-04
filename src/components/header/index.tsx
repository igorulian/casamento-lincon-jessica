import React, { useState } from 'react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer, HeaderTitle, HeaderTitleContainer } from './styles'

const Header:React.FC = () =>{
    const [selected, setSelected] = useState(true)

    function goToList(){
        setSelected(false)
    }
    function goToHome(){
        setSelected(true)
    }

    return (
        <HeaderContainer>
            <HeaderTitleContainer> 
                <HeaderTitle> L </HeaderTitle> 
                <HeaderTitle style={{color: '#9a9a9a', marginRight: '5px', marginLeft: '5px'}}> {'&'} </HeaderTitle> 
                <HeaderTitle> J </HeaderTitle>   
            </HeaderTitleContainer>

            <HeaderButtonsContainer>
                <HeaderButton selected={selected} onClick={() => goToHome()}> BEM-VINDOS! </HeaderButton>
                <HeaderButton selected={!selected} onClick={() => goToList()}> LISTA DE PRESENTES </HeaderButton>
            </HeaderButtonsContainer>
        </HeaderContainer>
    )
}

export default Header