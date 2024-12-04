import { SearchWrapper, SearchInput } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value !== "" ? target.value : undefined,
        });

       
    };

    return (
        <SearchWrapper>
            <SearchInput
                value={query || ""}
                onChange={onInputChange}
                placeholder="Wyszukaj zadanie. "
            />
        </SearchWrapper>
    )

};

export default Search