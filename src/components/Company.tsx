import cap from '../assets/capgemini.svg';
import biocon from '../assets/biocon.svg';
import ck from '../assets/ck.svg';
import dell from '../assets/dell.svg';
import shell from '../assets/shell.svg';
import yamaha from '../assets/yamaha.svg';
import { CheckIcon } from '@heroicons/react/20/solid';

const Company = () => {
  return (
    <div className='font-plusJakartaSans bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <p className='text-center uppercase text-xs bg-cyan-50 font-black text-cyan-400 leading-8 w-32 m-auto rounded-2xl'>
          Our Customers
        </p>

        <h2 className='text-center text-3xl  leading-8 text-gray-900 mt-4'>
          Trusted by <span className='font-semibold'>100,000+ customers</span>{' '}
          in 90+ countries
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6'>
          <img
            alt='Capgemini'
            src={cap}
            width={100}
            height={48}
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
          />
          <img
            alt='Yamaha'
            src={yamaha}
            width={100}
            height={48}
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
          />
          <img
            alt='Biocon'
            src={biocon}
            width={100}
            height={48}
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
          />
          <img
            alt='Dell'
            src={dell}
            width={100}
            height={48}
            className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
          />
          <img
            alt='Ck birla group'
            src={ck}
            width={100}
            height={48}
            className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
          />
          <img
            alt='Shell'
            src={shell}
            width={100}
            height={48}
            className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
          />
        </div>
        <ul
          role='list'
          className='mt-8 w-1/2 m-auto  flex justify-between text-sm  leading-6 text-gray-600'>
          <div className='mx-auto mt-8 max-w-xl sm:mt-20 lg:mt-24 lg:max-w-none'>
            <dl className='grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
              <li className='flex gap-x-3'>
                <CheckIcon
                  aria-hidden='true'
                  className='-mr-1 h-6 w-5 flex-none text-cyan-600'
                />

                <span className='font-bold text-cyan-400'>18281</span>
                <span>signed up</span>
              </li>
              <li className='flex gap-x-3'>
                <CheckIcon
                  aria-hidden='true'
                  className='-mr-1 h-6 w-5  flex-none text-cyan-600'
                />
                <span className='font-bold text-cyan-400'>GDPR</span>&
                <span className='font-bold text-cyan-400'>CCPA</span>ready
              </li>
              <li className='flex gap-x-3'>
                <CheckIcon
                  aria-hidden='true'
                  className=' -mr-1 h-6 w-5 flex-none text-cyan-600'
                />
                <span className='font-bold text-cyan-400 inline'>
                  Leader@G2
                </span>
                Summer
              </li>
            </dl>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Company;
