// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";

const SimpleButton = (props: { name: string, route: string, targetId: string }) =>
    <button hx-get={props.route} hx-target={`#${props.targetId}`} hx-swap="outer-html" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        {props.name}
    </button>
    ;

export default SimpleButton;