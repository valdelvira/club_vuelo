import './App.css'
import IndexPage from './pages/IndexPage/IndexPage'
import Footer from './components/Footer/Footer'
import Navigator from './components/Navigator/Navigator'

function App() {
  return (
    <div className="App">
      <Navigator />
      <IndexPage />
      <Footer />
    </div>
  )
}

export default App
