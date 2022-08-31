import type { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import {add, subtract, addWithValue} from "../store/slices/counterSlice"
import { RootState } from '../store'
import { ChangeEvent, useState } from 'react'

const Home: NextPage = () => {

  const count = useSelector((state:RootState) => state.counter.value)
  const dispatch = useDispatch()
  const [input, setInput] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setInput(e.target.value);
    e.target.value && dispatch(addWithValue(parseInt(e.target.value)))
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div>Counter value is: {count}</div>

        <input onChange={(e) => handleChange(e)} value={input} type="number" placeholder='enter value' className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />

        <button onClick={() => dispatch(add())} className='w-full h-10 bg-green-400/50 mb-2 mt-2'>Add</button>
        <button onClick={() => dispatch(subtract())} className='w-full h-10 bg-red-400/50 mb-2'>Subtract</button>
      </main>

    </div>
  )
}

export default Home
