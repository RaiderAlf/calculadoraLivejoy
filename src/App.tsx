//DEPENDENCIES
import { useState } from 'react'
import './App.css'

type ButtonProps = {
  value: string;
  onClick: (value: string) => void;
};

const Button: React.FC<ButtonProps> = ({ value, onClick }) => (
  <button className="display-led text-white transition-all bg-gradient-to-b mx-2 from-purple-500 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-xl px-5 py-2.5 text-center border-purple-600 me-2 mb-2 border hover:[box-shadow:inset_0_0_5px_rgb(0_0_0_/_70%)] [box-shadow:_0_0_5px_rgb(0_0_0_/_70%)]" onClick={() => onClick(value)}>{value}</button>
);

const App: React.FC = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value: string) => {
    if (value === '=') {
      try {
        setDisplay('$ ' + (parseFloat(display) / 768).toFixed(2).toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'Del') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className='flex flex-col gap-4 bg-pink-200/40 p-8 rounded-2xl [box-shadow:_0_0_15px_rgb(0_0_0_)] backdrop-filter backdrop-blur-sm'>
      <div >
        <input disabled className="display-led backdrop-filter text-white backdrop-blur-xl text-center w-full h-full bg-black/70 text-blue-gray-700 font-medium outline outline-0 focus:outline-0 transition-all border focus:border-2 border-t text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 border-purple-500 [box-shadow:inset_0_0_5px_rgb(0_0_0_/_70%)]" placeholder='CANTIDAD DE MONEDAS' type="text" value={display} />
      </div>
      <div>
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
          {['0', '='].map((value) => (
            <Button key={value} value={value} onClick={handleClick} />
          ))}
          <Button value="Del" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};


export default App
