import minion from '../assets/minion.svg';

export default function Header() {
  return (
    <div className='flex justify-between w-full h-20 p-4'>
      <img src={minion} className='m-2'/>
      <a className='flex items-center px-4 bg-purple text-white rounded-md'>Log In / Sign Up</a>
    </div>
  );
}