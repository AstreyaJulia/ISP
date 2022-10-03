import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import Alert from "../components/Alert";

RoleBasedGuard.propTypes = {
  accessibleRoles: PropTypes.array, // Например ['admin', 'user']
  children: PropTypes.node
};

/**
 * @param accessibleRoles - массив разрешенных пользователей / ролей
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function RoleBasedGuard({ accessibleRoles, children }) {

  const { user } = useAuth();

  if (!accessibleRoles.includes(user.sudo)) {
    return (
    <Alert alertType='error' title='Доступ запрещён'>
      <p>У вас нет прав доступа к этой странице</p>
    </Alert>
    );
  }

  return <>{children}</>;
}
