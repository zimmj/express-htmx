// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";


const Card = (title: { title: string }, contens: string[]) =>
    <div class="bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col h-full" >
        <div class="text-white text-lg mb-4 text-center">{title}</div>
        <div class="bg-slate-200 grow p-1">{contens}</div>
    </div >
    ;

export default Card;
