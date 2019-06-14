import Link from 'next/link'

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href={{ pathname: '/notlazy', query: { is_draggable: true } }}>
    <a style={linkStyle}>Normal Loading</a>
    </Link>
    <Link href={{ pathname: '/lazy', query: { is_draggable: true } }}>
      <a style={linkStyle}>Lazy Loading</a>
    </Link>

    <Link href={{ pathname: '/serverFetch' }}>
      <a style={linkStyle}>SSR</a>
    </Link>

    <Link href={{ pathname: '/clientFetch' }}>
      <a style={linkStyle}>CSR</a>
    </Link>
  </div>
);

export default Header