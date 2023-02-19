import React from 'react';
import PropTypes from 'prop-types';
import { Quill } from 'react-quill';
import { classNames } from '../../utils/classNames';

const HEADINGS = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5', 'Heading 6'];

const headingNames = {
  'Heading 1': 'Заголовок 1',
  'Heading 2': 'Заголовок 2',
  'Heading 3': 'Заголовок 3',
  'Heading 4': 'Заголовок 4',
  'Heading 5': 'Заголовок 5',
  'Heading 6': 'Заголовок 6',
};

// Кастомные блоки
const BlockEmbed = Quill.import('blots/block/embed');

class Hr extends BlockEmbed {
  static create(value) {
    return super.create(value);
  }
}

Hr.blotName = 'hr';
Hr.tagName = 'hr';
Quill.register({
  'formats/hr': Hr,
});

export function customHrHandler() {
  const range = this.quill.getSelection();
  if (range) {
    this.quill.insertEmbed(range.index, 'hr', 'null');
  }
}

export function undoChange() {
  this.quill.history.undo();
}

export function redoChange() {
  this.quill.history.redo();
}

export const formats = [
  'align',
  'blockquote',
  'bold',
  'bullet',
  'code',
  'code-block',
  'formula',
  'header',
  'hr',
  'image',
  'indent',
  'italic',
  'link',
  'list',
  'script',
  'strike',
  'table',
  'underline',
  'video',
];

const Toolbar = ({ id, isSimple, classname }) => (
  <div id={id} className={classNames(classname)}>
    {!isSimple && (
      <div className="ql-formats pr-2 dark:border-slate-600 gap-1">
        <button type="button" className="ql-undo h-6 w-6" title="Отмена">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </button>
        <button type="button" className="ql-redo h-6 w-6" title="Повтор">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
          </svg>
        </button>
      </div>
    )}

    <div className={classNames("ql-formats border-slate-300 dark:border-slate-600 gap-1", !isSimple ? 'border-l px-2' : 'pr-2')}>
      <button type="button" className="ql-bold" title="Жирный" />
      <button type="button" className="ql-italic" title="Курсив" />
      <button type="button" className="ql-underline" title="Подчёркнутый" />
      <button type="button" className="ql-strike" title="Перечёркнутый" />
      <button type="button" className="ql-script" value="super" title="Надстрочный" />
      <button type="button" className="ql-script" value="sub" title="Подстрочный" />
    </div>

    <div className="ql-formats px-2 border-l border-slate-300 dark:border-slate-600 gap-1">
      <select className="ql-align" title="Выравнивание" />
    </div>

    <div className="ql-formats px-2 border-l border-slate-300 dark:border-slate-600 gap-1">
      <select className="ql-header" defaultValue="" title="Формат текста">
        {HEADINGS.map((heading, index) => (
          <option key={heading} value={index + 1}>
            {headingNames[heading]}
          </option>
        ))}
        <option value="">Normal</option>
      </select>
      <button type="button" className="ql-clean" title="Сбросить форматирование" />
    </div>

    <div className="ql-formats px-2 border-l border-slate-300 dark:border-slate-600 gap-1">
      <button type="button" className="ql-list" value="ordered" title="Нумерация" />
      <button type="button" className="ql-list" value="bullet" title="Маркеры" />
    </div>

    <div className="ql-formats px-2 border-l border-slate-300 dark:border-slate-600 gap-1">
      {!isSimple && <button type="button" className="ql-indent" value="-1" title="Уменьшить отступ" />}
      {!isSimple && <button type="button" className="ql-indent" value="+1" title="Увеличить отступ" />}
    </div>

    <div className="ql-formats px-2 border-l border-slate-300 dark:border-slate-600 gap-1">
      <button type="button" className="ql-hr h-6 w-6" title="Разделитель" value="hr">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
      </button>
      <button type="button" className="ql-code-block" title="Блок кода" />
      <button type="button" className="ql-blockquote" title="Цитата" />
      {!isSimple && <button type="button" className="ql-formula" title="Формула" />}
    </div>

    <div className="ql-formats px-2 border-l border-slate-300 dark:border-slate-600 gap-1">
      <button type="button" className="ql-link" title="Ссылка" />
      <button type="button" className="ql-image" title="Изображение" />
      <button type="button" className="ql-video" title="Видео" />
    </div>
  </div>
);

Toolbar.propTypes = {
  id: PropTypes.string,
  isSimple: PropTypes.bool,
  classname: PropTypes.string,
};

export default Toolbar;
