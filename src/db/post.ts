import { db } from './connect';

const addPost = (title: string, body: string) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO blogs(title, body) VALUES(?, ?)";

    db.query(sql, [title, body], (err: any, results: any, field: any) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

const allPost = () => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * from blogs";

    db.query(sql, (err: any, results: any) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

const postById = (id: string) => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * from blogs WHERE id = ?";

    db.query(sql, [id], (err: any, result: any) => {
      if (err) {
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
};

const updatePost = (id: string, title: string, body: string) => {
  return new Promise((resolve, reject) => {
    let sql = "UPDATE blogs SET title = ?, body = ? WHERE id = ?";

    db.query(sql, [title, body, id], (err: any, result: any) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

const deletePost = (id: string) => {
  return new Promise((resolve, reject) => {
    let sql = "DELETE FROM blogs WHERE id = ?";

    db.query(sql, [id], (err: any, result: any) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

export default { addPost, allPost, postById, updatePost, deletePost };
