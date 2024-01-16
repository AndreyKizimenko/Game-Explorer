import Body from "./components/Body";
import Header from "./components/navbar/Header";
import useGames from "./hooks/UseGames";

function App() {
  const { fetchGamesQuery, parameters, setParams } = useGames();
  return (
    <>
      <Header setParams={setParams} parameters={parameters} />
      <Body
        gamesError={fetchGamesQuery.error?.message}
        games={fetchGamesQuery.data?.results}
        gamesIsLoading={fetchGamesQuery.isLoading}
        parameters={parameters}
        setParams={setParams}
      />
    </>
  );
}

export default App;
