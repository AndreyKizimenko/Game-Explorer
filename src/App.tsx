import Body from "./components/Body";
import Header from "./components/navbar/Header";
import useGames from "./hooks/UseGames";
import { UseGames } from "./services/types";

function App() {
  const { gamesError, games, gamesIsLoading, parameters, setParams }: UseGames = useGames();
  return (
    <>
      <Header setParams={setParams} parameters={parameters} />
      <Body
        gamesError={gamesError}
        games={games}
        gamesIsLoading={gamesIsLoading}
        parameters={parameters}
        setParams={setParams}
      />
    </>
  );
}

export default App;
