import React, { useState } from 'react'
import { ListContainer, ItemsContainer, ItemContainer, ItemImage, ItemBuyButton, ItemNameText, ItemPriceText, ItemQRCode, ClickToCopy, ClickToCopyContainer, ClickToCopyText } from './styles';
import img1 from '../../assets/1.png'
import qrcode from '../../assets/qrcode.png'
import ReactCardFlip from 'react-card-flip'
import {RiFileCopyLine} from 'react-icons/ri'

interface IITem {
  name: string,
  price: number,
  image: string,
  qrcode: string,
  codpix: string
}

const itens:IITem[] = [
  {name: '01. Rolo de macarrão para a noiva utilizar quando necesário', price: 20, image:img1, qrcode: qrcode, codpix:'dasgda283u282328d'},
  {name: '01. Rolo de macarrão para a noiva utilizar quando necesário', price: 20, image:img1, qrcode: qrcode, codpix:'dasgda283u282328d'},
  {name: '01. Rolo de macarrão para a noiva utilizar quando necesário', price: 20, image:img1, qrcode: qrcode, codpix:'dasgda283u282328d'},
  {name: '01. Rolo de macarrão para a noiva utilizar quando necesário', price: 20, image:img1, qrcode: qrcode, codpix:'dasgda283u282328d'},
  {name: '01. Rolo de macarrão para a noiva utilizar quando necesário', price: 20, image:img1, qrcode: qrcode, codpix:'dasgda283u282328d'},
]

interface ItemProps {
  item: IITem
}

const Item:React.FC<ItemProps> = (props) => {
  const {name, price, image, qrcode,codpix} = props.item
  const [isFlipped, setFlipped] = useState(false)
  const [copied, setCopied] = useState(false)

  function copycode() {
    navigator.clipboard.writeText(codpix)
    setCopied(true)
  }

  async function removeCopy() {
      setTimeout(() => {
        setCopied(false)
      },1000)
  }

  return (
    <ItemContainer>
       <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'> 
          <ItemImage src={image}/> 
          <ItemQRCode src={qrcode}/>  
       </ReactCardFlip>

       <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'> 
          <ItemNameText> {name} </ItemNameText>
          <ClickToCopyContainer>
            <ClickToCopy onClick={() => {copycode()}}> <RiFileCopyLine/> {copied ? 'Código copiado!' : 'Clique aqui'} </ClickToCopy>
            <ClickToCopyText> {copied ? ' ' : 'para copiar o código PIX'} </ClickToCopyText>
          </ClickToCopyContainer>
       </ReactCardFlip>

          <ItemPriceText> R${price} </ItemPriceText>
        <ItemBuyButton onClick={() => {setFlipped(!isFlipped); removeCopy()}}> COMPRAR </ItemBuyButton>
    </ItemContainer>
  )
}

const List:React.FC = () =>{
  return (
      <ListContainer> 
          <ItemsContainer> 
            {itens.map(item => <Item item={item}/>)}
          </ItemsContainer>
      </ListContainer>
  )
}

export default List;
