

export default function Footer() { 
    return (
        <footer className='bg-[#101010]'>
            <div className='flex justify-between px-32 py-8'>
            <div className='item'>
                © 2023 JAMES.NGUYEN
            </div>
            <div className="item">
                <span>SOCIALS</span>
                <ul className='flex flex-row gap-4'>
                    <li>
                        LinkedIn
                    </li>
                    <li>
                        Instagram
                    </li>
                    <li>
                        Twitter
                    </li>
                </ul>
            </div>
            </div>
        </footer>
    );
}