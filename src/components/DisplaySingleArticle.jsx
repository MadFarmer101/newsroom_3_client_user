import React from "react";
import { connect } from "react-redux";
import { BACK_TO_ARTICLES_LIST } from "../state/actions/actionTypes";
import FullContent from "./FullContent";
import RestrictedContent from "./RestrictedContent";
import { useTranslation } from "react-i18next";

const DisplaySingleArticle = (props) => {
  const { t } = useTranslation();
  let articleDetails;
  let currentUser = props.currentUser;
  let article = props.singleArticle;

  let showContent =
    currentUser.role === "subscriber" || article.premium === false ? (
      <FullContent />
    ) : (
      <RestrictedContent />
    );

  articleDetails = (
    <>
      <div class="ui two cards">
        <div id="cards" class="ui card">
          <div class="image">
            {" "}
            <img src={article.image} alt={`${article.title}-image`} />{" "}
          </div>
          <div class="content">
            <div class="header" id="title" key={article.title}>
              {article.title}
            </div>
            <div class="meta" id="snippet" key={article.snippet}>
              {article.snippet}
            </div>
            <div class="description" id="content">
              {showContent}{" "}
            </div>
            <button
              className="ui blue inverted button"
              id="home-button"
              onClick={() => props.dispatch({ type: BACK_TO_ARTICLES_LIST })}
            >
              {t("Back")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
  return <div id="single-article">{articleDetails}</div>;
};

const mapStateToProps = (state) => {
  return {
    singleArticle: state.singleArticle,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(DisplaySingleArticle);
