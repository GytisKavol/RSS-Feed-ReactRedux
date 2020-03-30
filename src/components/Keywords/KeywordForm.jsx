import React from "react";
import { Field, reduxForm } from "redux-form";

let KeywordForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="keyword"
          component="input"
          type="text"
          placeholder="Keyword"
        />
      </div>
      <div>
        <Field
          name="articleNumber"
          component="input"
          type="number"
          placeholder="Article number"
        />
      </div>
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  );
};

KeywordForm = reduxForm({
  form: "contact"
})(KeywordForm);

export default KeywordForm;
