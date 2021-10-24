import { ScheduleFragment } from '#graphql';
import { classNames } from '@utils/classnames';
import dayjs from 'dayjs';
import React, { FunctionComponent, useState } from 'react';

interface ScheduleSliceProps extends ScheduleFragment {}

const tabs = [
  { date: 1637730000000 },
  { date: 1637816400000 },
  { date: 1637902800000 },
];

export const ScheduleSlice: FunctionComponent<ScheduleSliceProps> = ({}) => {
  const [selected, setSelected] = useState(tabs?.[0]?.date);
  return (
    <div className='container'>
      <h2 className='text-3xl font-extrabold tracking-tight text-center sm:text-4xl'>
        Conference Schedule
      </h2>
      <div className='mt-12'>
        <div className='border-b border-gray-200'>
          <nav
            className='flex items-center px-4 -mb-px space-x-8 overflow-scroll md:justify-center no-scrollbar'
            aria-label='Tabs'
          >
            {tabs.map((tab) => (
              <button
                onClick={() => setSelected(tab?.date)}
                key={tab.date}
                className={classNames(
                  selected === tab?.date ? 'border-blue-400' : '',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex flex-col items-center'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                <span
                  className={classNames(
                    selected === tab?.date ? 'text-gray-800' : 'text-gray-600',
                    'text-base md:text-lg'
                  )}
                >
                  {dayjs(tab?.date)?.format('dddd')}
                </span>
                <span className='text-3xl text-gray-900 md:text-4xl'>
                  {dayjs(tab?.date)?.format('DD MMM')}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
