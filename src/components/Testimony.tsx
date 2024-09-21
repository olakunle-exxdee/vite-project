import computer1 from '../assets/computer1.png';
import lady from '../assets/lady.png';
import paypal from '../assets/paypal.svg';

const Testimony = () => {
  return (
    <div className=''>
      <div className='font-plusJakartaSans'>
        <div className='font-plusJakartaSansmx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4'>
          <div className='mx-auto max-w-2xl px-4 lg:max-w-none'>
            <div className='grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2'>
              <div>
                <p className='inline text-[8px]  uppercase font-bold text-cyan-400  bg-cyan-50 px-2.5 py-1.5 rounded-2xl'>
                  Testimonials
                </p>
                <h2 className='text-4xl font-normal mt-6 text-gray-900 w-[230px] '>
                  See how customers{' '}
                  <span className='font-bold'>drive impact</span>
                </h2>

                <div className='flex flex-1 gap-4 my-10'>
                  <div className=''>
                    <a
                      href='#'
                      className='bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500'>
                      See case studies
                    </a>
                  </div>
                </div>
              </div>
              <div className='relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg '>
                <img src={lady} alt='' className='object-cover object-center' />

                <div className='absolute inset-40 bg-cyan-500 h-16 w-16 rounded-full flex justify-center items-center'>
                  <svg
                    width='19'
                    height='23'
                    viewBox='0 0 19 23'
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M19 11.5L0.25 22.3253L0.25 0.674683L19 11.5Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <div className='absolute inset-56 hidden'>
                  <div className='bg-[#EDFEFF] w-full'>
                    <img src={paypal} alt='paypal' />
                    <p className='text-base font-plusJakartaSans leading-8 text-[#676767] w-[359px] my-5 '>
                      "I used to have a bunch of different tools I had to pay
                      for, with Circle you get everything in one bundle."
                    </p>
                    <p className='text-base font-plusJakartaSans font-bold leading-8'>
                      Michel Dedrick
                    </p>
                    <p className='text-base font-plusJakartaSans leading-8 text-[#676767] w-[359px] '>
                      Senior Conversion Optimizer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative my-10'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-white px-2 text-sm text-gray-500'></span>
        </div>
      </div>
      <div className='font-plusJakartaSans'>
        <div className='font-plusJakartaSansmx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4'>
          <div className='mx-auto max-w-2xl px-4 lg:max-w-none'>
            <div className='grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2'>
              <div>
                <h2 className='text-4xl font-normal  text-gray-900 w-[400px] '>
                  Looking for a <span className='font-bold'>solution</span> for
                  your business?
                </h2>
                <p className='my-8 font-plusJakartaSans leading-8 text-[#676767] w-[359px]'>
                  Check out Sogolytics enterprise feedback and experience
                  management platform.
                </p>

                <div className='flex flex-1 gap-4 my-4'>
                  <div className=''>
                    <a
                      href='#'
                      className='bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500'>
                      Learn more
                    </a>
                  </div>
                  <div className=''>
                    <a
                      href='#'
                      className='text-cyan-500  outline px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-cyan-500 hover:text-white ease-in'>
                      Schedule a consultation
                    </a>
                  </div>
                </div>
              </div>
              <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg '>
                <img
                  src={computer1}
                  alt=''
                  className='object-cover object-center'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
