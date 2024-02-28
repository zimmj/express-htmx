import { Response } from "express";
import TutorialCard from "../../components/tutorial-card.component";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";

export const specialTriggerExample = (res: Response) => {
    res.send(
        <TutorialCard title="Special Trigger" nextLink="/example/indicator">
            <div class="flex flex-col-reverse md:flex-row gap-4 ">
                <div id="code-site">
                    <div class="mb-2">
                        Each element is loading the same endpoint, which return a simple text.
                    </div>
                    <h3 class="text-lg font-bold mb-6">Horizontal scroll with revealed</h3>
                    <div id="horizontal-scroll" class="flex flex-row justify-center gap-4 overflow-x-auto border-4 rounded-md h-20">
                        <div class="font-bold text-nowrap py-2 px-4 rounded border-2">
                            Triggers when the element is scrolled into view port
                        </div>
                        <div class="w-200 font-bold text-nowrap py-2 px-4 rounded border-2">
                            This is a place holder
                        </div>
                        <div class="w-200 font-bold text-nowrap py-2 px-4 rounded border-2">
                            Sorry still a place holder
                        </div>
                        <div class="w-200 font-bold text-nowrap py-2 px-4 rounded border-2">
                            Some people have super long screens
                        </div>
                        <div class="w-200 font-bold text-nowrap py-2 px-4 rounded border-2">
                            Getting Warmer
                        </div>
                        <div class="w-200 font-bold text-nowrap py-2 px-4 rounded border-2">
                            Did you feel the loading?
                        </div>
                        <div hx-get="/tutorial/example/load-text" hx-trigger="intersect once" class="font-bold text-nowrap py-2 px-4 rounded border-2">
                        </div>
                        <div hx-get="/tutorial/example/load-text" hx-trigger="intersect once" class="font-bold text-nowrap py-2 px-4 rounded border-2">
                        </div>
                        <div hx-get="/tutorial/example/load-text" hx-trigger="intersect once" class="font-bold text-nowrap py-2 px-4 rounded border-2">
                        </div>
                        <div hx-get="/tutorial/example/load-text" hx-trigger="intersect once" class="font-bold text-nowrap py-2 px-4 rounded border-2">
                        </div>
                        <div hx-get="/tutorial/example/load-text" hx-trigger="intersect once" class="font-bold text-nowrap py-2 px-4 rounded border-2">
                        </div>
                    </div>
                    <div id="vertial-scroll" class="flex flex-col overflow-x-auto gap-10 border-4 rounded-md h-80 mt-6">
                        <div class="font-bold py-2 px-4  rounded border-2">
                            Triggers when the element is scrolled into view port
                        </div>
                        <div class="font-bold py-2 px-4  rounded border-2">
                            This is a place holder
                        </div>
                        <div class="font-bold py-2 px-4  rounded border-2">
                            Sorry still a place holder
                        </div>
                        <div class="font-bold py-2 px-4  rounded border-2">
                            Some people have super long screens
                        </div>
                        <div class="font-bold py-2 px-4  rounded border-2">
                            Getting Warmer
                        </div>
                        <div class="font-bold py-2 px-4  rounded border-2">
                            Did you feel the loading?
                        </div>
                        <div class="font-bold py-2 px-4  rounded border-2">
                            Did you feel the loading?
                        </div>
                        <div class="font-bold py-2 px-4  rounded border-2">
                            Did you feel the loading?
                        </div>
                        <div class="font-bold py-2 px-4  rounded border-2">
                            Did you feel the loading?
                        </div>
                        <div class="font-bold py-2 px-4  rounded border-2">
                            Did you feel the loading?
                        </div>
                        <div class="font-bold py-2 px-4  rounded border-2">
                            Did you feel the loading?
                        </div>
                        <div hx-get="/tutorial/example/pagination" hx-swap="afterend" hx-trigger="intersect once" class="font-bold py-2 px-4  rounded border-2">
                            Did you feel the loading?
                        </div>
                    </div>
                </div>
                <div>
                    There are two other triggers, which can be really useful in some cases.
                    <br />
                    <br />
                    <ul class="list-disc list-inside">
                        <li>"revealed" - Triggers when the element is scrolled into view port</li>
                        <li>"intersect" - Triggers when the element first intersect the view port</li>
                    </ul>
                    <br />
                    If overflow class is used, the trigger <span class="bg-slate-200">intersect once</span> should be used.
                </div>
            </div>
        </TutorialCard>
    )
};

export const paginatedExample = (res: Response) => {
    res.send(
        <div>
            {getRandomContent()}
            {getRandomContent()}
            {getRandomContent()}
            {getRandomContent()}
            {getRandomContent()}
            {getRandomContent()}
            {getRandomContent()}
            {getRandomContent()}
            {getRandomContent()}
            {getRandomContent()}
            <div hx-get="/tutorial/example/pagination" hx-swap="afterend" hx-trigger="intersect once" class="font-bold py-2 px-4  rounded border-2">
                Loaded new content
            </div>
        </div>
    )
};

const getRandomContent = () => {
    const randomNumber = Math.random();

    if (randomNumber < 0.6) {
        return (
            <div hx-get="/tutorial/example/pagination" class="font-bold py-2 px-4  rounded border-2">
                Loaded new content
            </div>
        );
    } else if (randomNumber < 0.7) {
        // Get random cat fact from another endpoint
        // Add code here to fetch cat fact and display it
        <div hx-get="https://catfact.ninja/fact">
            loading cat fact
        </div>
    } else if (randomNumber < 0.8) {
        return (
            <div class="font-bold py-2 px-4 rounded border-2">
                Random Number: {Math.floor(Math.random() * 100)}
            </div>
        );
    } else if (randomNumber < 0.98) {
        // Get random joke from an endpoint
        // Add code here to fetch joke and display it
        <div hx-get="https://official-joke-api.appspot.com/jokes/random">
            loading a joke
        </div>
    } else {
        return (

            <div>
                <iframe width="420" height="345" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" ></iframe>
            </div>
        );
    }
};
