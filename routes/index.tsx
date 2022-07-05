import Counter from '../islands/Counter.tsx'
import { IS_BROWSER } from '$fresh/runtime.ts'
/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'
import { useState } from 'preact/hooks'

export default function Home () {
  return (
    <div
      class={tw`p-4 mx-auto max-w-screen-md text-medium bg-primary rounded rounded-xl p-10 text-white`}
    >
      <img
        src='/logo.svg'
        height='100px'
        alt='the fresh logo: a sliced lemon dripping with juice'
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <CounterServer start={1} />
    </div>
  )
}

interface CounterProps {
  start: number
}

export function CounterServer (props: CounterProps) {
  const [count, setCount] = useState(props.start)
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{count}</p>
      <button
        class={btn}
        onClick={() => setCount(count - 1)}
        disabled={!IS_BROWSER}
      >
        -1
      </button>
      <button
        class={btn}
        onClick={() => setCount(count + 1)}
        disabled={!IS_BROWSER}
      >
        +1
      </button>
      {IS_BROWSER ? 'Rendered in client' : 'Rendered in server'}
    </div>
  )
}
