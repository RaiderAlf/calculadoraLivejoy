//DEPENDENCIES
import { ChangeEvent, useState } from 'react'
import './App.css'

type ButtonProps = {
  value: string;
  onClick: (value: string) => void;
};

const Button: React.FC<ButtonProps> = ({ value, onClick }) => (
  <button className="display-led h-fit w-fit text-white bg-gradient-to-b mx-2 from-purple-500 to-pink-400 hover:bg-gradient-to-l font-medium rounded-full text-xl px-5 py-2.5 text-center border-purple-600 me-2 mb-2 border hover:[box-shadow:inset_0_0_5px_rgb(0_0_0_/_70%)] [box-shadow:_0_0_5px_rgb(0_0_0_/_70%)]" onClick={() => onClick(value)}>{value}</button>
);

const App: React.FC = () => {
  const [display, setDisplay] = useState('');
  const [meta, setMeta] = useState('')

  const handlerMeta = (e: ChangeEvent<HTMLInputElement>) => {
    setMeta(e.target.value)
  }

  const handlerDelMeta = () => {
    setMeta('')
  }

  const handleClick = (value: string) => {
    if (value === '=') {
      try {
        setDisplay('$ ' + (parseFloat(display) / 0.768).toFixed(2).toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'BORRAR') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className='flex flex-col gap-6 bg-pink-200/40 px-4 py-8 rounded-xl [box-shadow:_0_0_15px_rgb(0_0_0_)] backdrop-filter backdrop-blur-sm'>

      <div >
        <input disabled className="display-led backdrop-filter text-gray-200 backdrop-blur-xl text-center w-full h-full bg-black/70 font-medium outline outline-0 border-2 text-sm px-3 py-3 rounded-[25px] border-purple-500 [box-shadow:inset_0_0_5px_rgb(0_0_0_/_70%)]" placeholder='CANTIDAD DE MONEDAS' type="text" value={display} />
      </div>
      <div className='flex flex-col justify-center items-center gap-1 w-full'>
        <div>
          {['1', '2', '3'].map((value) => (
            <Button key={value} value={value} onClick={handleClick} />
          ))}
        </div>
        <div>
          {['4', '5', '6'].map((value) => (
            <Button key={value} value={value} onClick={handleClick} />
          ))}
        </div>
        <div>
          {['7', '8', '9'].map((value) => (
            <Button key={value} value={value} onClick={handleClick} />
          ))}
        </div>
        <div>
          {['.', '0', '='].map((value) => (
            <Button key={value} value={value} onClick={handleClick} />
          ))}
        </div>
        <Button value="BORRAR" onClick={handleClick} />
        <div>
        </div>
      </div>
      <div>
        <input type="text" onChange={handlerMeta} className="display-led backdrop-filter text-gray-700 backdrop-blur-xl text-center w-full h-full bg-white font-medium outline outline-0 border-2 text-sm px-3 py-3 rounded-[25px] border-red-500 [box-shadow:inset_0_0_5px_rgb(0_0_0_/_70%)]" placeholder='META DE SESION' value={meta} />
        <button className='backdrop-filter text-gray-300 backdrop-blur-xl text-center w-min h-full bg-black/70 font-medium outline outline-0 border-2 text-sm mt-3 px-1.5 py-1 rounded-lg border-red-500 [box-shadow:inset_0_0_5px_rgb(0_0_0_/_70%)]' value='' onClick={handlerDelMeta}>Eliminar meta</button>
      </div>
    </div>
  );
};


export default App
