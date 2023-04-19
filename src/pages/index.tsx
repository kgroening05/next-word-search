import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import CrosswordGrid from '../components/crosswordGrid';
import WordHighlighter from '../components/wordHighlighter'
export default function Home() {
  const [rawPuzzle, setRawPuzzle] = useState('')
  const [rawTargets, setRawTargets] = useState('')

  function handlePuzzleInput(event:any) {
    setRawPuzzle(event.target.value)
  }
  
  function handleTargetInput(event:any) {
    setRawTargets(event.target.value)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Word-Search Solver</h1>
      <h2>Enter your puzzle below</h2>
      <textarea 
        name="rawpuzzle"
        id="rawpuzzle"
        cols={30}
        rows={10}
        value={rawPuzzle}
        onChange={(e) => handlePuzzleInput(e)} 
        placeholder='Enter word-search here'
      />
      <textarea
        name="targets" 
        id="targets"
        cols={30}
        rows={10}
        placeholder='Enter words to find'
        onChange={(e) => handleTargetInput(e)}
      />
      <section>
        {
          rawPuzzle
          ? <CrosswordGrid puzzle={rawPuzzle} />
          : null
        }
      </section>
      <WordHighlighter rawTargets={rawTargets}/>
    </main>
  )
}
