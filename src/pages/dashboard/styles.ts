import styled from 'styled-components'

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

export const ImageText = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
    font-family: 'Parisienne', initial;
    font-size: min(7vw, 90px);
    color: #fff;
`


export const SectionInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: #dceef5;
    align-items: center;
    justify-content: space-between;
`

export const SectionInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: fit-content;
    background-color: #dceef5;
    align-items: center;
    justify-content: center;
`

export const SectinInfoTextSmall = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
    font-family: 'Inter', monospace;
    font-size:  min(4vw, 24px);
    color: #222;
    line-height: 30px;
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: -1px;
`

export const SectinInfoTextBigDate = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
    font-family: 'Inter', monospace;
    font-size:  min(6vw, 70px);
    word-spacing: -20px;
    color: #222;
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
`

export const SectinInfoTextBigWelcome = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
    font-family: 'Inter', monospace;
    font-size:  min(6vw, 40px);
    color: #222;
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
`


export const LastSection = styled.div`
    width: 100%;
    height: 100px;
    background-color: #fff;
`