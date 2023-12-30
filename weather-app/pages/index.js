import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeather = async () =>{
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}
