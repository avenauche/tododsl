import tokenize from "./tokeniser.js";
import parse from "./parser.js";
import generate from "./codegen.js"


const convert  = (input) => {
    const tokens = tokenize(input);

    const lists = parse(tokens);
    const json = generate(lists);
    return json;
}

const todo = (input) => {

    const tokens = tokenize(input);
    const lists = parse(tokens);
    const json = generate(lists);
    return json;
    
};

export default todo;
export { convert }
