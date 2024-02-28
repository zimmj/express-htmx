import { Router } from "express";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import { Layout } from "..";
import { targetExample } from "./tutorial/target.controller";
import { triggerExample } from "./tutorial/trigger.controller";
import { paginatedExample, specialTriggerExample } from "./tutorial/special-trigger.controller";
import { indicatorExemple } from "./tutorial/indicators.controller";
import { swapExample, swapTransitionExample, transitionTextExample } from "./tutorial/swap.controller";

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
    swapExample(res);
});

tutorialRouter.get("/example/swap-transition", (_, res) => {
    swapTransitionExample(res);
});

tutorialRouter.get("/example/swap/text", (_, res) => {
    transitionTextExample(res);
});

tutorialRouter.get("/example/load-text", (_, res) => {
    res.send(
        <p>Loaded text from get</p>
    )
});

tutorialRouter.get("/example/load-delayed-text", async (_, res) => {
    await delay(2000);
    res.send(
        <div>
            <p> See indicator</p>
            <p class="htmx-indicator">Indicator from response</p>
        </div>
    )
});

const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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

tutorialRouter.get("/example/indicator", (_, res) => {
    indicatorExemple(res);
});