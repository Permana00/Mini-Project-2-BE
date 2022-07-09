const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./routes/user");
const Movies = require("./routes/movies");
const Reviewed = require("./routes/reviewed");
const MyList = require("./routes/mylist");
const Comment = require("./routes/comment");
require("dotenv").config();

const path = require("path");

app.use(express.json());
app.use(cors());

app.use("/image", express.static(path.join(__dirname + "/image")));
app.use(User);
app.use(Movies);
app.use(Reviewed);
app.use(MyList);
app.use(Comment);

app.listen(process.env.PORT || 3000, () =>
  console.log("Listening at port: " + process.env.PORT || 3000)
);
