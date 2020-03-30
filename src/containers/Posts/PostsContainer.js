import { connect } from "react-redux";
import { clickFilter, clickMoreThanZero } from "../../actions/userActions";
import {
  fetchFilteredPosts,
  fetchPosts,
  fetchKeywords
} from "../../actions/Posts/postsActions";
import Posts from "../../components/Posts/PostsList";
const mapStateToProps = ({ postsR }) => {
  return {
    keywords: postsR.keywords,
    postsFiltered: postsR.itemsFiltered,
    posts: postsR.items,
    clickFilter: postsR.clickFilter,
    isLoaded: postsR.isLoaded,
    clickMoreThanZero: postsR.clickMoreThanZero
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onHandleGetPosts: () => {
      setTimeout(() => {
        dispatch(fetchPosts());
        dispatch(fetchFilteredPosts());
      }, 400);
    },
    onHandleGetKeywords: () => {
      dispatch(fetchKeywords())
    },
    Filter: () => {
      dispatch(clickFilter());
    },
    MoreThanZero: () => {
      dispatch(clickMoreThanZero());
    }
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
