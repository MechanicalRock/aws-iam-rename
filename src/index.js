const AWS = require('aws-sdk');
const path = require('path')
const fs = require('fs');

const iam = new AWS.IAM();

const log = (user) => {
  var output = {
    source_username: user.UserName
  }
  console.log(JSON.stringify(output));
};

const update= (user) => {
  var params = {
    UserName: user.source_username,
    NewUserName: user.dest_username
  };
  iam.updateUser(params,function(err,data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log("user updated: " + user.source_username);           // successful response
  });
};

const list_users = () => {
  var params = {
  };

  iam.listUsers(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else{
     console.log("Users")
     console.log("=====")
     data.Users.forEach(user => log(user))
   }

 });
};

const update_users = () => {
  var iam = new AWS.IAM();
  var users = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "users.json")),'utf8')

  users.forEach(user => update(user))
};

module.exports = {
  list_users,
  update_users
}
