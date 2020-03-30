import React from "react";
import KeywordForm from "../../components/Keywords/KeywordForm";

import { createKeyword, fetchKeywords } from "../../actions/Keywords/keywordsActions";
export default class AddLink extends React.Component {
  submit = (values, dispatch) => {

      dispatch(createKeyword(values));
      setTimeout(() => {
        dispatch(fetchKeywords());
      }, 100);

  };
  render() {
    return <KeywordForm onSubmit={this.submit} />;
  }
}
