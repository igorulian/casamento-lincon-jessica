import React, { useState } from 'react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer, HeaderTitle, HeaderTitleContainer } from './styles'


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
                <HeaderTitle> J </HeaderTitle> 
                <HeaderTitle style={{color: '#9a9a9a', marginRight: '5px', marginLeft: '5px'}}> {'&'} </HeaderTitle> 
                <HeaderTitle> L </HeaderTitle>   
            </HeaderTitleContainer>

            <HeaderButtonsContainer>
                <HeaderButton selected={selected} onClick={() => goToHome()}> BEM-VINDOS! </HeaderButton>
                <HeaderButton selected={!selected} onClick={() => goToList()}> LISTA DE PRESENTES </HeaderButton>
            </HeaderButtonsContainer>
        </HeaderContainer>
    )
}

export default Header