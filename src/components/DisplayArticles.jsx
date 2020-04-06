import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSingleArticle } from "../state/actions/articleAction";
import { useTranslation } from "react-i18next";

const DisplayArticles = (props) => {
  const { t } = useTranslation();
  const showArticle = (articleId) => {
    props.fetchSingleArticle(articleId);
  };
  let articles;
  if (props.selectedCategory) {
    articles = props.articles.filter((article) => {
      return article.category === props.selectedCategory && article;
    });
  } else {
    articles = props.articles;
  }

  let articleDisplay = articles.map((article) => {
    return (
      <div id={`article-${article.id}`} key={article.id}>
        <div class="ui two cards">
          <div id="cards" class="ui card">
            <div class="image">
              <img src={article.image} alt={`${article.title}-image`} />
            </div>
            <div class="content">
              <div class="header" id="title">
                {article.title}
              </div>
              <div class="meta" id="snippet">
                {article.snippet}
              </div>
              <button
                class="ui blue inverted button"
                id="open-article"
                onClick={() => showArticle(article.id)}
                key={article.id}
              >
                {" "}
                {t("Read more")}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div id="article-list">{articleDisplay}</div>;
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    selectedCategory: state.selectedCategory,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleArticle: bindActionCreators(fetchSingleArticle, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticles);
