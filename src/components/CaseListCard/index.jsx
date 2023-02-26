import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Avatar } from '../Avatar';
import { caseTypesSettings } from '../../config';
import { getHighlightedText } from '../../utils/getHighlightedText';
import { getInitials } from '../../utils/getInitials';
import Card from '../Card';

const CaseListCard = ({ item, query, children, link, handleOnDblclick }) => {
  const [copied, setIsCopied] = useState('false');

  const handleInfoCopy = () => {
    setIsCopied('true');
    setTimeout(() => {
      setIsCopied('false');
    }, 1500);
  };

  return (
    <a
      href={link}
      onDoubleClick={(evt) => handleOnDblclick(evt)}
    >
      <Card variant='grayShadowless' classname='p-4 flex grow items-center' >
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col items-start gap-2'>
            <p
              className='shrink-0 font-medium text-base text-neutral-800 dark:text-neutral-200 flex flex-wrap gap-4 justify-start items-center text-left'>
              <Avatar
                size='8'
                shape='circle'
                name={item?.CASE_TYPE}
                color={caseTypesSettings[item?.CASE_TYPE].color}
              />
              <span className='line-clamp-1 min-w-min w-40'>{getHighlightedText(item?.CASE_NUMBER, query)}</span>
              <CopyToClipboard
                text={`${item?.CASE_NUMBER}, ${item?.JUDGE_NAME}, ${item?.PARTS_FIO}`}
                onCopy={() => handleInfoCopy()}
              >
                <button
                  className='relative bg-transparent border-0 ml-1 p-1 shrink-0'
                  type='button'
                  title={copied === 'false' ? 'Скопировать информацию' : 'Скопировано!'}
                >
                  {copied === 'false' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5 text-grey-300'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5 text-green-500'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  )}
                </button>
              </CopyToClipboard>
            </p>
            <span className='text-sm text-indigo-700 dark:text-indigo-300'>{getInitials(item?.JUDGE_NAME)}</span>
            <p
              className='mt-1 text-base text-neutral-700 dark:text-neutral-300 flex flex-wrap line-clamp-1 justify-start items-center text-left'>
              {getHighlightedText(item?.PARTS_FIO, query)}
            </p>
          </div>
          <div className='flex flex-col items-end shrink-0 gap-1 h-full grow-0'>{children}</div>
        </div>
      </Card>
    </a>
  );
};

CaseListCard.propTypes = {
  item: PropTypes.object.isRequired,
  query: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.string,
  handleOnDblclick: PropTypes.func,
};

export default CaseListCard;
