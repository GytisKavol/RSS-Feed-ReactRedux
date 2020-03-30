import { connect } from "react-redux";
import { fetchURL, deleteUrl } from "../../actions/Urls/urlsActions";
import Urls from "../../components/Urls/UrlsList";
const mapStateToProps = ({ urlsR }) => {
  return { urls: urlsR.urls, stateUrls: urlsR.stateUrls, isLoaded: urlsR.isLoaded };
};
const mapDispatchToProps = dispatch => {
  return {
    onHandleGetURL: () => {
      dispatch(fetchURL());
    },
    onHandleDeleteUrl: (id) => {
      dispatch(deleteUrl(id))
    },
  };
};

const UrlsContainer = connect(mapStateToProps, mapDispatchToProps)(Urls);
export default UrlsContainer;
