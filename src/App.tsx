import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/navbar/Header";
import { GetGamesParams } from "./services/types";

function App() {  
  const [parameters, setParams] = useState<GetGamesParams>({ page_size: 20 });
  
  return (
    <>
      <Header setParams={setParams} parameters={parameters} />
      <Body
        parameters={parameters}
        setParams={setParams}
      />
    </>
  );
}

export default App;
