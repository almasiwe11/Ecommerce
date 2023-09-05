type PropTypes = {
  list: string[]
  liStyle?: string
  ulStyle?: string
}

function NavMenu({ list, liStyle, ulStyle }: PropTypes): JSX.Element {
  return (
    <ul className={`${ulStyle} text-white`}>
      {list.map((linkName) => (
        <li key={linkName} className={`${liStyle}`}>
          <a href="#">{linkName}</a>
        </li>
      ))}
    </ul>
  )
}

export default NavMenu
