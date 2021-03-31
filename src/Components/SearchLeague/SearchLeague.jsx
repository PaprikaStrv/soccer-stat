import React from 'react';
import { Form, Field } from 'react-final-form';
import s from './searchLeague.module.css';
import { connect } from 'react-redux';
import { setSearchResult } from "./../../Redux/search-reducer";
  
const SearchLeague = (props) => {
  const onSubmit = (values) => {
    props.setSearchResult(values.findLigue)
};
  return (
    <div className={s.searchLeagueWrapper}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={s.searchLeagueForm}>
            <div>
              <Field
                name="findLigue"
                component="input"
                placeholder="Найти лигу (id)"
              />
            </div>
            <button type="submit">Найти</button>
          </form>
        )}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
    
});


export default connect(mapStateToProps, {setSearchResult})(SearchLeague);