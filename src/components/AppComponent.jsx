import React from "react";
import AddLink from "../containers/Urls/AddLink";
import PostsContainer from "../containers/Posts/PostsContainer";
import InputwSearchContainer from "../containers/Keywords/InputwSearchContainer";
import UrlsContainer from "../containers/Urls/UrlsContainer";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import KeywordsContainer from "../containers/Keywords/KeywordsContainer";
import { Layout } from "../componentStyle/Layout";
import { NavigationBar } from "../componentStyle/NavigationBar";
export default function AppComponent({ store }) {
  return (
    <>
      <Provider store={store}>
      <NavigationBar/>
        <Layout>
          <Router>
            <Route path="/settings" exact component={AddLink} />
            <Route path="/settings" exact component={UrlsContainer} />
            <Route path="/keywords" exact component={InputwSearchContainer} />
            <Route path="/keywords" exact component={KeywordsContainer} />
            <Route path="/" exact component={PostsContainer} />
          </Router>
        </Layout>
      </Provider>
    </>
  );
}
