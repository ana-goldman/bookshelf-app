export type Book = {
  key: string;
  title: string;
  cover_id: string | null;
  authors: [
    {
      key: string;
      name: string;
    },
  ];
};
