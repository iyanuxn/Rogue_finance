import LOGO from '../assets/rogue.svg'
import { RiWallet3Line } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-7 mt-5 absolute inset-0 h-max'>
        <img src={LOGO} className='w-7' alt='logo' />
        <button className='bg-white text-zinc-900 font-semibold rounded-xl text-sm py-3 px-5 flex gap-2 items-center'>
            <RiWallet3Line/>
            Connect Wallet
        </button>
    </div>
  )
}

export default Navbar