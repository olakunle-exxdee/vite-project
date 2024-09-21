import san from '../assets/san.png';
const navigation = {
  products: [
    {
      name: `Delta`,
      href: '#',
    },
    { name: 'Sigma', href: '#' },
    { name: 'Zeta', href: '#' },
    { name: 'Alpha', href: '#' },
    { name: 'Acumen', href: '#' },
  ],
  resources: [
    { name: 'Help', href: '#' },
    { name: 'Training Videos', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Request a Demo', href: '#' },
    { name: 'Create Surveys', href: '#' },
    { name: 'Quiz Maker', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
};

export default function Example() {
  return (
    <footer className='bg-[#232323]' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 relative'>
            <img className='h-24' src={san} alt='Circle' />
            <p className='text-sm leading-6 text-gray-300 absolute inset-0 transform -translate-x-8'>
              Made with lots of ❤️ in San Francisco
            </p>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Products
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-gray-300 hover:text-white'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Resources
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-gray-300 hover:text-white'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Company
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-gray-300 hover:text-white'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-xs leading-5 text-gray-400'>
            &copy; 2024 Circle. All rights reserved.
          </p>
          <ul role='list' className='mt-6 space-x-4 flex'>
            {navigation.company.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className='text-sm leading-6 text-gray-300 hover:text-white'>
                  {item.name === 'About' ? '' : '|'} {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
