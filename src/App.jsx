import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);

  // numbers and specialChars ka chkbox me bhi useState lenge : true/false values
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  // jo bhi chize change hogi UI me wo state me aayengi..uska state variable banega...directly ui me changes in react app hum nhi kr skte ha..
  // so password that is changing uska bhi state banega
  const [password, setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null)

  // ! functions can be optimized using useCallback like in below
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789"; //means str now= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    if (charactersAllowed) str += "!@#$%^&* ()[]{ } ~`/><\\-+=?|"

    // means str now = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}~`/><\-+=?|"

    for (let i = 0; i < length; i++) {
      let indx = Math.floor(Math.random() * str.length); //this will decide the index at which value is to be kept
      // Random index is selected from str
      pass += str.charAt(indx); //That character is added to pass
    }

    setPassword(pass);
  }, [length, numbersAllowed, charactersAllowed, setPassword])
  // why setPassword written in dependency array: for optimization through memoization ;previous jitni value use ho skti ha wo reh jayengi
  // useCallback ke dependncy array elmnts ke karan passowrd gets changed so we tried to optimize by storing the password in cache

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() // this is just to highlight the selected text for user's comfort
    passwordRef.current?.setSelectionRange(0, 101);//100 values tak hi user can select through copy button
    // ! we don't need to use useCallback everywhere..only where there is dependency use it
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charactersAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white font-bold font-sans text-xl text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-pink-700 hover:bg-green-600 text-white px-3 py-0.5 shrink-0 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <label htmlFor="characterInput">| Numbers</label>
          <input
            type="checkbox"
            name=""
            id="numberInput"
            checked={numbersAllowed}
            onChange={() => {
              // defaultChecked={numbersAllowed} sets the initial checked state of the checkbox based on the value of numbersAllowed when the component is first rendered, but React doesn't control it afterward.
              setNumbersAllowed((prev) => !(prev))
            }} />
          <label htmlFor="characterInput">Characters</label>
          <input
            type="checkbox"
            checked={charactersAllowed}
            id="characterInput"
            onChange={() => {
              setCharactersAllowed((prev) => !prev)
            }}
          />
        </div>

      </div>
    </div>
  )
}

export default App
