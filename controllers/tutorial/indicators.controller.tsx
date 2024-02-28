import { Response } from "express";
import TutorialCard from "../../components/tutorial-card.component";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";

export const indicatorExemple = (res: Response) => {
    res.send(
        <TutorialCard title="Indicators" nextLink="/example/trigger">
            <div class="flex flex-col-reverse md:flex-row gap-4 ">
                <div id="code-site">
                    <div class="mb-2">
                        This calls are calling endpoints, that wait with the return to show the indicator
                    </div>
                    <div class="flex flex-col justify-around gap-6">
                        <div class="m-auto">
                            <button hx-get="/tutorial/example/load-delayed-text" class="baseis-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                                Show Indicator
                                <div class="htmx-indicator bg-gray-800 text-white font-bold py-2 px-4 rounded">
                                    Loading...
                                </div>
                            </button>
                        </div>
                        <div class="m-auto">
                            <button hx-get="/tutorial/example/load-delayed-text" hx-indicator="#indicator" class="baseis-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                                Show Indicator with hx-indicator
                            </button>
                            <div id="indicator" class="htmx-indicator mt-4 bg-gray-200 text-white font-bold py-2 px-4 rounded">
                                Loading...
                            </div>
                        </div>
                    </div>
                </div>
                <div id="explanation">
                    <div class="mb-2">
                        <h3 class="text-lg font-bold mb-6">Indicators</h3>
                        <p>Indicators are a way to show the user that something is happening in the background, while the page is waiting for a response.
                            This can be a simple spinner, or a more complex animation.
                            But with the help of HTMX it's easy to show and hide them.
                        </p>
                        <br />
                        <p>
                            With the class <span class="bg-slate-200">htmx-indicator</span> you can define a element, that will be shown when a request is pending.
                            When HtMX issues a request, it will add the class <span class="bg-slate-200">htmx-request</span> to the element.
                            This will cause the hidden element with the class <span class="bg-slate-200">htmx-indicator</span> to be shown.
                        </p>
                        <br />
                        <p>
                            With the attribute <span class="bg-slate-200">hx-indicator</span> you can define a element, that will be shown when a request is pending.
                        </p>
                        <br />
                        <p>
                            This behavior can be customized with global css.
                        </p>
                    </div>
                </div>
            </div >
        </TutorialCard >
    )
};