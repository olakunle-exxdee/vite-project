import image from '../assets/image.png';
export default function Section() {
  return (
    <div className='relative my-8'>
      <div className='relative h-80 overflow-hidden  md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2'>
        <img className='h-full w-full object-cover' src={image} alt='' />
      </div>
      <div className='relative text-black mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40'>
        <div className='pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32'>
          <>
            <p className='inline text-[8px] uppercase font-bold text-cyan-400  bg-cyan-50 px-2.5 py-1.5 rounded-2xl'>
              Our Promise
            </p>

            <h1 className='text-[28px] mb-5 mt-3 font-bold font-plusJakartaSans'>
              <span className='font-normal'>Tool </span> built for people.
            </h1>
          </>
          <p className='text-base font-plusJakartaSans '>
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom.
          </p>
          <p className='mt-6 text-base font-plusJakartaSans  '>
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom. Circle has 100+ integrations with tools you
            already use and love.
          </p>
          <div className='mt-8'>
            <div className='mt-10 flex  gap-x-6'>
              <a
                href='#'
                className='bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500'>
                Get started free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
