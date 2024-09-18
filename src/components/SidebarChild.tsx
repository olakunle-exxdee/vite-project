import image from '../assets/computer.png';

export default function SidebarChild(name: string) {
  return (
    <div className='p-10 sm:flex flex-1 justify-evenly items-center mx-auto'>
      <div className='flex-1 basis-1/2'>
        <h1 className='text-[28px] mb-5 mt-3 font-semibold font-plusJakartaSans sm:text-[28px]'>
          {name}
        </h1>
        <p className='text-base font-plusJakartaSans font-bold leading-8'>
          Advanced research software
        </p>
        <p className='text-base font-plusJakartaSans leading-8 text-[#676767] w-[359px]'>
          Ask the right questions and get the answers you need with the most
          secure and collaborative survey platform on the market featuring
          powerful logic, sophisticated analytics, and built-in automation and
          integration.
        </p>

        <div className='mt-8'>
          <div className='mt-10 flex gap-x-6'>
            <a
              href='#'
              className='bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500'>
              Get started free
            </a>
          </div>
        </div>
      </div>
      <div className='flex-1 basis-1/2 mb-4 flex-shrink-0 sm:mb-0 sm:mr-4'>
        <img className='object-cover' src={image} alt='' />
      </div>
    </div>
  );
}
