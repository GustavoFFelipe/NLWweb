import * as Dialog  from "@radix-ui/react-dialog";
import * as CheckBox  from "@radix-ui/react-checkbox";
import * as ToggleGroup  from "@radix-ui/react-toggle-group";
import { Check, GameController } from "phosphor-react";
import { Input } from "./Input";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

interface Game{
    id: string;
    title: string;
    bannerUrl: string;
  }
export function CreateAdModal(){

{/*Usando o useEffect e useState para consumir a api do backend via fetch*/}
const [games, setGames] = useState<Game[]>([]);{/* usando um generict para consumir a interface do ts*/}
const [weekDays, setWeekDays] = useState<string[]>([]);
const [useVoiceChannel, setUseVoiceChannel] = useState(false);

useEffect(() =>{
  axios('http://localhost:3333/games').then(response => {
    setGames(response.data);
  })})

  async function handleCreateAd(event: FormEvent){
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data =  Object.fromEntries(formData);
    if(!data.name){
      return;
    }
    try{
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
          name: data.name,
          yearsPlaying: Number(data.yearsPlaying),
          discord: data.discord,
          weeksDays:weekDays.map(Number),
          hourStart: data.hourStart,
          hourEnd: data.hourEnd,
          useVoiceChannel: useVoiceChannel,
          
        })
        console.log(data);
        alert('Anúncio criado com sucesso!')
    } catch (err){
      console.log(err);
      alert('Erro ao criar o anúncio!')
    }
  }

    
    return(

 <Dialog.Portal>{/*Abre o modal cobrindo toda a tela*/}
 <Dialog.Overlay className="bg-black/60 inset-0 fixed" />{/*Area com opacidade que cobre toda a tela*/}
 <Dialog.Content className="bg-[#2a2634] fixed text-white py-8 px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
   <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
    <form className='mt-8 flex flex-col gap-4' onSubmit={handleCreateAd}>
       <div className="flex flex-col gap-2 ">
         <label className="font-semibold" htmlFor="game" >Qual o game?</label>
         <select  name='game' id="game"
         className="bg-zinc-900 py-3 px-4 rounded text-sm appearance-none"
         defaultValue=""
         >
        <option value="">Selecione o game que quer jogar</option>
        {games.map(game =>{
            return <option key={game.id} value={game.id}>{game.title}</option>
        })}

         </select>
           
       </div>
       <div className="flex flex-col gap-2 ">
         <label className="font-semibold" htmlFor="name">Seu nome ou nickname</label>
         <Input name='name' id="name" type="text" placeholder='Como te chamam dentro do game' />
       </div>
       <div className="grid grid-cols-2 gap-6">
         <div className="flex flex-col gap-2 ">
           <label className="font-semibold" htmlFor="discord">Qual seu Discord?</label>
           <Input type="text" name='discord' id="discord" placeholder='usuário#0000'/>
         </div>
         <div className="flex flex-col gap-2 ">
           <label className="font-semibold" htmlFor="yearsPlaying">Jogá a quantos anos?</label>
           <Input name='yearsPlaying' id="yearsPlaying" type="number" placeholder='Tudo bem ser 0'/>
         </div>
       </div>
         <div className="flex gap-6">
           <div className="flex flex-col gap-2">
             <label className="font-semibold" htmlFor="weeksDays">Quando costuma Jogar?</label>
              <ToggleGroup.Root 
              className='grid grid-cols-4 gap-2' type='multiple'
              value={weekDays}
              onValueChange={setWeekDays}
              >
                  <ToggleGroup.Item 
                  value="0"
                  title="Domingo"
                  className={`w-8 h-8 rounded ${weekDays.includes('0')? 'bg-violet-500' : " bg-zinc-900"}`}
                  >D</ToggleGroup.Item>
                  <ToggleGroup.Item 
                  value="1"
                  title="Segunda"
                  className={`w-8 h-8 rounded  ${weekDays.includes('1')? 'bg-violet-500' : 'bg-zinc-900'}`}

                  >S</ToggleGroup.Item>
                  <ToggleGroup.Item 
                  value="2"
                  title="Terça"
                  className={`w-8 h-8 rounded  ${weekDays.includes('2')? 'bg-violet-500' : 'bg-zinc-900'}`}

                  >T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                  value="3"
                  title="Quarta"
                  className={`w-8 h-8 rounded  ${weekDays.includes('3')? 'bg-violet-500' : 'bg-zinc-900'}`}

                  >
                    Q</ToggleGroup.Item>
                  <ToggleGroup.Item 
                  value="4"
                  title="Quinta"
                  className={`w-8 h-8 rounded  ${weekDays.includes('4')? 'bg-violet-500' : 'bg-zinc-900'}`}

                  >
                    Q</ToggleGroup.Item>
                  <ToggleGroup.Item 
                  value="5"
                  title="Sexta"
                  className={`w-8 h-8 rounded  ${weekDays.includes('5')? 'bg-violet-500' : 'bg-zinc-900'}`}

                  >S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                  value="6"
                  title="Sabádo"
                  className={`w-8 h-8 rounded  ${weekDays.includes('6')? 'bg-violet-500' : 'bg-zinc-900'}`}

                  >
                    S</ToggleGroup.Item>

                 </ToggleGroup.Root>
           </div>
           <div className="flex flex-col gap-2 flex-1">
             <label className="font-semibold" htmlFor="hourStart">Qual hora do dia?</label>
               <div className="grid grid-cols-2 gap-2">
               <Input type="time" name="hourStart" id="hourStart" placeholder='De' />
               <Input type="time" name="hourEnd"  id="hourEnd" placeholder='Até' />
               </div>
           </div>
         </div>
             <label className="mt-4 flex gap-2 text-sm">
               <CheckBox.Root 
               checked={useVoiceChannel}
               onCheckedChange={(checked) => {
                  if(checked === true) {
                    setUseVoiceChannel(true);
                  }else{
                    setUseVoiceChannel(false);
                  }
                }
              }  
               className="w-6 h-6 p-1 items-center rounded bg-zinc-900">
                <CheckBox.Indicator>
                    <Check className="w-4 h-4 text-emerald-400 p"/>
                </CheckBox.Indicator>
               </CheckBox.Root>
               Costumo me conectar ao chat de voz.
             </label>
             <footer className='mt-4 flex justify-end gap-4'>
               <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                 Cancelar
                 </Dialog.Close > {/**Fecha o Modal */}
               <button 
               type="submit"
               className=" flex items-center gap-3 bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600"
               >
                 <GameController size={24}/>
                 Encontrar duo!
                 </button>
             </footer>
           
         
       
    </form>
 </Dialog.Content>
</Dialog.Portal>
    )
}