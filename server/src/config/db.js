import { connect } from "http2";

const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  database: "Blog",
  user: "Blog",
  password: "babybaby1"
});

connection.connect();

export let getBlogs = () => {
  return new Promise((resolve, reject) => {
    connection.query("Select * from blogs", (error, results, field) => {
      if (error) {
        connection.end();
        reject(error);
      }
      resolve(results);
    });
  });
};
export let getBlog = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM blogs WHERE id=${id}`,
      (err, results, fields) => {
        if (err) {
          reject();
          return console.log(err);
        }
        resolve(results[0]);
      }
    );
  });
};
export let postBlog = chirp => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO chirps (userid, text, location)
    VALUES ( ${blog.title}, '${blog.content}', '${blog._created}');`,
      (error, results, field) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};
export let updateBlog = (id, chirp) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE blogs
    SET title = '${blog.title}' 
    WHERE content = ${blog.content};`,
      (error, results, field) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};
export let deleteBlog = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM blogs WHERE id=${id}`,
      (error, results, field) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};
