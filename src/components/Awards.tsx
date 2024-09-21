import award1 from '../assets/award1.png';
import award2 from '../assets/award2.png';
import award3 from '../assets/award3.png';
import award4 from '../assets/award4.png';
import award5 from '../assets/award5.png';
import award6 from '../assets/award6.png';

const awardees = [
  {
    text: 'Market leader across',
    text1: '18 categories',
    imageUrl: award1,
    bgColor: 'bg-award1',
  },
  {
    text: 'Most loved SaaS tool',
    text1: 'in 2021',
    imageUrl: award2,
    bgColor: 'bg-award2',
  },
  {
    text: 'Category leader in',
    text1: '2022',
    imageUrl: award3,
    bgColor: 'bg-award3',
  },
  {
    text: 'Most recommended',
    text1: 'tool in 2021',
    imageUrl: award4,
    bgColor: 'bg-award4',
  },
  {
    text: 'Champion in survey',
    text1: 'tool 2022',
    imageUrl: award5,
    bgColor: 'bg-award5',
  },
  {
    text: 'Top performer spring',
    text1: '2021',
    imageUrl: award6,
    bgColor: 'bg-award6',
  },
];

const Awards = () => {
  return (
    <div className='my-52'>
      <div className='text-center mb-14'>
        <p className='inline text-[8px] uppercase font-bold text-cyan-400  bg-cyan-50 px-2.5 py-1.5 rounded-2xl'>
          Awards
        </p>

        <h1 className='text-base xl:text-[28px] mb-5 mt-3 font-bold font-plusJakartaSans'>
          <span className='font-normal'>An</span> award winning{' '}
          <span className='font-normal'>platform</span>, loved by customers.
        </h1>
      </div>
      <div className='grid grid-cols-1 mx-10 gap-4 xl:grid-cols-3'>
        {awardees.map((awardee, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center space-y-3 rounded-md  ${awardee.bgColor} px-6 py-6`}>
            <div className='flex-shrink-0'>
              <img
                className='h-10 w-10 rounded-full'
                src={awardee.imageUrl}
                alt=''
              />
            </div>
            <div className='min-w-0 flex-1 text-center text-base font-plusJakartaSans '>
              <a href='#' className='focus:outline-none'>
                <span className='absolute inset-0' aria-hidden='true' />
                <p className='text-sm font-bold text-gray-900 '>
                  {awardee.text}
                </p>
                <p className='text-sm font-bold text-gray-900'>
                  {awardee.text1}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
