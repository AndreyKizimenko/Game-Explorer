interface Screenshot {
  id: number;
  image: string;
}

export interface Screenshots {
  count: number;
  results: Screenshot[];
}
