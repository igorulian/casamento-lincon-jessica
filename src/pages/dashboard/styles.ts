import styled from 'styled-components'


export const Page = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: fit-content;
    min-height: 100%;
    background-color: #333;
`

export const ImageContainer = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 100%;
`

export const ImageTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 10;
    justify-content: center;
    align-items: center;
`

export const ImageTextImg = styled.img`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 10;
    justify-content: center;
    align-items: center;
`

export const ImageText = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
    font-family: 'Parisienne', cursive;
    font-size: 80px;
    color: #fff;
`

export const SectionInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
    background-color: #dceef5;
    align-items: center;
    justify-content: center;
`

export const SectinInfoTextSmall = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    color: #222;
    line-height: 30px;
`

export const SectinInfoTextBig = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-size: 60px;
    color: #222;
    margin-top: 40px;
    margin-bottom: 40px;
`