var Search = (props) => (
  <form className="search-bar form-inline">
    <input type="text" onChange={props.searchVideo} className="form-control" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;