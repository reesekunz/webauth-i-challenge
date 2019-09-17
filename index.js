const server = require("./server");

const port = process.env.PORT || 6500;
server.listen(port, () => console.log(`Running on port ${port}`));
