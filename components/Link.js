import PropTypes from 'prop-types'
import Link from 'next/link'

const CustomLink = props =>
  <span>
    <Link {...props}><a>
      {props.children}
    </a></Link>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </span>

CustomLink.propTypes = {
  children: PropTypes.node.isRequired
}

export default CustomLink
