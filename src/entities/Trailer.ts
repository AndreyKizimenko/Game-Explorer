interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

export interface Trailers {
  count: number;
  results: Trailer[];
}
