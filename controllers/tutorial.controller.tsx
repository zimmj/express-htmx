import { Router } from "express";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import { Layout } from "..";
import { targetExample } from "./tutorial/target.controller";
import { triggerExample } from "./tutorial/trigger.controller";
import { paginatedExample, specialTriggerExample } from "./tutorial/special-trigger.controller";

const tutorialRouter = Router();
export default tutorialRouter;

tutorialRouter.get("/index", (_, res) => {
    res.send(
        <Layout>
            <div hx-get="/tutorial/example/swap" hx-swap="outerHTML" hx-trigger="load"></div>
        </Layout>
    )
});


tutorialRouter.get("/example/swap", (_, res) => {
    specialTriggerExample(res);
});

tutorialRouter.get("/example/swap/load-text", (_, res) => {
    res.send(
        <p>Loaded text from get</p>
    )
});

tutorialRouter.get("/example/target", (_, res) => {
    targetExample(res);
});

tutorialRouter.get("/example/trigger", (_, res) => {
    triggerExample(res);
});

tutorialRouter.get("/example/special-trigger", (_, res) => {
    specialTriggerExample(res);
});

tutorialRouter.get("/example/pagination", (_, res) => {
    paginatedExample(res);
});