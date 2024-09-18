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
    component: SidebarChild,
  },
  {
    name: 'Distribute',
    href: '#',
    icon: SparklesIcon,
    current: false,
    component: SidebarChild,
  },
  {
    name: 'Collect',
    href: '#',
    icon: NewspaperIcon,
    current: false,
    component: SidebarChild,
  },
  {
    name: 'Analyse',
    href: '#',
    icon: ChartPieIcon,
    current: false,
    component: SidebarChild,
  },
];

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
      {selectedItem && (
        <div className='mt-4 bg-cyan-100'>
          <selectedItem.component />
        </div>
      )}
    </div>
  );
}
