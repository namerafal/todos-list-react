import { useLocation, useHistory } from "react-router-dom";

// Hook do pobierania wartości parametru zapytania
export const useQueryParameter = (paramName) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get(paramName);
};

// Hook do zastępowania wartości parametru zapytania
export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    const replaceQueryParameter = ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined || value.trim() === "") {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return replaceQueryParameter;
};