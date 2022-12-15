import React from 'react'

function Room( {user, setUser,room,setRoom,setChatScreen,socket}) {

const sendRomm =()=> {
    socket.emit('room',room)
    setChatScreen(true)
}

    return (

        <div className='flex items-center justify-center   h-full'>
            <div className='w-1/2 h-[350px] bg-teal-500 rounded-lg  flex flex-col justify-center   items-center '>

                <h1 className='font-bold my-4 text-white text-2xl'>Welcome to Chat</h1>
                <div className="relative mb-6">
                    <input value={user} onChange={e => setUser(e.target.value)}  type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Nmae" />
                </div>
                <div className="relative mb-6">

                    <input value={room} onChange={e => setRoom(e.target.value)}  type="text" id="romm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Room Code" />
                </div>
                

                <div className='mt-4 '>
                <button onClick={sendRomm}  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">CHAT....</button>

                </div>

            </div>
        </div>
    )
}

export default Room