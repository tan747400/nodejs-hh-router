import express from "express";
import bodyParser from "body-parser";
import { assignments as assignmentsFromFile } from "./data/assignments.js";
import { comments as commentsFromFile } from "./data/comments.js";

import assignmentRounter from "./.github/app/assignmentRouter.js";
import accountRouter from "./.github/app/accountRouter.js";

let assignments = [...assignmentsFromFile];
let comments = [...commentsFromFile];

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use("/assignments", assignmentRounter);
app.use("/account", accountRouter);

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

a
app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
