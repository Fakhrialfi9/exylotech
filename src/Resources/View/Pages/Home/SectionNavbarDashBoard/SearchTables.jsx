import "../../../../Style/Pages/Home/DashBoard.css";

function SearchTables() {
  return (
    <form className="SearchForm">
      <input className="input-grey-rounded" type="text" placeholder="Search"></input>
      <button type="submit" className="SearchButton">
        Go
      </button>
    </form>
  );
}

export default SearchTables;
