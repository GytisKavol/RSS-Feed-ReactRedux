import { connect } from "react-redux";
import { fetchKeywords,deleteKeyword } from "../../actions/Keywords/keywordsActions";
import Keywords from "../../components/Keywords/Keywords";
const mapStateToProps = ({ keywordsR }) => {
  return {
    keywords: keywordsR.keywords
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onHandleGetKeywords: () => {
      dispatch(fetchKeywords());
    },
    onHandleDeleteKeyword: (id) => {
      dispatch(deleteKeyword(id))
    }
  };
};

const KeywordsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Keywords);
export default KeywordsContainer;
