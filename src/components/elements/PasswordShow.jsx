import {forwardRef, Fragment, useState} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {Eye, EyeOff} from "react-feather";
import {Input, InputGroup, InputGroupText, Label} from "reactstrap";

/** Инпут с кнопкой Показать/скрыть пароль
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{}> & React.RefAttributes<unknown>>}
 */
const InputPasswordToggle = forwardRef((props, ref) => {
    const {
        label,
        hideIcon,
        showIcon,
        visible,
        className,
        htmlFor,
        placeholder,
        iconSize,
        inputClassName,
        invalid,
        ...rest
    } = props

    /** Стейт */
    const [inputVisibility, setInputVisibility] = useState(visible)

    /** Рендеринг значка, на основе видимости */
    const renderIcon = () => {
        const size = iconSize ? iconSize : 14;

        if (inputVisibility === false) {
            return hideIcon ? hideIcon : <Eye size={size}/>;
        } else {
            return showIcon ? showIcon : <EyeOff size={size}/>;
        }
    }

    return (
        <Fragment>
            {label ? (
                <Label className="form-label" for={htmlFor}>
                    {label}
                </Label>
            ) : null}
            <InputGroup
                className={classnames({
                    [className]: className,
                    "is-invalid": invalid
                }, "mt-1 flex rounded-md shadow-sm")}
            >
                <Input
                    ref={ref}
                    invalid={invalid}
                    type={inputVisibility === false ? "password" : "text"}
                    placeholder={placeholder ? placeholder : "············"}
                    className={classnames({
                        [inputClassName]: inputClassName
                    }, "block w-full flex min-w-0 px-3 py-2 rounded-none rounded-l-md bg-gray-100 dark:bg-gray-800 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")}
                    /*eslint-disable */
                    {...(label && htmlFor
                        ? {
                            id: htmlFor
                        }
                        : {})}
                    {...rest}
                    /*eslint-enable */
                />
                <InputGroupText
                    className="cursor-pointer inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm"
                    onClick={() => setInputVisibility(!inputVisibility)}>
                    {renderIcon()}
                </InputGroupText>
            </InputGroup>
        </Fragment>
    )
})

export default InputPasswordToggle;

/** PropTypes */
InputPasswordToggle.propTypes = {
    invalid: PropTypes.bool,
    hideIcon: PropTypes.node,
    showIcon: PropTypes.node,
    visible: PropTypes.bool,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    iconSize: PropTypes.number,
    inputClassName: PropTypes.string,
    label(props, propName) {
        /** Если лейбл задан, а htmlFor не задан, вывести ошибку */
        if (props[propName] && props["htmlFor"] === "undefined") {
            throw new Error("htmlFor обязателен, если задана метка")
        }
    },
    htmlFor(props, propName) {
        /** Если htmlFor задан, а лейбл не задан, вывести ошибку */
        if (props[propName] && props["label"] === "undefined") {
            throw new Error("метка обязательна, если задан htmlFor")
        }
    }
}

InputPasswordToggle.defaultProps = {
    visible: false
}