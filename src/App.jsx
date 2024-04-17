import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [frase, setFrase] = useState('null');
  const getFrase = async () => {
    
  
  const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    params: {
      language_code: 'es'
    },
    headers: {
      'X-RapidAPI-Key': '75f1a782afmsh018ec0dc00359a7p171ae0jsn0f386a250157',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
  };
  try{
   const response = await axios.request(options.url, options);
   setFrase(response.data);
  }catch(error){
    console.error(error);
  }
}

  return (
    <>
    <div className='w-full h-full bg-[url("../public/fondo.jpg")] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center'>
     
    <div className="bg-white shadow-md rounded-md p-6 max-w-sm mx-auto text-center">
      <div className="flex items-center justify-center mb-6">
        <svg
          className="h-12 w-12 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21H3a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v14a2 2 0 01-2 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m-3 0v10"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold mb-4">Frases de Personas Importantes</h2>
      <div className="text-gray-700">
        <p className="mb-2">
        {
          frase.originator && (
          <p className="text-black font-semibold">"{frase.content}"<br /> <br /> {frase.originator.name}</p>
          )
        }
        </p>
        <br></br>
        <p className="mb-2">
        {
      frase.originator && (
       <a href={frase.originator.url}>{frase.originator.url}</a> 
      )
    }
        </p>
      </div>
    </div>
    <button onClick={getFrase} class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
  Obten Tu Frase
</button>
  </div>
 
    </>
  )
} 

export default App
