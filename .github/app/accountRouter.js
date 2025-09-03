import { Router } from "express";

const accountRouter = Router()

app.get("/", function (req, res) {
    res.send("View all accounts");
  });
  
  app.get("/:id", function (req, res) {
    res.send("View an account by id");
  });
  
  app.post("/", function (req, res) {
    res.send("Create an account");
  });
  
  app.put("/:id", function (req, res) {
    res.send("Update an account by id");
  });
  
  app.delete("/:id", function (req, res) {
    res.send("Delete an account by id");
  });

  export default accountRouter;
  