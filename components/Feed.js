import React from 'react'
import Input from './Input'
import Post from './Post'
import { SparklesIcon } from '@heroicons/react/outline'

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Nguyen Kubin",
      username: "ngutheky",
      userImg: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      img: 'https://images.unsplash.com/photo-1659880233848-1f4eaf4f753c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
      text: 'nice view!!!',
      timestamp: '3 hours ago'
    },
    {
      id: "2",
      name: "Nguyen Kubin",
      username: "ngutheky",
      userImg: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      img: 'https://images.unsplash.com/photo-1659402882702-29dd07ba0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
      text: 'wow view!!!',
      timestamp: '3 days ago'
    }
  ]
  return (
    <div className='xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
            <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                <SparklesIcon className='h-5' />
            </div>
        </div>

        {/* Input */}
        <Input />
        {posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}

export default Feed