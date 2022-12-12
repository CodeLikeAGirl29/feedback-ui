import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <Link to='/' style={{ textDecoration: "none", color: "#3aafa9" }}>
          <h2><span>{text}</span></h2>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: "Reviews",
  bgColor: "#17252a",
  textColor: "#def2f1"
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
