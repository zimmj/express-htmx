// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";

const SimpleButton = (props: { name: string, route: string, targetId: string, swapCommand: string }) =>
    <button hx-get={props.route} hx-target={`#${props.targetId}`} hx-swap={props.swapCommand} class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        {props.name}
    </button>
    ;

export default SimpleButton;