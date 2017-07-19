# aws-iam-rename

Utility to change the username for AWS IAM users.

To use:

[Set up your AWS credentials](https://aws.amazon.com/sdk-for-node-js/)

Run the docker-container to setup the environment:
`docker-compose run --rm dev-env`

Get a list of your current users:
`npm run list_users`

Which should output:

```
Users
=====
{"source_username":"john.doe"}
{"source_username":"jane.doe"}
```

Create a `users.json`, in the same directory as this README.md, file with the users to migrate, and the ARNs to update to:

```
[
  {
    "source_username":"john.doe",
    "dest_username": "john.doe_xyz"
  }
]
```

Update the users:
`npm run update_users`

You should get output:
```
user updated: john.doe
```

Check that your users updated correctly:
`npm run list_users`

Output:
```
Users
=====
{"source_username":"john.doe_xyz"}
{"source_username":"jane.doe"}
```
