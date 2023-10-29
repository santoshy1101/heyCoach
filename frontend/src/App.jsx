import AllRoutes from './All Routes/AllRoutes'
import AddRestaurant from './Components/AddRestaurant'
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen text-3xl font-bold bg-slate-500">
      <Navbar />
     <div className='relative top-32 bg-slate-500'>
     <AllRoutes/>
     </div>
    </div>
  )
}
