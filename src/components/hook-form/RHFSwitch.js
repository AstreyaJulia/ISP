import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import React from "react";
import { Switch } from "@headlessui/react";
import { Tooltip } from "react-tooltip";
import Typography from "../Typography";
import { classNames } from "../../utils/classNames";

export default function RHFSwitch({
                                    name,
                                    label,
                                    color,
                                    defaultValue,
                                    enabledLabel,
                                    disabledLabel,
                                    checkedValue,
                                    onChange,
                                    className,
                                    size,
  disabled
                                  }) {
  const { control } = useFormContext();

  const inputOptions = {
    sizes: {
      4: {
        classNames: {
          input: "h-2 w-2",
          container: "h-4 w-7",
          transform: "translate-x-4"
        }
      },
      5: {
        classNames: {
          input: "h-3 w-3",
          container: "h-5 w-9",
          transform: "translate-x-5"
        }
      },
      6: {
        classNames: {
          input: "h-4 w-4",
          container: "h-6 w-11",
          transform: "translate-x-6"
        }
      }
    },
    colors: {
      orange: {
        classNames: {
          input: "bg-orange-600 dark:bg-orange-500"
        }
      },
      yellow: {
        classNames: {
          input: "bg-yellow-600 dark:bg-yellow-500"
        }
      },
      lime: {
        classNames: {
          input: "bg-lime-600 dark:bg-lime-500"
        }
      },
      emerald: {
        classNames: {
          input: "bg-emerald-600 dark:bg-emerald-500"
        }
      },
      teal: {
        classNames: {
          input: "bg-teal-600 dark:bg-teal-500"
        }
      },
      cyan: {
        classNames: {
          input: "bg-cyan-600 dark:bg-cyan-500"
        }
      },
      blue: {
        classNames: {
          input: "bg-blue-600 dark:bg-blue-500"
        }
      },
      indigo: {
        classNames: {
          input: "bg-indigo-600 dark:bg-indigo-500"
        }
      },
      pink: {
        classNames: {
          input: "bg-pink-600 dark:bg-pink-500"
        }
      }
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) =>
// eslint-disable-next-line

        (
          <div className={className || ""}>
            {label ? (
              <label htmlFor={name} className="flex flex-col">
                <span className="sr-only" />
                {label}
              </label>
            ) : (
              ""
            )}
            <div>
              <div className="flex items-center gap-3 shrink-0">
                <Switch
                  {...field}
                  disabled={disabled}
                  checked={field.value.toString() === checkedValue.toString()}
                  onChange={(evt) => onChange(evt)}
                  className={classNames(field.value.toString() === checkedValue.toString() ? inputOptions.colors[color].classNames.input : "bg-gray-200 dark:bg-gray-700", inputOptions.sizes[size].classNames.container, "relative inline-flex items-center rounded-full shadow-sm shrink-0")
                  }
                >
                <span
                  className={classNames(field.value.toString() === checkedValue.toString() ? inputOptions.sizes[size].classNames.transform : "translate-x-1", inputOptions.sizes[size].classNames.input, "inline-block transform rounded-full bg-white transition")}
                />
                </Switch>
                <Typography
                  variant="label">{field.value.toString() === checkedValue.toString() ? enabledLabel : disabledLabel}</Typography>
              </div>

              {error ? (
                <div className="absolute inset-y-0 right-8 flex items-center pointer-events-none">

                  <Tooltip anchorId={name} content={error?.message} place="top" />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

        )
      }
    />
  );
}

RHFSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultValue: PropTypes.string,
  size: PropTypes.oneOf(["4", "5", "6"]),
  color: PropTypes.oneOf(["orange", "yellow", "lime", "emerald", "teal", "cyan", "blue", "indigo", "pink"]),
  label: PropTypes.node,
  enabledLabel: PropTypes.node,
  disabledLabel: PropTypes.node,
  checkedValue: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  classnames: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

RHFSwitch.defaultProps = {
  size: "6",
  color: "indigo",
  enabledLabel: "",
  disabledLabel: "",
  onChange: () => null,
  classnames: "",
  disabled: false,
  className: ''
};