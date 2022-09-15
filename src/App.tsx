import './styles/main.css'
import logoImg from './assets/logo.svg'
import {MagnifyingGlassPlus} from 'phosphor-react'
function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black m-20 '>
        Seu <span className="bg-nlwGradiante bg-clip-text text-transparent">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 ">
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-1.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-gameGradiant absolute bottom-0 left-0 right-0">
          <strong className="font-bold block text-white">League of Legends</strong>
          <span className='text-zinc-300 text-sm block mt-1'>4 anúnicios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-2.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-gameGradiant absolute bottom-0 left-0 right-0">
          <strong className="font-bold block text-white">Dota 2</strong>
          <span className='text-zinc-300 text-sm block mt-1'>4 anúnicios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-3.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-gameGradiant absolute bottom-0 left-0 right-0">
          <strong className="font-bold block text-white">Counter Strike</strong>
          <span className='text-zinc-300 text-sm block mt-1'>4 anúnicios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-4.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-gameGradiant absolute bottom-0 left-0 right-0">
          <strong className="font-bold block text-white">Apex Legends</strong>
          <span className='text-zinc-300 text-sm block mt-1'>4 anúnicios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-5.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-gameGradiant absolute bottom-0 left-0 right-0">
          <strong className="font-bold block text-white">Fortnite Legends</strong>
          <span className='text-zinc-300 text-sm block mt-1'>4 anúnicios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-6.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-gameGradiant absolute bottom-0 left-0 right-0">
          <strong className="font-bold block text-white">Word of Warcraft</strong>
          <span className='text-zinc-300 text-sm block mt-1'>4 anúnicios</span>
        </div>
      </a>

      </div>

      <div className="pt-1 bg-nlwGradiante self-stretch  rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div>
          <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
          <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            < MagnifyingGlassPlus size={24} /> 
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
