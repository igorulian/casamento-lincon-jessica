import React from 'react'
import { Image, SectionInfo, ImageContainer, ImageText, ImageTextContainer, SectinInfoTextSmall, SectionInfoContainer, SectinInfoTextBigWelcome, SectinInfoTextBigDate } from './styles'
import backgroundiamge from '../../assets/backgroundimage.jpg'
import './text.css'
import Footer from '../../components/footer'

const Dashboard:React.FC = () =>{
  return (
      <>
        <ImageContainer>
          <ImageTextContainer>
            <ImageText className='maintext'> Jessica </ImageText>
            <ImageText className='maintext'> {'&'} </ImageText>
            <ImageText className='maintext'> Lincon </ImageText>
          </ImageTextContainer>

          <Image src={backgroundiamge} loading="lazy"/>
        </ImageContainer>

        <SectionInfoContainer>
          <SectionInfo style={{marginTop: '200px'}}>
            <SectinInfoTextSmall style={{marginTop: '-150px'}}> vamos casar! </SectinInfoTextSmall>
            <SectinInfoTextBigDate> 19 MARÇO 2022</SectinInfoTextBigDate>
            <SectinInfoTextSmall> Dourados, Mato Grosso do Sul </SectinInfoTextSmall>
          </SectionInfo>

          <SectionInfo style={{marginBottom: '100px', marginTop: '200px'}}>
            <SectinInfoTextSmall> Aos queridos e amados Pais, Padrinhos, Familiares e Amigos,</SectinInfoTextSmall>
            <SectinInfoTextBigWelcome> Bem-vindos ao nosso casamento! </SectinInfoTextBigWelcome>
            <SectinInfoTextSmall> Sim, é verdade! A gente vai se casar!!! </SectinInfoTextSmall>
            <SectinInfoTextSmall> E essa foi uma forma carinhosa e divertida que encontramos de trazer nossos amigos e familiares para mais perto de nós, durante todos os preparativos do dia mais importante de nossas vidas: o nosso casamento. Afinal, de nada adiantaria preparar tudo com tanto carinho se não pudéssemos compartilhar com as pessoas que amamos!!! </SectinInfoTextSmall>
            <SectinInfoTextSmall> Estamos muito felizes e queremos compartilhar com vocês essa felicidade. E enquanto o grande dia não chega, aproveite da web e a gente se encontra em breve! Beijos ❤️ </SectinInfoTextSmall>
            <SectinInfoTextSmall> Aqui você vai encontrar nossa lista de presentes, fique à vontade para navegar e dar muita risada com nossos “produtos”!  </SectinInfoTextSmall>
            <SectinInfoTextSmall> Sejam todos bem vindos ao nosso site e à nossa festa, que começa desde os preparativos!!!</SectinInfoTextSmall>
          </SectionInfo>
        
        </SectionInfoContainer>

        <Footer/>
      </>
  );
}

export default Dashboard;
