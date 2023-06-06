import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import arrow from './assets/curl-arrow.svg'
import arrow2 from './assets/curl-arrow2.svg'
import Button from './components/Button'
import ball from './assets/ball.svg'
import semiCircle from './assets/semi-circle.svg'
import semiCircle2 from './assets/semi-circle2.svg'
import circleBorder from './assets/circle-border.svg'
import behance from './assets/behance.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
import tick from './assets/tick.svg'
import tv from './assets/tv.svg'
import game from './assets/game.svg'
import crown from './assets/crown.svg'
import chart from './assets/chart.svg'
import cap from './assets/cap.svg'
import event from './assets/event.svg'
import timeline from './assets/timeline.svg'
import pics from './assets/pics.svg'
import quote from './assets/quote.svg'
import LOGO from './assets/logo.svg'
import message from './assets/message.svg'
import phone from './assets/phone.svg'
import location from './assets/location.svg'
import clientTrusted from './assets/client-trusted.svg'
import weeklyGrowth from './assets/weekly-growth.svg'
import person from './assets/person.svg'
import person2 from './assets/person2.svg'
import partner1 from './assets/IMG-20230526-WA0082.jpg'
import partner2 from './assets/IMG-20230526-WA0083.jpg'
import partner3 from './assets/IMG-20230526-WA0084.jpg'
import bg1 from './assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'
import bg2 from './assets/bram-naus-n8Qb1ZAkK88-unsplash.jpg'
import bg3 from './assets/bg.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* <Navbar /> */}

        {/* Head */}
        <div className="flex justify-between items-center mt-20 px-4 lg:px-main">
          <div className="hidden md:flex flex-col gap-4 justify-center items-center">
            <img src={arrow} alt="" />
            <img className='scale-[1.2]' src={weeklyGrowth} alt="" />
          </div>
          <div className="flex flex-col justify-center gap-3 items-center">
            <h2 className=' text-grey font-montserrat'>Designing With Us</h2>
            <p className='md:text-[72px] text-4xl font-bold leading-extra-tight text-dark text-center font-montserrat'>We build cutting edge solutions</p>
            <p className='text-center w-2/ text-grey font-montserrat'>With us achieving dreams in building your products, together say “Yes” to extraordinary journey </p>
          </div>
          <div className="hidden md:flex gap-4 justify-center items-center">
            <img src={arrow2} alt="" />
            <img className='scale-[1.2]' src={clientTrusted} alt="" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center py-10 px-4 lg:px-main">
          <div className="flex justify-center items-center gap-2">
            <span className='h-1 w-1 bg-dark rounded-full'></span>
            <h2 className='text-grey '>UI/UX Design</h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className='h-1 w-1 bg-dark rounded-full'></span>
            <h2 className='text-grey'>Prototype</h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className='h-1 w-1 bg-dark rounded-full'></span>
            <h2 className='text-grey'>Web Design</h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className='h-1 w-1 bg-dark rounded-full'></span>
            <h2 className='text-grey'>Landing Page</h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className='h-1 w-1 bg-dark rounded-full'></span>
            <h2 className='text-grey'>Mobile Design</h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className='h-1 w-1 bg-dark rounded-full'></span>
            <h2 className='text-grey'>Development</h2>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col justify-start items-center relative w-full h-fit px-4 lg:px-main">
          <img className='absolute translate-y-3 scale-90 -z-10' src={semiCircle} alt="" />
          <img className='absolute -z-10' src={circleBorder} alt="" />
          <Button children="Start a Project" inverse={true} />
          <div className="flex justify-center items-center gap-2 md:gap-6 py-12">
            <div className="p-3 bg-white rounded-full shadow-md">
              <img className='' src={ball} alt="" />
            </div>
            <div className="p-3 bg-white rounded-full shadow-md">
              <img className='' src={behance} alt="" />
            </div>
            <div className="p-3 bg-white rounded-full shadow-md">
              <img className='' src={instagram} alt="" />
            </div>
            <div className="p-3 bg-white rounded-full shadow-md">
              <img className='' src={linkedin} alt="" />
            </div>
          </div>
          <h3 className='font-normal text-grey-lighter py-8'>Trusted Partners</h3>
          <div className="flex gap-3 md:gap-16">
            <div className="overflow-hidden">
              <img className='h-14' src={partner1} alt="" />
            </div>
            <div className="overflow-hidden">
              <img className='h-14' src={partner2} alt="" />
            </div>
            <div className="overflow-hidden">
              <img className='h-14' src={partner3} alt="" />
            </div>
          </div>

          <h3 className='font-normal text-grey-lighter pt-12 py-8'>Featured Project</h3>

          <div className="flex flex-col md:flex-row gap-3 md:gap-8">
            <div className="flex justify-start items-center h-[308px] w-[400px] px-6 rounded-3xl relative bg-green">
              <img className='absolute bottom-0 z-10' src={semiCircle2} alt="" />
              <div className="flex flex-col">
                <p className='text-white'>Lets Development</p>
                <h2 className="font-bold text-white w-3/5 text-[2.5rem]">I-Sabi</h2>
                <p className='text-white w-2/3'>Together we build your Product</p>
              </div>
              <img src={person} alt="" className="absolute top-0 right-0 z-20" />
            </div>
            <div className="flex justify-start items-center h-[308px] w-[400px] px-6 rounded-3xl relative bg-blue">
              <img className='absolute bottom-0 z-10' src={semiCircle2} alt="" />
              <div className="flex flex-col">
                <p className='text-white'>Lets Development</p>
                <h2 className="font-bold text-white text-[2.5rem] w-3/5">Work With Us</h2>
                <p className='text-white w-2/3'>Together we build your Product</p>
              </div>
            </div>
            <div className="flex justify-start items-center h-[308px] w-[400px] px-6 rounded-3xl overflow-hidden relative bg-ash">
              <img className='absolute bottom-0 z-10' src={semiCircle2} alt="" />
              <div className="flex flex-col">
                <p className='text-white'>Lets Development</p>
                <h2 className="font-bold text-white text-[2.5rem] w-3/5">Work With Us</h2>
                <p className='text-white w-2/3'>Together we build your Product</p>
              </div>
              <img src={person2} alt="" className="absolute top-0 right-0 z-20" />
            </div>
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-32 py-24 justify-center px-6 md:px-sub2">
          <div className="flex flex-col gap-6 flex-1">
            <h2 className='font-bold text-3xl md:text-[2.5rem] text-center md:text-left'>About Us</h2>
            <p>We are a technology company on a mission to make life easier and society better leveraging on technology solutions.</p>
          </div>
          <div className="flex py-3 flex-col gap-6 flex-1">
            <div className="flex gap-3">
              <img src={tick} alt="" srcset="" />
              <h2 className='font-bold text-xl'>Our Vision</h2>
            </div>
            <p>Our vision is to be the leading technology company providing tech solutions that makes life easier and society better.</p>
            <div className="flex flex-col gap-2">
              <li className='text-grey-lighter'>Excellence</li>
              <li className='text-grey-lighter'>Intergrity</li>
              <li className='text-grey-lighter'>Efficiency</li>
              <li className='text-grey-lighter'>Customer Satisfaction </li>
            </div>

          </div>
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-2">
                <h2 className='text-green font-bold text-[2.5rem] '>200+</h2>
                <p>Complete project</p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className='text-green font-bold text-[2.5rem] '>200+</h2>
                <p>Complete project</p>
              </div>
            </div>
            <p className="text-green">
              Our products are designed with the delibrate intention to have returning users and customers.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col justify-center px-6 md:px-sub2 items-center">
          <h2 className="font-bold text-3xl md:text-[2.5rem] text-dark">Services / Products</h2>
          <p className=''>Our services and products include</p>
          <div className="flex flex-col gap-6 md:grid grid-cols-3 gap-x-24 gap-y-14 py-12">
            <div className="flex flex-col items-start gap-4">
              <div className="flex justify-center p-4 rounded-3xl items-center shadow-slate-200 shadow-md bg-grey2">
                <img className='scale-[0.8]' src={tv} alt="" />
              </div>
              <h2 className='font-bold pt-6 text-xl'>Enterprise Solutions</h2>
              <p>Because we have a taste for excellence and a burning desire to meet the technology needs of our society, we build apps used by the general public</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex justify-center p-4 rounded-3xl items-center shadow-slate-200 shadow-md bg-grey2">
                <img className='scale-[0.8]' src={game} alt="" />
              </div>
              <h2 className='font-bold pt-6 text-xl'>Mobile Gaming</h2>
              <p>Ayaweisoft also builds gaming applications with high quality and and utility value</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex justify-center p-4 rounded-3xl items-center shadow-slate-200 shadow-md bg-grey2">
                <img className='scale-[0.8]' src={crown} alt="" />
              </div>
              <h2 className='font-bold pt-6 text-xl'>E-Governance</h2>
              <p>The company also specializes in building applications for the government, aimed at easening the burden to governance</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex justify-center p-4 rounded-3xl items-center shadow-slate-200 shadow-md bg-grey2">
                <img className='scale-[0.8]' src={chart} alt="" />
              </div>
              <h2 className='font-bold pt-6 text-xl'>Consultancy & Investment</h2>
              <p>We run consultancy and investment services.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex justify-center p-4 rounded-3xl items-center shadow-slate-200 shadow-md bg-grey2">
                <img className='scale-[0.8]' src={cap} alt="" />
              </div>
              <h2 className='font-bold pt-6 text-xl'>Ayaweisoft Academy</h2>
              <p>We run an academy were people are taught various skills ranging from graphics design, compter programming and forex trading</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex justify-center p-4 rounded-3xl items-center shadow-slate-200 shadow-md bg-grey2">
                <img className='scale-[0.8]' src={event} alt="" />
              </div>
              <h2 className='font-bold pt-6 text-xl'>Utility and Events</h2>
              <p>We also provide utility and digital even management services. we provide online, voting, tickting, sales of forms, telivising and livestreaming</p>
            </div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 px-6 md:px-sub">
          <div className="flex flex-col gap-4">
            <p>Why Choose us</p>
            <h2 className=' leading-[1] font-bold text-3xl md:text-[2.5rem]'>Fast and Quality Work is our focus</h2>
            <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.</p>
          </div>
          <img className='scale-75' src={timeline} alt="" srcset="" />
        </div>

        {/* Who we are */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-20 px-5 md:px-sub">
          <div className="flex flex-col gap-4 items-start">
            <p>Who We are</p>
            <h2 className=' leading-[1] font-bold text-3xl md:text-[2.5rem]'>Trusted 100% by many people Gradually</h2>
            <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.</p>
            <Button children={'Lets Work'} inverse={true} />
          </div>
          <img className='scale-75' src={pics} alt="" srcset="" />
        </div>

        {/*Portfolio */}
        <div className="flex flex-col gap-4 justify-center items-center px-5 md:px-sub">
          <p>Portfolio</p>
          <h2 className=' leading-[1] font-bold text-3xl md:text-[2.5rem] py-2'>Success Project</h2>
          <p className='text-center w-3/5'>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est </p>
          <div className="flex flex-col md:flex-row gap-6 py-6">
            <div className="flex flex-1 rounded-3xl h-[539px] justify-center items-end bg-black w-fit">
              <div className="flex flex-col md:flex-row gap-4 pb-6 px-12 items-start md:items-center">
                <div className="flex flex-col md:w-2/3 gap-4">
                  <h2 className='text-white font-bold text-3xl'>Website Design</h2>
                  <p className='text-off-white'>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                </div>
                <Button className={'border-white text-white px-6 py-[0.8rem]'} children={'Lets work'} inverse={false} />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 justify-between">
              <div className="flex rounded-3xl p-6 flex-1 items-end bg-black w-fit">
                <div className="flex flex-col gap-3">
                  <h2 className='text-white font-bold text-2xl'>Website Design</h2>
                  <p className='text-off-white'>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                </div>
              </div>
              <div className="flex rounded-3xl p-6 flex-1 items-end bg-black w-fit">
                <div className="flex flex-col gap-3">
                  <h2 className='text-white text-2xl font-bold'>Website Design</h2>
                  <p className='text-off-white'>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                </div>
              </div>
            </div>
          </div>
          <Button children={'View Our Project'} inverse={true} />
        </div>

        <div className="flex flex-col gap-4 relative">
          <div className="flex justify-between items-center px-sub">
            <div className="flex flex-col justify-center items-start flex-1 gap-4">
              <p>Inspiration</p>
              <h2 className=' leading-[1] font-bold text-[2.5rem] py-2'>UI Design Exploration</h2>
              <p className='w-3/5'>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est </p>
            </div>
            <Button children={'View Our Project'} inverse={true} />
          </div>
          <div className="w-full my-8 h-[480px] bg-green"></div>
        </div>

        {/* Our Team */}
        {/* <div className="flex flex-col justify-center items-center">
          <p>Meet the creatives</p>
          <h2 className=' leading-[1] font-bold text-[2.5rem] py-2'>Our Team</h2>
          <div className="flex gap-8 py-8">
            <div className="flex flex-col justify-center items-center">
              <div className="w-64 h-64 bg-black rounded-3xl"></div>
              <h2 className='font-bold text-xl'>Promise Ayawei</h2>
              <p className='text-dark font-inter text-sm'>Ceo</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-64 h-64 bg-black rounded-3xl"></div>
              <h2 className='font-bold text-xl'>Promise Ayawei</h2>
              <p className='text-dark font-inter text-sm'>Ceo</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-64 h-64 bg-black rounded-3xl"></div>
              <h2 className='font-bold text-xl'>Promise Ayawei</h2>
              <p className='text-dark font-inter text-sm'>Ceo</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-64 h-64 bg-black rounded-3xl"></div>
              <h2 className='font-bold text-xl'>Promise Ayawei</h2>
              <p className='text-dark font-inter text-sm'>Ceo</p>
            </div>
          </div>
        </div> */}

        <div className='flex flex-col justify-center items-center gap-2'>
          <p>What our customer say</p>
          <h2 className=' leading-[1] font-bold text-[2.5rem] py-2 '>Testimonial</h2>
          <p className='w-3/5 text-center py-4'>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.</p>
          <h2 className='text-center leading-10 w-3/5 text-3xl'>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est </h2>
          <div className="flex flex-col justify-center w-full px-sub text-center py-8 relative">
            <img className='absolute left-64 -top-4 scale-90' src={quote} alt="" />
            <h2 className='font-bold'>Larry Pageim Fred & Sergey Brin</h2>
            <p className='text-sm font-inter text-dark'>Sr. Director, Brand Marketing</p>
          </div>
        </div>

        <div className="w-full px-4 lg:px-main">
          <div className="flex w-full bg-green rounded-2xl p-12 justify-between items-center">
            <div className="flex flex-col gap-4">
              <h2 className='font-bold text-white text-3xl'>Work Together with Ayaweisoft</h2>
              <p className='text-white w-4/5'>Our company is a very professional company, with friendly service, modern homes and interest-free payments</p>
            </div>
            <Button className={'bg-white border-none rounded-xl py-3 text-green text-sm'} children={'Contact Us'} />
          </div>
        </div>

        <div className="flex gap-8 relative p-12 px-4 lg:px-main">
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex gap-2 items-center">
              <img src={LOGO} alt="logo" className="scale-75" />
              <h2 className='font-bold text-2xl text-dark'>Ayaweisoft</h2>
            </div>
            <p className=''>Prebör domisaning. Kemkastrering. Fagt kaskade. Bist decissa. Stereodiktisk vasyns att preteng. Mons byning fihör. Pore tolig. Epire kanesk. Monosa medelgam tisk.</p>
            <div className="flex gap-3">
              <img className='' src={ball} alt="" />
              <img className='' src={instagram} alt="" />
              <img className='' src={behance} alt="" />
              <img className='' src={linkedin} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <h2 className='font-bold'>Home</h2>
            <p>Beranda</p>
            <p>Program Kialiun</p>
            <p>Gallery</p>
            <p>Our News</p>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <h2 className='font-bold'>About</h2>
            <p>Beranda</p>
            <p>Program Kialiun</p>
            <p>Gallery</p>
            <p>Our News</p>
          </div>
          <div className="flex flex-col gap-3 justify-start items-start flex-1">
            <h2 className='font-bold'>Contact</h2>
            <div className="flex justify-center items-center gap-2">
              <img src={phone} alt="" />
              <p>(406) 555-0120</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={message} alt="" />
              <p>kreasi.digital@gmail.com</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={location} alt="" />
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            </div>
            <p className='absolute bottom-4'>© 2023 Ayaweisoft. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
