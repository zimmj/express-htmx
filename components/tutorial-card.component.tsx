// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import Divider from "./divider.components";
import SimpleButton from "./button.component";

const TutorialCard = (props: { title: string, nextLink: string }, contents: string[]) =>
    <div class="bg-white-800 shadow-sm p-4 flex flex-col h-full slide-right-out slide-right" id="tutorial" >
        <div class="text-black text-lg mb-4 text-center">{props.title}</div>
        <div class="bg-white-200 grow p-1">{contents}</div>
        <Divider text="" ></Divider>
        <SimpleButton name="Next" route={`/tutorial/${props.nextLink}`} targetId="tutorial" swapCommand="outherHTML swap:1s" />
    </div >;
export default TutorialCard;