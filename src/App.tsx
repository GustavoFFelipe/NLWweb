import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css'
import logoImg from './assets/logo.svg'
import {GameController, MagnifyingGlassPlus} from 'phosphor-react'


import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { Input } from './components/Form/Input';
import { CreateAdModal } from './components/Form/CreateAdModal';
import axios from 'axios';

interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count:{
    ads: number;
  }
}

function App() {

  {/*Usando o useEffect e useState para consumir a api do backend via fetch*/}
  const [games, setGames] = useState<Game[]>([]);{/* usando um generict para consumir a interface do ts*/}
  useEffect(() =>{
    axios('http://localhost:3333/games/').then(response => {
      setGames(response.data);
    })})
    return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black m-20 '>
        Seu <span className="bg-nlwGradiante bg-clip-text text-transparent">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 ">

        {games.map(game => { {/*usando map para retornar cada component de nosso back end */}
          return(
            
            <GameBanner 
            key={game.id}
            bannerUrl={game.bannerUrl} 
            title={game.title}
            adsAcount={game._count.ads}
          />
          
          )
        })}
     


      </div>
        <Dialog.Root> {/*ENgloba toda a reagiao do modal*/}
          <CreateAdBanner />{/**Coponent de criação de banner */}
         <CreateAdModal />
        </Dialog.Root>
    </div>
  )
}

export default App
