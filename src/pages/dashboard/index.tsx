import React from 'react'
import Header from '../../components/header'
import { Image, Page, SectionInfo, ImageContainer, ImageText, ImageTextContainer, ImageTextImg, SectinInfoTextSmall, SectinInfoTextBig } from './styles'
import image1 from '../../assets/lincuejesca.png'
import jeltxt from '../../assets/jeltxt.png'

const Dashboard:React.FC = () =>{
  return (
    <Page>
      <Header/>
        <ImageContainer>
          <ImageTextImg src={jeltxt}/>

          <Image src={image1}/>
        </ImageContainer>
      <SectionInfo>
        <SectinInfoTextSmall> vamos casar! </SectinInfoTextSmall>
        <SectinInfoTextBig> 19 MARÇO 2022</SectinInfoTextBig>
        <SectinInfoTextSmall> Borborema - SP </SectinInfoTextSmall>
      </SectionInfo>
    </Page>
  );
}

export default Dashboard;
