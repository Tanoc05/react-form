import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {

  const [Articoli,Setarticoli] = useState([]);
  const [Articolo,setArticolo] = useState("");

  const addArticolo= e => {
    e.preventDefault();
    Setarticoli([...Articoli, Articolo]);
    setArticolo("");
  }
  
  return (
    <>
      <form onSubmit={addArticolo} className='flex gap-6 mt-6 justify-center'>
        <input className='border border-slate-300 rounded-sm px-2 py-1' type="text" value={Articolo} placeholder='Articolo' onChange={ e => {setArticolo(e.target.value)}}/>
        <button className='border border-slate-300 rounded-sm px-2 py-1 hover:bg-slate-100 hover:border-slate-500'>addTaks</button>
      </form>

      <div className="flex justify-center mt-4">
        <ul className='flex flex-col w-[150px] border border-slate-300 rounded-sm items-center'>
          {Articoli.map((a,i) => (
            <li key={i}>
              {a}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
