/* The code is importing the `tailwind` function, `TailwindFn` type, and `create` function from the
`twrnc` library. */
import tailwind, { TailwindFn, create } from 'twrnc';

let tw :TailwindFn = tailwind

tw = create(require(`./tailwind.config`))

export default tw