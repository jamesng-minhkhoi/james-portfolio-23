
import './navbar.css';
export default function Navbar(props: { className: string | undefined; }) {
    return (
        <div className={props.className}>
            <nav className='flex justify-center gap-4 bottom-8 rounded-md bg-[#848484] w-96'>
                <button style={{ }} className="m-2 py-2 px-4  hover:text-[#FF9D43] text-sm font-semibold rounded-md">
                {' '}
                <a>About</a>
                
                </button>
                <button className="m-2 py-2 px-4 hover:text-[#FF9D43] text-sm font-semibold rounded-md">
                {' '}
                Works
                </button>
                <button className="m-2 py-2 px-4 hover:text-[#FF9D43] text-sm font-semibold rounded-md">
                {' '}
                Contact
                </button>
            </nav>
      </div> 
    ) 
}