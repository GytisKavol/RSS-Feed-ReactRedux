import React from "react";
import { Field, reduxForm } from "redux-form";

let LinkForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="url"
          component="input"
          type="text"
          placeholder="URL"
        />
      </div>
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  );
};

LinkForm = reduxForm({
  form: "contact"
})(LinkForm);

export default LinkForm;
