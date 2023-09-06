import { Link } from "react-router-dom"

type PropTypes = {
  list: string[]
  liStyle?: string
  ulStyle?: string
}

function NavMenu({ list, liStyle, ulStyle }: PropTypes): JSX.Element {
  return (
    <ul className={`${ulStyle} text-white`}>
      {list.map((linkName) => (
        <li key={linkName} className={`${liStyle} `}>
          <Link to={`/${linkName === "home" ? "/" : linkName}`}>
            {linkName}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavMenu
