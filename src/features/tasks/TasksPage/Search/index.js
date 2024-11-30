import { useHistory, useLocation } from "react-router-dom";
import { SearchWrapper, SearchInput } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <SearchWrapper>
            <SearchInput
                value={query || ""}
                onChange={onInputChange}
                placeholder="Wyszukaj zadnie. "
            />
        </SearchWrapper>
    )

};

export default Search