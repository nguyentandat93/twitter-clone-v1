import { getProviders, signIn } from 'next-auth/react'

const signin = ({ providers }) => {
  return (
    <div className='flex justify-center mt-20 space-x-4'>
        <img 
            src="https://as1.ftcdn.net/v2/jpg/01/11/32/50/1000_F_111325039_kVk2kjYQtxOucqFzCD4ONXvu3pM3i4UJ.jpg" 
            alt="twitter phone" 
            className='md:inline-flex object-cover md:w-44 md:h-80 rotate-6 hidden rounded-lg'
        />
        <div className="">
            {Object.values(providers).map((provider) => (
                <div className="flex flex-col items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter logo" className='w-36 object-cover' />
                    <p className='text-center text-sm italic my-10'>This app is created for learning purposes</p>
                    <button onClick={() => signIn(provider.id, {callbackUrl: '/'})} className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default signin

export async function getServerSideProps () {
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}