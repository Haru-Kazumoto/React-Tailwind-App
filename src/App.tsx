import './App.css'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import Topbar from './components/Content'

export default function App() {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <Topbar />
      </div>
    </>
  )
}
