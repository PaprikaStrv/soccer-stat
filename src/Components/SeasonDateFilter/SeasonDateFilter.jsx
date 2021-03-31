import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { setSearchResult } from "./../../Redux/search-reducer";

const SeasonDateFilter = (props) => {
  const onSubmit = (values) => {
    props.setSearchResult(values.seasonDate);
  };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="seasonDate" component="select" multiple>
                <option value="2020">2020-2021</option>
                <option value="2019">2019-2020</option>
                <option value="2018">2018-2019</option>
              </Field>
            </div>
            <button type="submit">Найти</button>
          </form>
        )}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setSearchResult })(SeasonDateFilter);
