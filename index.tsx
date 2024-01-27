import express from "express";
import dotenv from "dotenv";
import * as elements from "typed-html";
import houseRouter from "./controllers/house.controller";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use("/houses", houseRouter)
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.static(__dirname + "/public"));

const BaselHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/htmx.org@1.9.6"></script>
    <meta charset="UTF-8" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="http://localhost:3000/css/app.css" />
    <title>Htmx show case</title>
  </head>
  <body>
  ${children}
  </body>
</html>
`;

export const Layout = ({ children }: elements.Children) =>
  <BaselHtml>
    <div class="layout">
      <div id="Navigation" class="flex justify-center">
        <h1 hx-boost='true' class="cursor-pointer text-3xl font-bold underline">
          <a href="/">Zimmj Htmx Showcase</a>
        </h1>
      </div>
      <div id="content" class="">
        {children}
      </div>
      <div id="footer" class="bg-slate-600">
        <div class="text-white p-4">
          This is the footer
        </div>
      </div>
    </div>
  </BaselHtml>;

app.get("/", (_, res) => {
  res.send(
    <Layout>
      <button hx-get="clicked" hx-swap="outerHTML">
        {" "}
        CLick Me
      </button>
      <div hx-boost='true'>
        <a href="/houses/index">House Service</a>
      </div>
    </Layout>,
  );
});


app.get("/clicked", (req, res) => {
  res.send(<h1 class="text-3xl font-bold underline">Hello world!</h1>);
});

app.options("/sse", (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "GET, POST, OPTIONS");
  res.setHeader("access-control-allow-headers", "*");
  res.setHeader("access-control-max-age", "86400");
  res.end();
});

app.post("/sse", async (req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.flushHeaders(); // flush the headers to establish SSE with client

  // send event stream header to client
  res.write("event: message\n");
  res.write("data: hello world\n\n");
  res.write('retry: 10000\n\n');
  let count = 0;

  while (count < 100) {
    await new Promise(resolve => setTimeout(resolve, 100));

    console.log('Emit', ++count);
    // Emit an SSE that contains the current 'count' as a string
    res.write(`data: ${count}\n\n`);
  }

  res.write("event: Done\n\n");
  res.end(); // close the stream when we are done
  return;
});
