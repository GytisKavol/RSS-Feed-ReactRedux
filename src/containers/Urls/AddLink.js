import React from "react";
import LinkForm from "../../components/Urls/UrlForm";

import { createLink, fetchURL } from "../../actions/Urls/urlsActions";
import validURL from "../../utills/checkifURL";
export default class AddLink extends React.Component {
  submit = (values, dispatch) => {
    if (validURL(values.url)) {
      dispatch(createLink(values));
      setTimeout(() => {
        dispatch(fetchURL());
      }, 100);
    } else {
      console.log("invalid URL");
    }
  };
  render() {
    return <LinkForm onSubmit={this.submit} />;
  }
}
