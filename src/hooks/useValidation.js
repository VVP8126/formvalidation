import { useEffect, useState } from "react";
import { IS_EMPTY, MIN_LENGTH, MAX_LENGTH, IS_EMAIL, RE_EMAIL } from './../utils/constants.js';

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [isMinLn, setIsMinLn] = useState(false);
    const [isMaxLn, setIsMaxLn] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isFrmVl, setIsFrmVl] = useState(false);

    useEffect(
        () => {
            for (const v in validations) {
                switch (v) {
                    case MIN_LENGTH:
                        value.length < validations[v] ? setIsMinLn(true) : setIsMinLn(false);
                        break;
                    case MAX_LENGTH:
                        value.length > validations[v] ? setIsMaxLn(true) : setIsMaxLn(false);
                        break;
                    case IS_EMPTY:
                        value ? setIsEmpty(false) : setIsEmpty(true);
                        break;
                    case IS_EMAIL:
                        !RE_EMAIL.test(value.toLowerCase()) ? setIsEmail(true) : setIsEmail(false);
                        break;
                    default:
                        break;
                }
            }
        },
        [value]
    );

    useEffect(
        () => {
            setIsFrmVl(!(isEmpty || isMinLn || isMaxLn || isEmail));
            /* if(isEmpty || isMinLn || isMaxLn || isEmail) {
                setIsFrmVl(false);
            } else {
                setIsFrmVl(true);
            } */
        },
        [isEmpty, isMinLn, isMaxLn, isEmail]
    );

    return { isEmpty, isMinLn, isMaxLn, isEmail, isFrmVl };
}
export default useValidation;
