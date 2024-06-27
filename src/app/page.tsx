'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  // const [isJumping, setIsJumping] = useState<boolean>(false)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const pipeRef = useRef<HTMLImageElement>(null)
  const marioRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const pipe = pipeRef.current
    const mario = marioRef.current
    const jump = (e: KeyboardEvent) => {
      try {
        if (e.key === ' ') {
          mario?.classList.add('animate-mario-jump')
        }
      } finally {
        setTimeout(() => {
          mario?.classList.remove('animate-mario-jump')
        }, 500)
      }
    }
    document.addEventListener('keydown', jump)

    const loop = setInterval(() => {
      if (pipe && typeof pipe.offsetLeft === 'number' && mario) {
        const marioPosition = +window
          .getComputedStyle(mario)
          .bottom.replace('px', '')
        const pipePosition = pipe.offsetLeft
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
          pipe.style.animation = 'none'
          pipe.style.left = `${pipePosition}px`

          mario.style.animation = 'none'
          mario.style.bottom = `${marioPosition}px`

          mario.style.width = '75px'
          mario.style.marginLeft = '50px'

          setGameOver(true)
        }
      }
    }, 10)

    return () => {
      clearInterval(loop)
    }
  }, [])

  return (
    <>
      <div className="box-border flex flex-col justify-start items-center h-[100vh] bg-gray-800 pt-10">
        <div className=" relative w-full h-[50vh] bg-gradient-to-tr from-gray-200 to-cyan-200 border-solid border-b-[15px] border-green-700 mx-auto overflow-hidden">
          <header className="flex flex-col items-center justify-start bg-gray-800">
            <h1 className="font-marioFont text-9xl text-zinc-200">
              Mario Bros
            </h1>
            <h2 className="font-marioFont text-2xl text-zinc-200">Mini Game</h2>
          </header>
          <Image
            ref={marioRef}
            className={`w-[400px] right-[-400px] absolute animate-clouds-fly`}
            width={500}
            height={1}
            alt="Mario Clounds"
            src={'/clouds.png'}
          />
          <Image
            ref={marioRef}
            className={`w-[150px] absolute bottom-0  `}
            width={50}
            height={1}
            alt="Mario"
            src={gameOver ? '/game-over.png' : '/mario.gif'}
          />
          <Image
            ref={pipeRef}
            className={`w-[65px] absolute bottom-0 animate-pipe-run `}
            width={50}
            height={1}
            alt="Mario Pipe"
            src={'/pipe.png'}
          />
        </div>
      </div>
    </>
  )
}
