// Tokenizer
const tokenize = (input) => {
    const lines = input.split('\n').filter((line) => line.trim() !== '');
    const tokens = [];
    let currentList = null;
  
    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.endsWith(':')) {
        currentList = trimmedLine.slice(0, -1);
        tokens.push({ type: 'LIST_NAME', value: currentList });
      } else if (trimmedLine.startsWith('~')) {
        tokens.push({ type: 'TODO_ITEM_DONE', value: trimmedLine.slice(1) });
      } else {
        tokens.push({ type: 'TODO_ITEM', value: trimmedLine });
      }
    });
  
    return tokens;
  };
  

export default tokenize;