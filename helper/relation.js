const { DataTypes } = require("sequelize");
const sequelize = require("../models/index").sequelize;
const User = require("../models/user")(sequelize, DataTypes);
const Comment = require("../models/comment")(sequelize, DataTypes);
const MyList = require("../models/mylist")(sequelize, DataTypes);
const Reviewed = require("../models/reviewed")(sequelize, DataTypes);

User.hasMany(MyList, { foreignKey: "userId" });
User.hasMany(Reviewed, { foreignKey: "userId" });

module.exports = { User, Comment, MyList, Reviewed };