// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";

const TextInput = ({ label, id }: { label: string; id: string }) => (
    <div class="flex flex-col">
        <label for={id}>{label}</label>
        <input id={id} type="text" placeholder={label} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
    </div>
);

export default TextInput;