import { strict as assert } from "assert";
import { capitalizer } from "../src/capitalizer.js";
assert.equal(capitalizer("hello"), "Hello");
assert.equal(capitalizer(""), "");
console.log("ooo");
