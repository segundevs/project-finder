import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav>
        <li>
          <Link href='/'>
          <a>Home</a>
          </Link>
        </li>

      </nav>
    </header>
  )
}

export default Header