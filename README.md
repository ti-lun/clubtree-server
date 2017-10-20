clubtree-server

## Framework and Technologies Used
* [MongoDB](https://www.mongodb.com/)
* [ExpressJS](https://expressjs.com/)
* [NodeJS](https://nodejs.org/en/)

## How to Development

1. Open a new command line and go to the `server` folder.
2. Execute `npm start`.
3. Open a browser and go to `localhost:3000`. You should see the following response:
```
{"error":{"code":404,"message":"Not Found"}}
```

## How to Deploy to Heroku

1. Go to the Heroku website. Make sure that the following Settings > Config Variables are set:

| Key                 | Value                                        |
|---------------------|----------------------------------------------|
| NODE_ENV            | production                                   |

2. Go to Deploy > Manual Deploy. Choose the branch that you want to deploy (e.g. the one with the new build files), and click Deploy Branch.

3. Wait a few minutes, and then go to https://intense-retreat-44335.herokuapp.com/ to see the new server.

## Helpful Tools

You don't have to download these programs now, but once you start getting comfortable with writing code, they might be useful for debugging issues.

* [Robo3T](https://robomongo.org/) - This can help you explore / troubleshoot the MongoDB database.

## FAQ

### How come I didn't need to start a MongoDB server? Where's the data?
We're currently using a cloud-hosted MongoDB server with [mLab](https://mlab.com/). Since we're still in development, the free tier that they have is good enough for us. Right now, the connection string is hard-coded, so even though developers are booting up instances of the Clubtree server on their own computers, they'll all be using the same MongoDB server - so be careful with the data! Someone else could be using it.
