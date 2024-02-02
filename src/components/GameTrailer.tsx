import useGameTrailer from "../hooks/UseGameTrailer";

interface Props {
  id: number;
}

const GameTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useGameTrailer(id);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      {data?.results[0] && (
        <video
          width="auto"
          controls
          src={data.results[0].data.max}
          poster={data.results[0].preview}
        />
      )}
    </>
  );
};

export default GameTrailer;
