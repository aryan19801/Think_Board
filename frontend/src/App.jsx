
import {Routes,Route} from 'react-router';

import HomePage from './pages/HomePage';
import NoteDetailPage from './pages/NoteDetailPage';
import CreatePage from './pages/CreatePage';
import toast, { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div>
      <button className='btn btn-primary'>HIT me </button>
      <button onClick={()=>toast.success("congrats ")} className="text-red-500 bg-black ">Click Me !</button>
      <Routes>
        <Route path = '/' element = {<HomePage/>}>
        </Route>
        <Route path = '/create' element = {<CreatePage/>}>
        </Route>
        <Route path = '/note/:id' element = {<NoteDetailPage/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App