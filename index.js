const server = require("./server");

const port = process.env.PORT || 9900;
server.listen(port, () => console.log(`Running on port ${port}`));
