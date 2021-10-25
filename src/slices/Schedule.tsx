import { ScheduleFragment } from '#graphql';
import { Badge } from '@components/Badge';
import { classNames } from '@utils/classnames';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import relativeTime from 'dayjs/plugin/relativeTime';
import _ from 'lodash';
import React, { FunctionComponent, useState } from 'react';
import { RiTimeLine } from 'react-icons/ri';

dayjs.extend(isBetween);
dayjs.extend(relativeTime);

interface ScheduleSliceProps extends ScheduleFragment {}

export const ScheduleSlice: FunctionComponent<ScheduleSliceProps> = ({
  title,
  events,
}) => {
  const [selected, setSelected] = useState<number>();

  const days = React.useMemo(() => {
    const eventsWithDay = events?.map((event) => ({
      ...event,
      day: dayjs(event?.startTime)?.startOf('day')?.valueOf(),
    }));

    const groupedByDay = _.groupBy(
      eventsWithDay,
      (item: typeof eventsWithDay[0]) => item?.day
    );

    const isToday = Object.keys(groupedByDay)?.find(
      (item) => Number(item) === dayjs()?.startOf('day')?.valueOf()
    );

    if (isToday) {
      setSelected(Number(isToday));
    } else {
      setSelected(Number(Object.keys(groupedByDay)?.[0]));
    }

    return groupedByDay;
  }, [events]);

  return (
    <div className='container' id='schedule'>
      <h2 className='text-3xl font-extrabold tracking-tight text-center sm:text-4xl'>
        {title}
      </h2>
      <div className='mt-12'>
        <div className='border-b border-gray-200'>
          <nav
            className='flex items-center px-4 -mb-px space-x-8 overflow-scroll md:justify-center no-scrollbar'
            aria-label='Tabs'
          >
            {Object.keys(days).map((date: string) => {
              const diff = dayjs(Number(date)).diff(
                dayjs()?.startOf('day'),
                'hours'
              );

              const isPassed = diff < 0;

              return (
                <button
                  onClick={() => setSelected(Number(date))}
                  key={date}
                  className={classNames(
                    selected === Number(date) ? 'border-blue-400' : '',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex flex-col items-center'
                  )}
                >
                  <span
                    className={classNames(
                      isPassed
                        ? 'text-gray-500'
                        : selected === Number(date)
                        ? 'text-gray-800'
                        : 'text-gray-600',
                      'text-base md:text-lg'
                    )}
                  >
                    {dayjs(Number(date))?.format('dddd')}
                  </span>
                  <span
                    className={classNames(
                      isPassed
                        ? 'text-gray-500'
                        : selected === Number(date)
                        ? 'text-gray-900'
                        : 'text-gray-700',
                      'text-3xl  md:text-4xl'
                    )}
                  >
                    {dayjs(Number(date))?.format('DD MMM')}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      <div className='grid gap-4 py-5 md:grid-cols-2 lg:grid-cols-3'>
        {days?.[selected || 0]?.map((item, idx, arr) => {
          const nextEvent = arr[idx + 1];

          const endTime = item?.endTime || nextEvent?.startTime;

          const isBetween = dayjs().isBetween(item?.startTime, endTime);

          console.log(item?.endTime);

          const diff = dayjs(item?.startTime).diff(dayjs(), 'minutes');

          const isSoon = diff > 0 && diff < 60;

          return (
            <div
              key={item?.id}
              className={classNames(
                isSoon ? 'border-yellow-400' : isBetween && 'border-blue-400',
                'p-4 space-y-4 border-2 flex flex-col border-gray-200 rounded'
              )}
            >
              {isBetween ? (
                <div>
                  <Badge variant='blue'>Current</Badge>
                </div>
              ) : diff < 0 ? (
                <div>
                  <Badge variant='gray'>Ended</Badge>
                </div>
              ) : (
                isSoon && (
                  <div>
                    <Badge variant='yellow' className='capitalize'>
                      {dayjs(item?.startTime).fromNow()}
                    </Badge>
                  </div>
                )
              )}
              <div className='flex flex-col flex-1 space-y-1'>
                <h4 className='text-2xl font-bold text-gray-900'>
                  {item?.title}
                </h4>
                {item?.subtitle && (
                  <p className='text-gray-600'>{item?.subtitle}</p>
                )}
              </div>
              <div className='flex items-center space-x-2'>
                <RiTimeLine
                  className={classNames(
                    isSoon
                      ? 'text-yellow-500'
                      : diff > 0 || isBetween
                      ? 'text-blue-500'
                      : 'text-gray-600',
                    'w-5 h-5 '
                  )}
                />
                <p className='font-bold text-gray-800'>
                  {[
                    dayjs(item?.startTime)?.format('hh:mm a'),
                    endTime && dayjs(endTime)?.format('hh:mm a'),
                  ]
                    ?.filter((item) => !!item)
                    ?.join(' - ')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
