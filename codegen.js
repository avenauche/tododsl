const generate = (lists) => {
    const json = {};
  
    Object.keys(lists).forEach((listName) => {
      const list = lists[listName];
      json[listName] = list.items;
    });
  
    return JSON.stringify(json, null, 2);
  };
  
export default generate;
