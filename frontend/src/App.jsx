
import './App.css'
// import Chat from './Chat'
import SideBar from './SideBar'
import { MyContext } from './MyContext'
import ChatWindow from './ChatWindow';
function App() {
  const providerValues = {};

  return (
    <div className='app'>
      <MyContext.Provider value={providerValues}>
        <SideBar></SideBar>
        <ChatWindow></ChatWindow>
      </MyContext.Provider>
    </div>
  )
}

export default App
