import { Book } from "./Book";

export const fetchBooks = () => {
  return fetch(`${process.env.REACT_APP_URL_API}/book`).then((res) =>
    res.json()
  ) as Promise<Book[]>;
};

export const fetchBook = (isbn: string) => {
  const result = fetch(`${process.env.REACT_APP_URL_API}/book/${isbn}`).then((res) =>
    res.json()
  );
  return result as Promise<Book>;
};

export const updateBook = (book: Book) => {
  return fetch(`${process.env.REACT_APP_URL_API}/book/${book.isbn}`, {
    method: "put",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(res)
  ) as Promise<Book>;
};
