import SearchBar from './components/SearchBar'

function App() {
  const handleSumit = (term) => {
    console.log("somthing ", term)
  };

  return (
    <SearchBar onSubmit = {handleSumit} />
  );
}

export default App;
