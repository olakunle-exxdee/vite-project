import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.svg';
import heroImage from '../assets/heroImage.png';

const navigation1 = [
  { name: 'Features', href: '#' },
  {
    name: 'Pricing',
    href: '#',
  },
  {
    name: 'Testimonials',
    href: '#',
  },
  {
    name: 'Resources',
    href: '#',
  },
];
const navigation2 = [
  { name: 'Company', href: '#' },
  { name: 'Contacts', href: '#' },
  {
    name: ' Login',
    href: '#',
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='bg-white flex items-center justify-center p-6 lg:px-8'
          aria-label='Global'>
          <div className='flex w-96 lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-start justify-start rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}>
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation1.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900'>
                {item.name}
              </a>
            ))}
            <div className='flex lg:flex-1 mx-16 '>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Circle</span>
                <img className='h-8 w-auto' src={logo} alt='' />
              </a>
            </div>
            {navigation2.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 text-gray-900 ${
                  item.name === 'Login'
                    ? 'bg-amber-700 pa outline-double outline-2 outline-blue-500'
                    : ''
                }`}>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Circle</span>
                <img className='h-8 w-auto' src={logo} alt='logo' />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation1.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      {item.name}
                    </a>
                  ))}
                  {navigation2.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='relative isolate pt-14 bg-cyan-50'>
        <div className='py-24 sm:py-32 lg:pb-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-6xl font-bold font-plusJakartaSans tracking-tight text-gray-900 sm:text-6xl'>
                A powerful online engagement tool that’s intuitive and simple to
                use.
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-400'>
                With stellar one-click reports and unmatched support, see how
                Circle will make a difference in your business.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500'>
                  Get started free <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className='-mt-12'>
                <img
                  src={heroImage}
                  alt='Hero'
                  width={2432}
                  height={1442}
                  className=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
