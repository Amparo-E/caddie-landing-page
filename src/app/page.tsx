import { Hero } from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { CardContainer } from '@/components/CardContainer'
import { AccordionQuestions } from '@/components/AccordionQuestions'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar/>
      <Hero/>
      <CardContainer/>
      <AccordionQuestions/>
      <section className=' flex items-center justify-center w-screen h-screen bg-white rounded-tr-3xl rounded-tl-3xl -mt-10'>
        <div className='max-w-[1440px] w-11/12'>
          <span className='block text-5xl font-bold mb-10 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl '>Get caddie is simple</span>
          <Button className='w-full p-9 text-2xl'>Get flexibility now</Button>
        </div>
      </section>
    </main>
  )
}