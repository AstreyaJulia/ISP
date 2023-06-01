import React from 'react';

export function getHighlightedText(text, highlight) {
  const parts = text.toString().split(new RegExp(`(${highlight})`, 'gi'));
  return highlight !== '' ? (
    <span>
      {' '}
      {parts.map((part, i) => (
        <span key={i} className={part.toLowerCase() === highlight.toLowerCase() ? 'text-highlight' : ''}>
          {part}
        </span>
      ))}{' '}
    </span>
  ) : (
    text
  );
}
