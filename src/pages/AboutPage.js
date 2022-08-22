import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>
          This is a React site for reviewing products/places or even frameworks
          and libraries.
        </p>
        <p>
          Full Stack using React. Node. Context API. Forms. HTTP Requests. Uses
          a mock REST API with json-server.
        </p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
