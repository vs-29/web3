import {Navbar,Footer,Loader,Transactions,Services,Welcome,} from './components'
import { BrowserRouter as Router } from 'react-router-dom';




const App=()=> {
  return (
    <Router basename="/">
      <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
      </div>
      </Router>
  )
}

export default App;
