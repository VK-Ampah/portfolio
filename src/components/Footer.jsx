import { FooterData } from '../constants/'
import { SectionWrapper } from '../hoc/'

const Footer = () => {
  return (
    <div>

        <footer className='bg-black text-white text-center flex justify-center py-10'>

            {FooterData.map((data, index) => (
                <div key={index} className='text-white hover:text-gray-400 flex flex-col items-start justify-end'>
                    <span className='mx-2'>
                        <a key={index} href ={data.url} className='text-white hover:text-gray-400'>
                            <img src={data.icon} alt={data.name} className='w-12 h-12 bg-white rounded' />
                             <p className='text-sm'>{data.name}</p>
                        </a>
                    </span>
                </div>
            ))}            
        </footer>   
        <div className='bg-black text-white text-center flex justify-center py-10'>
            <p className='text-white'>© 2024 All rights reserved</p>
        </div>
      
    </div>
  )
}


export default SectionWrapper(Footer, "");
