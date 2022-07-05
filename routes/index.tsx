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
      <p class={tw`pv-10`}>Trying out Deno Fresh web-framework</p>
      <img
        src='/logo.svg'
        height='100px'
        alt='the fresh logo: a sliced lemon dripping with juice'
      />
      <p class={tw`my-6`}>Welcome to `fresh`</p>
      <Counter start={3} />
      <CounterServer start={1} />
      <ul class={tw`text-small`}>
        <li>
          You can see the source code here:{' '}
          <a
            class={tw`text-black`}
            href='https://github.com/netsi1964/netsi-fresh'
            target='_blank'
          >
            https://github.com/netsi1964/netsi-fresh
          </a>
        </li>
        <li>
          Read more about fresh:{' '}
          <a class={tw`text-black`} href='https://fresh.deno.dev/'>
            https://fresh.deno.dev/
          </a>
        </li>
      </ul>
    </div>
  )
}

interface CounterProps {
  start: number
}

export function CounterServer (props: CounterProps) {
  const [count, setCount] = useState(props.start)
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-secondary rounded m-2`
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
