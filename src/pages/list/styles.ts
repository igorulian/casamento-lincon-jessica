import styled from 'styled-components'


export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #fafafa;
    align-items: center;
`

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    justify-items: center;
    width: 80%;
    @media(max-width: 500px){
        width: 100%;
    }
    padding: 20px;
    z-index: 10;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    height: fit-content;
    transition: height 10s ease-in;
    background-color: #fff;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
`

export const ItemImage = styled.img`
    width: 100%;
    border-radius: 20px;
`

export const ItemNameText = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    color: #ccc;
    text-align: center;
    margin-top: 10px;
`
export const ItemPriceText = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    color: rgb(116,116,116);
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
`

export const ItemBuyButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    border: none;
    width: 100%;
    height: 50px;
    background-color: #1abc9c;
    margin-top: 10px;
    border-radius: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;    
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
`


export const ItemQRCode = styled.img `
    width: 100%;
`

export const ClickToCopyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
`

export const ClickToCopy = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    color: #ccc;
    text-align: center;
    margin-top: 10px;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    width: fit-content;
    cursor: pointer;
`

export const ClickToCopyText = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    color: #ccc;
    text-align: center;
    font-size: 16px;
    width: fit-content;
    cursor: pointer;
`



