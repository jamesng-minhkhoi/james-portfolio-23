'use client'
import Image from 'next/image'
import Navbar from './components/Navbar/navbar'
import MouseIcon from '../../public/icons/MouseIcon.svg';
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.from('.herotext', {y:150 })
    gsap.to('.herotext', {y:0, duration:2.5, ease: "elastic.out", stagger: { }});
    
  }, []);
  return (
    <main className="w-screen">
      <section className="bg-[#101010] h-screen p-16">
        <h1 className="flex flex-col text-white w-fit mx-auto">
          <div className='overflow-hidden	 wrapper'>
            <span className="text-sm font-light"> 
                Hi there, Im__
            </span>
          </div>
          <div className='wrapper overflow-hidden'>
            <span className="herotext text-9xl font-semibold w-fit block">
                James 
            </span>
          </div>
          <div className='wrapper overflow-hidden'>
            <span className='herotext pb-4 text-9xl font-semibold w-fit block'>
              Nguyen
            </span>
          </div>
          <div className='wrapper overflow-hidden'>
              <a className="text-sm font-light text-right">
              __Software Engineer
              </a>
          </div>
        </h1>
        <Image
            src={MouseIcon} alt={'Scroll Down'}/>
      </section>
  </main>
  )
}
