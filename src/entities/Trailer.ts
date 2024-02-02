interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

export default interface Trailers {
  count: number;
  results: Trailer[];
}
