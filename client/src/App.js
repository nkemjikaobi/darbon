import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layouts/Header'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Blog from './components/Pages/Blog'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Footer from './components/Layouts/Footer'
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
