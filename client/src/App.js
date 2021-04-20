import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Router>
      <Header />
        <main className='py-3'>
            <Container>
              <Route path='/' component={Home} exact/>
              <Route path='/about' component={About}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
            </Container>
          </main>
      <Footer />
    </Router>
  )
}

export default App;
