import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import Select from 'react-select'

export default function RHFSelect({ name, options, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Select {...field} options={options} {...other} />
      )}
    />
  );
}

RHFSelect.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
};