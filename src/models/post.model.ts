const create = (con: any, data: any, callback: any) => {
  const { title, body } = data;
  let sql = "INSERT INTO blogs(title, body) VALUES(?, ?)";
  con.query(sql, [title, body], callback);
};

const get = (con: any, callback: any) => {
  let sql = "SELECT * from blogs";
  con.query(sql, callback);
};

const getById = (con: any, id: string, callback: any) => {
  let sql = "SELECT * from blogs WHERE id = ?";
  con.query(sql, [id], callback);
};

const update = (con: any, data: any, callback: any) => {
  const { title, body, id } = data;
  let sql = "UPDATE blogs SET title = ?, body = ? WHERE id = ?";
  con.query(sql, [title, body, id], callback);
};

const destroy = (con: any, id: string, callback: any) => {
  let sql = "DELETE FROM blogs WHERE id = ?";
  con.query(sql, [id], callback);
};

export default { create, get, getById, update, destroy };




