import React from 'react';
import { Form, Field } from 'react-final-form';
import s from './searchTeam.module.css';
import { connect } from 'react-redux';
import { setSearchResult } from "../../Redux/search-reducer";
  
const SearchTeam = (props) => {
  const onSubmit = (values) => {
    props.setSearchResult(values.findTeam)
};
  return (
    <div className={s.searchTeamWrapper}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={s.searchTeamForm}>
            <div>
              <Field
                name="findTeam"
                component="input"
                placeholder="Найти команду (id)"
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


export default connect(mapStateToProps, {setSearchResult})(SearchTeam);