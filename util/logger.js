exports.log = (title, content) => {
    console.log(`[${new Date().toLocaleTimeString()}] | (${title}) ${content}`);
};