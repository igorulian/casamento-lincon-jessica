import React, { useState } from 'react'
import { ListContainer, ItemsContainer, ItemContainer, ItemImage, ItemBuyButton, ItemNameText, ItemPriceText, ItemQRCode, ClickToCopy, ClickToCopyContainer, ClickToCopyText } from './styles';
import ReactCardFlip from 'react-card-flip'
import {RiFileCopyLine} from 'react-icons/ri'
import { getItems } from '../../data/data'
import {CopyToClipboard} from 'react-copy-to-clipboard'

export interface IITem {
  name: string,
  price: number,
  image: string,
  qrcode: string,
  codpix: string
}

const items:IITem[] = getItems()

interface ItemProps {
  item: IITem
}

const Item:React.FC<ItemProps> = (props) => {
  const {name, price, image, qrcode,codpix} = props.item
  const [isFlipped, setFlipped] = useState(false)
  const [copied, setCopied] = useState(false)

  function copycode() {
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

            <CopyToClipboard text={codpix}>
              <ClickToCopy onClick={() => {copycode()}}> <RiFileCopyLine/> {copied ? 'Código copiado!' : 'Clique aqui'} </ClickToCopy>
            </CopyToClipboard>

            <ClickToCopyText> {copied ? ' ' : 'para copiar o código PIX'} </ClickToCopyText>

          </ClickToCopyContainer>
       </ReactCardFlip>

          <ItemPriceText> {price === 0 ? `??` : `R$${price}`} </ItemPriceText>
        <ItemBuyButton onClick={() => {setFlipped(!isFlipped); removeCopy()}}> COMPRAR </ItemBuyButton>
    </ItemContainer>
  )
}

const List:React.FC = () =>{
  return (
      <ListContainer> 
          <ItemsContainer> 
            {items.map(item => <Item item={item}/>)}
          </ItemsContainer>
      </ListContainer>
  )
}

export default List;
