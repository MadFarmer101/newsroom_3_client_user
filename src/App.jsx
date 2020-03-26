import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryHeader from "./components/CategoryHeader";

const App = props => {
  props.fetchArticles();

  return (
    <>
      <CategoryHeader />
      <Switch>
        <Route exact path="/" component></Route>
        <Route exact path="/tech" component></Route>
        <Route exact path="/sports" component></Route>
        <Route exact path="/politics" component></Route>
      </Switch>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle,
    articleList: state.articleList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
