import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className='flex flex- p-3'>
            <li><Link href="/">Home </Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>

    </div>
  )
}

export default Header