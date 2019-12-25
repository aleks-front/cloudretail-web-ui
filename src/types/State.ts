export default interface State {
  categories: {
    isFetching: boolean;
    list: {
      id: string;
      name: string;
    }[];
  };
  products: {
    isFetching: boolean;
    list: {
      id: string;
      name: string;
    }[];
  };
}
