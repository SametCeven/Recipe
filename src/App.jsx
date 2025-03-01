import './App.css'
import Header from "./components/Header"
import Navbar from './components/Navbar'
import CreateRecipe from './pages/CreateRecipe'
import Discover from './pages/Discover'
import Mainpage from './pages/Mainpage'
import RecipeList from "./pages/RecipeList"
import { Route, Switch } from 'react-router-dom'



export default function App() {

  return (
    <div className='transition delay-500'>
      <div className='flex flex-col items-center'>
        <Header />
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact>
          <Mainpage />
        </Route>
        <Route path="/recipelist">
          <RecipeList />
        </Route>
        <Route path="/createrecipe">
          <CreateRecipe />
        </Route>
        <Route path="/discover">
          <Discover />
        </Route>
      </Switch>
    </div>
  )
}

