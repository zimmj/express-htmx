import express from "express";
import dotenv from "dotenv";
import * as elements from "typed-html";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.static(__dirname + "/public"));

const BaselHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/htmx.org@1.9.6"></script>
    <link rel="stylesheet" type="text/css" href="css/out-style.css" />
    <meta charset="UTF-8" />
    <title>React SSR</title>
  </head>
  ${children}
</html>
`;

app.get("/", (req, res) => {

  res.send(
    < BaselHtml >
      <body>
        <button hx-post="clicked" hx-swap="outerHTML"> CLick Me</button>
      </body>
    </BaselHtml >)
});

app.post("/clicked", (req, res) => {
  res.send(
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  );
});
