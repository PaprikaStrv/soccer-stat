import React from 'react';
import { Form, Field } from 'react-final-form';
import s from './searchMatch.module.css';
import { connect } from 'react-redux';
import { setSearchResult } from "../../Redux/search-reducer";
  
const SearchMatch = (props) => {
  const onSubmit = (values) => {
    props.setSearchResult(values.findMatch)
};
  return (
    <div className={s.searchMatchWrapper}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={s.searchMatchForm}>
            <div>
              <Field
                name="findMatch"
                component="input"
                placeholder="Найти матч (id)"
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


export default connect(mapStateToProps, {setSearchResult})(SearchMatch);