import './App.css'
import AddUser from './components/AddUser'
import ItemList from './components/ItemList'

function App() {

  return (
    <main className='flex flex-col items-center gap-6'>
      <AddUser />
      <ItemList />
    </main>
  )
}

export default App
