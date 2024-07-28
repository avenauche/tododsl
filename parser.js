// Parser
const parse = (tokens) => {
    const lists = {};
    let currentList = null;
  
    tokens.forEach((token) => {
      switch (token.type) {
        case 'LIST_NAME':
          currentList = { name: token.value, items: [] };
          lists[token.value] = currentList;
          break;
        case 'TODO_ITEM':
        case 'TODO_ITEM_DONE':
          if (!currentList) {
            throw new Error(`Todo item without list: ${token.value}`);
          }
          currentList.items.push({ title: token.value, done: token.type === 'TODO_ITEM_DONE' });
          break;
      }
    });
  
    return lists;
  };

export default parse;