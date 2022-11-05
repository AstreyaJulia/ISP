import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import useAuth from '../hooks/useAuth';
import Alert from '../components/Alert';

/**
 * @param accessibleRoles - массив разрешенных ролей
 * @param accessibleProfessions - массив разрешенных профессий
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function RoleBasedGuard({ accessibleRoles, accessibleProfessions, children }) {
  const { user } = useAuth();

  if (
    (accessibleRoles && !accessibleRoles.includes(user.sudo)) ||
    (accessibleProfessions && !accessibleProfessions.includes(user.professionID))
  ) {
    return (
      <div className="p-4">
        <Alert alertType="error" title="Доступ запрещён">
          <p>У вас нет прав доступа к этой странице</p>
        </Alert>
        <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6 justify-center">
          <Link
            to="/home"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            На главную
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

RoleBasedGuard.propTypes = {
  accessibleRoles: PropTypes.array, // Например ['admin', 'user']
  children: PropTypes.node,
  accessibleProfessions: PropTypes.array,
};
