import { Response } from "express";
import TutorialCard from "../../components/tutorial-card.component";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";

export const targetExample = (res: Response) => {
    res.send(
        <TutorialCard title="Target Attribute" nextLink="/example/trigger">
            <div class="flex flex-row gap-6">
                <div id="code-site" class="basis-1/2">
                    <div class="mb-2">On click on the button, a new Button will be created at the defined target of this button.</div>
                    <div class="grid grid-cols-2 gap-4">
                        <div id="target">
                            ID: Target
                        </div>
                        <button hx-target="#target" hx-get="/tutorial/example/load-text" class="bg-gray-800 text-white font-bold py-2 px-4 rounded">
                            Target CSS Selector
                        </button>
                        <button hx-target="closest button" hx-get="/tutorial/example/load-text" class="bg-gray-800 text-white font-bold py-2 px-4 rounded">
                            Target closest button
                            <div class="target">closest</div>
                        </button>
                        <button hx-target="find .target" hx-get="/tutorial/example/load-text" class="bg-gray-800 text-white font-bold py-2 px-4 rounded">
                            Target find
                            <div class="target">target</div>
                        </button>
                        <div>sibling</div>
                        <div>sibling</div>
                        <button hx-target="previous div" hx-get="/tutorial/example/load-text" class="bg-gray-800 text-white font-bold py-2 px-4 rounded">
                            previous div
                        </button>
                        <button hx-target="next div" hx-get="/tutorial/example/load-text" class="bg-gray-800 text-white font-bold py-2 px-4 rounded">
                            next div
                        </button>
                        <div>sibling</div>
                        <div>sibling</div>
                    </div>
                </div>
                <div class="basis-1/2">
                    The hx-target attribute allows you to target a different element for swapping than the one issuing the AJAX request.
                    <br />
                    <br />
                    <ul class="list-disc list-inside">
                        <li>"[CSS Selector] - Query selector to look for</li>
                        <li>"this" - The default behavior, swaps the element issuing the AJAX request.</li>
                        <li>"closest [CSS Selector]" -  find closes ancestor element or itself, that matches the CC selector</li>
                        <li>"find [CSS Selector]" - find first child descendant element that machtes the given CSS selector</li>
                        <li>"next" - element.nextElementSibling</li>
                        <li>"next [CSS Selector]" - target next sibling with the CSS-Selector</li>
                        <li>"previous" - element.previousElementSibling</li>
                        <li>"previous [CSS Selector]" - target previous sibling with the CSS-Selector</li>
                    </ul>
                    <br />
                    The hx-target element will be inherit from the parent element if not defined.
                </div>
            </div>
        </TutorialCard>
    )
};