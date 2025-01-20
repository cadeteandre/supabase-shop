import './App.css'
import CustomerSection from './components/customer/CustomerSection'
import ItemSection from './components/item/ItemSection'


function App() {

  return (
    <main className='flex flex-col items-center gap-6'>
      <CustomerSection />
      <ItemSection />
    </main>
  )
}

export default App;
