import React from 'react'
import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from 'next-auth/react'


const Sidebar = () => {
    const { data: session } = useSession()
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
        {/* twitter logo */}
        <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1'>
            <Image 
                src={"https://cdn-icons-png.flaticon.com/512/733/733579.png"}
                width={50}
                height={50}
            />
        </div>

        {/* menu */}
        <div className='mt-4 mb-2.5 xl:items-start'>
            <SidebarMenuItem text={"Home"} Icon={HomeIcon} />
            <SidebarMenuItem text={"EXplore"} Icon={HashtagIcon} />
            {session && (
                <>
                    <SidebarMenuItem text={"Notification"} Icon={BellIcon} />
                    <SidebarMenuItem text={"Messages"} Icon={InboxIcon} />
                    <SidebarMenuItem text={"Bookmark"} Icon={BookmarkIcon} />
                    <SidebarMenuItem text={"Lists"} Icon={ClipboardIcon} />
                    <SidebarMenuItem text={"Profile"} Icon={UserIcon} />
                    <SidebarMenuItem text={"More"} Icon={DotsCircleHorizontalIcon} />
                </>
            )}
            
        </div>
        {/* button */}
        {session ? (
            <>
                <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>

                {/* mini-profile */}
                <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
                    <img onClick={signOut} src={session.user.image} alt="profile" className='h-10 w-10 rounded-full xl:mr-2' />
                    <div className='leading-5 hidden xl:inline'>
                        <h4 className='font-bold'>{session.user.name}</h4>
                        <p className='text-gray-500'>@{session.user.username}</p>
                        <DotsHorizontalIcon className='h-5 xl:ml-8' />
                    </div>
                </div>
            </>
        ) : (
            <button onClick={signIn} className='bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Sign in</button>
        )}
        
    </div>
  )
}

export default Sidebar