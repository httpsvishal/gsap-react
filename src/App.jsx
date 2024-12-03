import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const box2ref  = useRef(null);
  const textRef = useRef(null);


  useGSAP(()=>{
    gsap.from('.box', {
      x: 1000,
      duration: 2,
      delay: 1,
      ease: 'power2.inOut',
      // repeat: -1,
      // yoyo: true
    })
    gsap.to(box2ref.current, {
      x : 1000,
      duration: 2,
      delay: 1,
      rotate: 360,
      scrollTrigger:{
        trigger: box2ref.current,
        start: 'top 50%',
        end: 'top 10%',
        scrub: 1,
        markers: true,
        pin: true,
      }
      })

      gsap.to(textRef.current, {
        translateX: -800,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 50%',
          end: 'top 10%',
          scrub: 1,
          markers: true,
          pin: true,
        }
        })
    
  })
  return (
    <div className='p-5 overflow-x-hidden'>
      <div className="box h-[200px] w-[200px] bg-red-400 border rounded-md">
      </div>
      <div className='h-[150vh]'></div>
      <div ref={box2ref} className="h-[200px] w-[200px] bg-blue-400 border rounded-md">
        </div>
      <div className='h-[150vh]'></div>
      <p ref={textRef} className='text-[35vh] p-6 ' >ScrollToSeeanimation</p>
      <div className='h-[150vh]'></div>

    </div>
  )
}

export default App
