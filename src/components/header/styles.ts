import styled from 'styled-components'

interface IButtonProps {
    selected: boolean
}

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 120px;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
`

export const HeaderTitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const HeaderLogo = styled.img`
    width: 5%;
    margin-bottom: 15px;
`

export const HeaderButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: center;
`

export const HeaderButton = styled.button<IButtonProps>`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    border: none;
    background-color: none;
    min-width: 130px;
    height: fit-content;
    margin-bottom: 15px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 3px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #fff;
    ${props => props.selected && 
        `border-bottom: 1px solid #000;`
    }
`