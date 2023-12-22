'use client'
import Image from 'next/image'
import MouseIcon from '../../public/icons/MouseIcon.svg';
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Avatar from '../../public/images/avatar.jpeg';


export default function Home() {
  const root = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    let ctx = gsap.context(() => {
      var tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: '#cards',
            start: 'top top',
            end: '+=2000 top',
            scrub: 1,
            pin: true,
            markers: false,
          },
        })
        tl.to('#card1', {
          scrollTrigger: {
            start: 'top top',
            end: '+=250 top'
          },
          backgroundColor: '#717371',
          rotateX: '-10deg',
        })
        .from('#card2', {
          y: 1000,
          backgroundColor: '#1B1B1B',
        })
        .to('#card2', {
          scrollTrigger: {
            start: 'top top',
            end: '+=250 top'
          },
          y: 0,
          backgroundColor: '#717371',
          rotateX: '-10deg',
        })
        .from('#card3', {
          y: 1000,
        })
        
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main className="block w-screen bg-[#101010]" ref={root}>
      <section id='section-1' className=" h-screen p-16">
        <h1 className="flex flex-col text-white w-fit mx-auto">
          <div className='overflow-hidden	wrapper'>
            <span className="herotext text-sm font-light block"> 
                Hi there, Im
            </span>
          </div>
          <div className='wrapper overflow-hidden'>
            <span className="herotext text-9xl font-semibold w-fit block">
                James 
                <Image className='mx-8 inline-block rounded-lg' src={Avatar} width={100} height={100} alt=''/>
            </span>
          </div>
          <div className='wrapper overflow-hidden'>
            <span className='herotext ml-auto pb-4 text-9xl font-semibold w-fit block'>
              Nguyen
            </span>
          </div>
          <div className='wrapper overflow-hidden'>
              <a className="herotext text-sm font-light text-right block">
                Software Engineer
              </a>
          </div>
        </h1>
        <Image
            src={MouseIcon} alt={'Scroll Down'}/>
      </section>
      <section id='about' className='block'>
        <h1 className='text-[6em] text-center'>ABOUT</h1>
        <div className='container mx-auto'>
          <span className='block mx-auto text-center max-w-lg'>
            James is an experienced Software Engineer who cant really center a div but die hard creative creator, and ocassionally TFT grinder.
            <br></br>
            He spent years in Canada but one day he got lost on his way to college then acidentally gone back to Vietnam & co-founded creative studio ARROW with his friend.
          </span>
        </div>

        <div id="cards" className="block p-12 h-screen">
          <div
            id="card1"
            className="absolute left-[50%] translate-x-[-50%] card block text-white p-8 bg-[#1B1B1B] border border-[#3B3B3B] rounded-lg drop-shadow-lg w-[80vw] h-[500px]"
          >
            card 1 content
          </div>
          <div
            id="card2"
            className="absolute card  left-[50%] translate-x-[-50%] mt-8 block text-white p-8 bg-[#1B1B1B] border border-[#3B3B3B] rounded-lg drop-shadow-lg w-[85vw] h-[500px]"
          >
            card 2 content
          </div>
          <div
            id="card3"
            className="absolute card left-[50%] translate-x-[-50%] mt-16 block text-white p-8 bg-[#1B1B1B] border border-[#3B3B3B] rounded-lg drop-shadow-lg w-[90vw] h-[500px]"
          >
            card 3 content
          </div>
        </div>
      </section>
      
      <section id='section-4'>
        <h1 className='text-center text-8xl'>Works</h1>
      </section>
      <section id='section-5' className=''>
        <div  className='block px-32'>
            <div className='row'>
              <h1 className='text-6xl py-8'>

                <span>
                  Lets Keep 
                  <Image className='p-4 inline-block rounded-full' src={Avatar} width={100} height={100} alt=''/>
                </span>
                <br />
                <span>In Touch</span>
                <hr className='my-8'/>
              </h1>
            </div>
            <div className='row'>
              <div className='flex gap-4'>
                <button className='p-4 border border-white rounded-full'>
                  jamesnguyen.minhkhoi@gmail.com
                </button>
                <button className='p-4 border border-white rounded-full'>
                  +84-363244303
                </button>
              </div>
            </div>
        </div>
      </section>
      
  </main>
  )
}
