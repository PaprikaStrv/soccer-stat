const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";

let initialState = {
  searchResult: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      return {
        ...state,
        ...action,
        searchResult: action.search,
      };

    default:
      return state;
  }
};

export const setSearchResult = (searchValue) => ({
  type: SET_SEARCH_RESULT,
  search: searchValue,
});

export default searchReducer;
