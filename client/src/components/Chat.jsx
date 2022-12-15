import React from 'react'
import { useState, useEffect } from 'react'


function Chat({ socket, user, room }) {
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    socket.on('messageReturn', (data) => {
      setMessageList((prev) => [...prev, data])
    })
  }, [socket])


  const sendMessage = async () => {

    const messageContent = {
      user: user,
      room: room,
      message: message,
      date: (new Date(Date.now)).getHours() + (new Date(Date.now)).getMinutes()
    }


    await socket.emit('message', messageContent)
    setMessageList((prev) => [...prev, messageContent])
    setMessage('')
  }

  console.log('messageList ', messageList);
  return (
    <div className=' flex items-center justify-center h-full '>
      <div className=' w-1/2 bg-white h-[600px] relative rounded-xl'>
        <div className='w-full h-16 bg-gray-700 flex items-center p-3 rounded-t-xl'>

          <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bordered avatar" />

        </div>


        <div className='w-full h-[400px] overflow-y-auto  '>

          {
            messageList && messageList.map((message, i) => (


              <div key={i} className={`${user === message.user ? 'flex justify-end' : ''}`}>
                <div className={`${user === message.user ? 'bg-green-600 rounded-br-none ' : 'bg-blue-600 rounded-bl-none '} w-2/3 h-14 p-2 m-2  text-white rounded-xl `}>
                  <div>{message.message}</div>
                  <div className='w-full flex justify-end  text-sm '> {message.user}</div>
                </div>
              </div>
            ))
          }

          {/* <div className='flex justify-end'>
            <div className='w-2/3 h-14 p-2 m-2 bg-green-600 text-white rounded-xl rounded-br-none '>

              <div className='w-full flex justify-end  text-sm '>  erhan fdbnwfd kaya</div>
            </div>
          </div> */}

        </div>

        <div className=' absolute bottom-0 left-0 w-full '>

          <input value={message} onChange={e => setMessage(e.target.value)} type="text" className='w-3/4 h-12 border p-3' placeholder='Massege' />
          <button onClick={sendMessage} className='w-1/4 bg-gray-700 rounded-r-lg h-12 hover:opacity-70   '> SEND </button>
        </div>
      </div>
    </div>
  )
}

export default Chat