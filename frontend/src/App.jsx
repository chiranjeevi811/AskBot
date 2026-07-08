
import './App.css'
// import Chat from './Chat'
import { useState } from 'react';
import SideBar from './SideBar'
import { MyContext } from './MyContext'
import ChatWindow from './ChatWindow';
import { v1 as uuidv1 } from "uuid";
function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);

  const [currThreadId, setCurrThreadId] = useState(uuidv1());

  const [prevChats, setPrevChats] = useState([]);

  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);

  const providerValues = {
    prompt,
    setPrompt,

    reply,
    setReply,

    currThreadId,
    setCurrThreadId,

    prevChats,
    setPrevChats,

    newChat,
    setNewChat,

    allThreads,
    setAllThreads,
  };

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
