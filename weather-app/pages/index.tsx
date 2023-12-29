import { useState } from "react"


export default function Home() {

  return (
    <main className="container max-w-2xl h-screen w-full flex justify-center items-center">
      <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-slate-800 rounded-xl">
          <div className="object-cover w-full -hull">

          </div>
          <div className="px-10 py-10">
              <h3 className="text-2xl text-center mb-2">Weather</h3>
              <div className="flex justify-around">
                <input className="mx-6"></input>
                <button className="bg-slate-600">search</button>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
          </div>
      </div>
    </main>
  )
}
