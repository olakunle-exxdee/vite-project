import React, { useState } from 'react';
import {
  BuildingOffice2Icon,
  SparklesIcon,
  NewspaperIcon,
  ChartPieIcon,
} from '@heroicons/react/24/solid';
import SidebarChild from './SidebarChild';

const navigation = [
  {
    name: 'Create',
    href: '#',
    icon: BuildingOffice2Icon,
    current: true,
    component: () => (
      <SidebarChild
        title='Create'
        subheading='Innovative Survey Creation'
        description='Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.'
        buttonText='Get started free'
      />
    ),
  },
  {
    name: 'Distribute',
    href: '#',
    icon: SparklesIcon,
    current: false,
    component: () => (
      <SidebarChild
        title='Distribute'
        subheading='Effective Distribution Tools'
        description='Distribute your surveys easily and reach your audience effectively with our powerful distribution tools.'
        buttonText='Learn more'
      />
    ),
  },
  {
    name: 'Collect',
    href: '#',
    icon: NewspaperIcon,
    current: false,
    component: () => (
      <SidebarChild
        title='Collect'
        subheading='Efficient Data Collection'
        description='Collect responses efficiently and analyze the data with our advanced collection tools.'
        buttonText='Start collecting'
      />
    ),
  },
  {
    name: 'Analyse',
    href: '#',
    icon: ChartPieIcon,
    current: false,
    component: () => (
      <SidebarChild
        title='Analyse'
        subheading='Advanced Data Analysis'
        description='Analyze your survey data with our sophisticated analytics tools and gain valuable insights.'
        buttonText='Analyze now'
      />
    ),
  },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(
    navigation.find((item) => item.current)
  );

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: {
      name: string;
      href: string;
      icon: React.ForwardRefExoticComponent<
        React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }
      >;
      current: boolean;
      component: () => React.JSX.Element;
    }
  ) => {
    event.preventDefault();
    console.log(item);

    if (item) {
      navigation.forEach((navItem) => {
        navItem.current = navItem.name === item.name;
      });
    }

    setSelectedItem(item);
  };

  return (
    <div className='flex flex-col'>
      <div className='text-center mb-10'>
        <p className='inline text-[8px] uppercase font-bold text-cyan-400  bg-cyan-50 px-2.5 py-1.5 rounded-2xl'>
          built for people
        </p>

        <h1 className='text-[28px] mb-5 mt-3 font-normal font-plusJakartaSans'>
          <span className='font-bold'>Easy</span> for beginners.
          <span className='font-bold'> Powerful</span> for experts.
        </h1>
      </div>
      <nav className='flex flex-1 flex-row justify-center font-plusJakartaSans'>
        <ul
          role='list'
          className='flex flex-1 flex-wrap  space-x-2 xl:flex-nowrap '>
          {navigation.map((item) => (
            <li key={item.name} className=' w-full sm:px-0 pb-10 xl:px-20'>
              <a
                href={item.href}
                onClick={(event) => handleClick(event, item)}
                className={classNames(
                  item.current
                    ? 'bg-gray-50 text-cyan-500'
                    : 'text-gray-700 hover:text-cyan-500 ',
                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                )}>
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-cyan-600'
                      : 'text-gray-400 group-hover:text-cyan-500',
                    'h-6 w-6 shrink-0'
                  )}
                  aria-hidden='true'
                />
                {item.name}
              </a>
              {item.current ? (
                <span className='block h-1 bg-cyan-500'></span>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      {selectedItem ? (
        <div className='mt-4 bg-cyan-100'>{selectedItem.component()}</div>
      ) : null}
    </div>
  );
}
