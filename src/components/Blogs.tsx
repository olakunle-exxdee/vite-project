import blog45 from '../assets/blog45.png';
import blog46 from '../assets/blog46.png';
import blog47 from '../assets/blog47.png';
const posts = [
  {
    id: 1,
    title: 'Boost Your Conversion Rate',
    href: '#',
    description:
      'Discover comprehensive strategies to significantly boost your conversion rate. This article delves into various techniques such as optimizing your landing pages',
    description1:
      'Enhancing user experience, and leveraging data analytics to turn visitors into loyal customers. Learn how to implement A/B testing, create compelling calls-to-action, and utilize customer feedback to continuously improve your conversion funnel. Additionally',
    imageUrl: blog45,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 2,
    title: 'Effective Marketing Strategies',
    href: '#',
    description:
      'Explore in-depth methods to enhance your website’s conversion rate. This post covers essential topics such as user interface design, persuasive copywriting.',
    description1:
      'The importance of mobile optimization. Gain insights into how to effectively use social proof, streamline the checkout process, and reduce bounce rates.',
    imageUrl: blog46,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 3,
    title: 'Advanced Data Analysis Techniques',
    href: '#',
    description:
      'Uncover advanced techniques to maximize your conversion rate. This article provides a detailed guide on leveraging behavioral data. ',
    description1:
      'Personalizing user experiences, and implementing retargeting campaigns. Learn how to craft high-converting landing pages, optimize your site’s speed.',
    imageUrl: blog47,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
  // More posts...
];
export default function Blogs() {
  return (
    <div className='relative'>
      <div className='mx-auto w-[1410px] h-[475px]  sm:bg-transparent xl:bg-[#EDFEFF] absolute transform translate-y-full'></div>
      <div className=' py-24 sm:py-32 font-plusJakartaSans xl:relative '>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <p className='inline text-[8px]  uppercase font-bold text-cyan-400  bg-cyan-50 px-2.5 py-1.5 rounded-2xl'>
              Resources
            </p>
            <h2 className='text-4xl text-center font-normal mt-6 text-gray-900 '>
              <span className='font-bold'>Stay</span> in the{' '}
              <span className='font-bold'>know</span>
            </h2>
          </div>
          <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {posts.map((post) => (
              <article
                key={post.id}
                className='flex flex-col items-start justify-between bg-white px-4 pb-8'>
                <div className='relative w-full'>
                  <img
                    src={post.imageUrl}
                    alt=''
                    className='aspect-[16/9] w-full  bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[2/1]'
                  />
                  <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
                </div>
                <div className='max-w-xl'>
                  <div className='mt-8 flex items-center gap-x-4 text-xs'>
                    <time dateTime={post.datetime} className='text-gray-500'>
                      {post.date}
                    </time>
                  </div>
                  <div className='group relative'>
                    <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                      <a href={post.href}>
                        <span className='absolute inset-0' />
                        {post.title}
                      </a>
                    </h3>
                    <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                      {post.description}
                    </p>
                    <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                      {post.description1}
                    </p>
                  </div>
                  <div className='flex flex-1 gap-4 mt-12'>
                    <div className=''>
                      <a
                        href='#'
                        className='bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500'>
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
