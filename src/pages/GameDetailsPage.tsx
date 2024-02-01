
import { useParams } from 'react-router-dom';

const GameDetailsPage = () => {
  const params = useParams();
  return (
    <div>Game ID: {params.id}</div>
  )
}

export default GameDetailsPage