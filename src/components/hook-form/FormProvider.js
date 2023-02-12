import PropTypes from 'prop-types';
import { FormProvider as Form } from 'react-hook-form';

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
};

export default function FormProvider({ children, onSubmit, methods, ...props }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} className={props.className ? props.className : ''}>{children}</form>
    </Form>
  );
}
