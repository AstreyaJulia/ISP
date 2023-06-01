import React from 'react';
import toast from 'react-hot-toast';
import { setSession } from './jwt';
import Toast, { toastStyles } from '../components/Toast';


const apiErrorHelper = (error) => {
  const message = error.message && error.info ? `${error.message}: ${error.info}` : error.toString();
  if (error.code?.toString() === '401') {
    setSession(null);
  }
  toast((t) => <Toast t={t} message={message} type='error' />, { className: toastStyles });
}

export default apiErrorHelper