import React from 'react'
import { FooterContent, FooterDate, FooterMadeby, FooterTitle, LastSection, TitleContainer } from './styles'

const Footer:React.FC = () => {

    return (
        <LastSection>
            <FooterContent>
                <TitleContainer>
                    <FooterTitle> Jessica {'&'} Lincon  </FooterTitle>
                    <FooterDate> 19 de Março  </FooterDate>
                </TitleContainer>

                <TitleContainer style={{textAlign: 'center', justifyContent: 'center'}}>
                    <FooterMadeby> Feito com carinho por Igor Ulian</FooterMadeby>
                </TitleContainer>
            </FooterContent>
        </LastSection>
    )

}

export default Footer