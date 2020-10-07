import Post from "../models/post.model";

const save = (req: any, res: any) => {
  Post.create(req.con, req.body, function (err: any) { 
    res.json(req.body);
  });
};

const all = (req: any, res: any) => {
  Post.get(req.con, function (err: any, rows: any) {
    res.json(rows);
  });
};

const edit = (req: any, res: any) => {
  Post.getById(req.con, req.params.id, function (err: any, rows: any) {
    res.json(rows);
  });
};

const update = (req: any, res: any) => {
  Post.update(req.con, req.body, function (err: any, rows: any) { 
    res.json(rows);
  });
};

const destroy = (req: any, res: any) => {
  Post.destroy(req.con, req.params.id, function (err: any) {
    res.json({ id: req.params.id, message: "Deleted successfully" });
  });
};

export default { save, all, edit, update, destroy };
