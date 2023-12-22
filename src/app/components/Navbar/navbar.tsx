
import './navbar.css';
export default function Navbar(props: { className: string | undefined; }) {
    return (
        <div className={props.className}>
            <nav className='flex justify-center gap-4 bottom-8 rounded-md bg-[#feed01] w-96'>
                <button style={{ }} className="m-2 py-2 px-4 text-sm font-semibold rounded-md">
                {' '}
                <a>ABOUT</a>
                
                </button>
                <button className="m-2 py-2 px-4 text-sm font-semibold rounded-md">
                {' '}
                WORKS
                </button>
                <button className="m-2 py-2 px-4 text-sm font-semibold rounded-md">
                {' '}
                CONTACT
                </button>
            </nav>
      </div> 
    ) 
}