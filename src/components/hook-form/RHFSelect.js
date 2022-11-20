import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import ReactSelect from '../ReactSelect';

export default function RHFSelect({ name, options, placeholder, isMulti, defaultValue }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <ReactSelect
          other={field}
          isMulti={isMulti}
          options={options}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={null}
        />
      )}
    />
  );
}

RHFSelect.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  isMulti: PropTypes.string,
  defaultValue: PropTypes.string,
};
