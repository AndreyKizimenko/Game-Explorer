interface Screenshot {
  id: number;
  image: string;
}

export default  interface Screenshots {
  count: number;
  results: Screenshot[];
}
