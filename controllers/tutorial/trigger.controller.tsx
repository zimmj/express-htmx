import { Response } from "express";
import TutorialCard from "../../components/tutorial-card.component";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";

export const triggerExample = (res: Response) => {
    res.send(
        <TutorialCard title="Trigger Attribute" nextLink="/example/special-trigger">
            <div class="flex flex-row">
                <div id="code-site" class="basis-1/2">
                    <div class="mb-2">
                        Each element is loading the same endpoint, which return a simple text.
                    </div>
                    <div class="flex flex-row justify-around">
                        <div hx-get="/tutorial/example/swap/load-text" hx-trigger="load delay:5s" class="font-bold py-2 px-4 rounded border-2">
                            Load
                            <div
                                class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span
                                >
                            </div>
                        </div>
                        <div class="basis-1/2">
                            On Page Load
                        </div>
                    </div>
                    <div id="click-button" class="flex flex-row justify-around my-2">
                        <button hx-get="/tutorial/example/swap/load-text" hx-trigger="click" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Click me
                        </button>
                        <div class="basis-1/2">
                            Triggers on mouse Click
                        </div>
                    </div>
                    <div class="flex flex-row justify-around my-2">
                        <button hx-get="/tutorial/example/swap/load-text" hx-trigger="click[ctrlKey]" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Click me hold Ctrl
                        </button>
                        <div class="basis-1/2">
                            Triggers on mouse Click with filter
                        </div>
                    </div>
                    <div class="flex flex-row justify-around my-2">
                        <div hx-get="/tutorial/example/swap/load-text" hx-trigger="mouseover" class="font-bold py-2 px-4 rounded">
                            Mouseover
                        </div>
                        <div class="basis-1/2">
                            Mouseover
                        </div>
                    </div>
                    <div class="flex flex-row justify-around my-2">
                        <div hx-get="/tutorial/example/swap/load-text" hx-trigger="focus" class="font-bold py-2 px-4 rounded">
                            Focus
                        </div>
                        <div class="basis-1/2">
                            Focus
                        </div>
                    </div>
                    <div class="flex flex-row justify-around my-2">
                        <div hx-get="/tutorial/example/swap/load-text" hx-trigger="click from:#click-button" class="font-bold py-2 px-4 rounded">
                            Trigger from other element
                        </div>
                        <div class="basis-1/2">
                            Trigger from click on click button
                        </div>
                    </div>
                </div>
                <div class="basis-1/2">
                    The hx-trigger attribute allows you to define the event that triggers the AJAX request.
                    <br />
                    <br />
                    <ul class="list-disc list-inside">
                        <li>"load" - The default behavior, triggers the AJAX request on page load.</li>
                        <li>"click" - triggers the AJAX request on click.</li>
                        <li>"click([filter])" - triggers the AJAX request on click when [] expression is true.</li>
                        <li>"mouseover" - triggers the AJAX request on mouseover.</li>
                        <li>"focus" - triggers the AJAX request on focus.</li>
                        <li>"submit" - triggers the AJAX request on form submit.</li>
                    </ul>
                    <br />
                    Extra values can be added to the trigger, like:
                    <ul class="list-disc list-inside">
                        <li>"delay:[time]" - triggers the AJAX request after the defined time.</li>
                        <li>"throttle:[time]" - wait for extra events coming in the defined time frame. </li>
                        <li>"from:[CSS-Selector]" - listen to an event from other element</li>
                        <li>"que:[option] - defines how to react on multiple triggers fired</li>
                    </ul>
                </div>
            </div>
        </TutorialCard>
    )
};