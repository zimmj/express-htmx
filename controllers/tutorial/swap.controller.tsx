import { Response } from "express";
import TutorialCard from "../../components/tutorial-card.component";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";

export const swapExample = (res: Response) => {
    res.send(
        <TutorialCard title="Swapping attribute" nextLink="/example/swap-transition">
            <div class="flex flex-col-reverse md:flex-row gap-4 ">
                <div id="code-site" class="basis-1/2">
                    <div class="mb-2">Each button is loading the same endpoint, which return a simple text.</div>
                    <div class="flex flex-row justify-around">
                        <button hx-get="/tutorial/example/load-text" hx-swap="outerHTML" class="baseis-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Swap Outher HTML
                        </button>
                        <div class="basis-1/2">
                            Swap Outher HTML
                        </div>
                    </div>
                    <div class="flex flex-row justify-around my-2">
                        <button hx-get="/tutorial/example/load-text" hx-swap="innerHTML" class="baseis-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Swap Inner HTML
                        </button>
                        <div class="basis-1/2">
                            Swap Inner HTML
                        </div>
                    </div>
                    <div class="flex flex-row justify-around my-2">
                        <button hx-get="/tutorial/example/load-text" hx-swap="beforebegin" class="baseis-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Swap Before Begin
                        </button>
                        <div class="basis-1/2">
                            Swap Before Begin
                        </div>
                    </div>
                    <div class="flex flex-row justify-around my-2">
                        <button hx-get="/tutorial/example/load-text" hx-swap="afterbegin" class="baseis-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Swap After Begin
                        </button>
                        <div class="basis-1/2">
                            Swap After Begin
                        </div>
                    </div>
                    <div class="flex flex-row justify-around my-2">
                        <button hx-get="/tutorial/example/load-text" hx-swap="beforeend" class="baseis-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Swap Before End
                        </button>
                        <div class="basis-1/2">
                            Swap Before Begin
                        </div>
                    </div>
                    <div class="flex flex-row justify-around my-2">
                        <button hx-get="/tutorial/example/load-text" hx-swap="afterend" class="baseis-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Swap After End
                        </button>
                        <div class="basis-1/2">
                            Swap After Begin
                        </div>
                    </div>
                    <div class="flex flex-row justify-around my-2">
                        <button hx-get="/tutorial/example/load-text" hx-swap="delete" class="baseis-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Delete this
                        </button>
                        <div class="basis-1/2">
                            Delete swap command
                        </div>
                    </div>

                    <div class="flex flex-row justify-around my-2">
                        <button hx-get="/tutorial/example/load-text" hx-swap="none" class="baseis-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Nothing happens
                        </button>
                        <div class="basis-1/2">
                            None swap command
                        </div>
                    </div>
                </div>
                <div class="basis-1/2">
                    With the hx-get attribute we define the route to be called.
                    With the hx-swap attribute we define the action to be performed with the response.
                    <br />
                    <br />
                    <ul class="list-disc">
                        <li>outerHTML: Replace the entire element with the response.</li>
                        <li>innerHTML: Replace the content of the element with the response. Default</li>
                        <li>beforebegin: Insert the response before the target element</li>
                        <li>afterbegin: Insert the response after the first child of the target element</li>
                        <li>beforeend: Insert the response before the last child of the target element</li>
                        <li>afterend: Insert the response after the target element</li>
                        <li>delete: Delete the target regardless the answer</li>
                        <li>none: Nothing happens</li>
                    </ul>
                    <br />
                    Swap is targeted by the hx-target attribute.
                    Defaut target is the element that made the request.
                </div>
            </div>
        </TutorialCard>
    )
};

export const swapTransitionExample = (res: Response) => {
    res.send(
        <TutorialCard title="Swapping Mechanism and Transition" nextLink="/example/target">
            <div class="flex flex-col-reverse md:flex-row gap-4">
                <div id="code-site" class="basis-1/2 flex gap-6 flex-col">
                    <button hx-get="/tutorial/example/swap/text" hx-swap="outerHTML" hx-target="#transition-target" class="m-auto bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Swap text below
                    </button>
                    <div id="transition-target">
                        Simple Text to show transition
                    </div>
                </div>
                <div class="basis-1/2">
                    <p>
                        HTMX has a special swapping mechanism which helps to create Transitions.
                        Each time when HTMX is swapping a element, it check, if an element with the same id already ecists.
                        If so, it will copie the attributes of the old content to the new content.
                        After a short delay, 20ms, it will add the new attributes to the new content.
                        This allows to create a smooth transition between the old and the new content.
                    </p>
                </div>
            </div>
        </TutorialCard>
    )
};

export const transitionTextExample = (res: Response) => {
    res.send(
        <div id="transition-target" class="red-transition">
            Simple Text to show transition
        </div>
    )
};

