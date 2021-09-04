import React, { useState } from 'react'
import Header from '../../components/header'
import Dashboard from '../dashboard'
import List from '../list'
import { Page } from './styles'


const Main:React.FC = () => {
    const [isHome, setIsHome] = useState(true)

    return (
        <Page>
            <Header goToHome={() => {setIsHome(true)}} goToList={() => {setIsHome(false)}}/>
            {isHome ? <Dashboard/> : <List/>}
        </Page>
    )

}

export default Main