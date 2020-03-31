# sample-react
React sample with [Axioms](https://axioms.io) authentication using `web-js` SDK.


## Clone or download this repo
```
git clone git@github.com:axioms-io/sample-react.git
cd sample-react
```

Make sure to update the origin.

```
git remote set-url origin new.git.url/here
```

## Install dependencies
```
npm install
```

## Update config
Either update `.env.production` or create a `.env.local` to add following configs. If you are using Netlify for deployment and build you can use their environment variables (see Netlify details at the end).

- `Your-App-Domain` is where you going to host or run your app. It can be `localhost` or a domain
- `Your_Client_ID` is your client id which can be obtained from the Axioms Dashboard -> Clients section
- `<Your_Slug>.axioms.io` is your Axioms tenant default domain or custom domain mapped to Axioms servers

```
REACT_APP_Client_Id=<Your_Client_ID>
REACT_APP_Response_Type=code
REACT_APP_Axioms_Domain=<Your_Slug>.axioms.io
REACT_APP_Redirect_Uri=https://<Your-App-Domain>/callback
REACT_APP_Post_Logout_Uri=https://<Your-App-Domain>/login
```

### Compile and hot-reload for local development
```
npm start
```

### Compile and minify for production

Build using `.env.production`

```
npm run build
```

## Build and deploy to Netlify

1. Simply fork this repository and connect your Github project in Netlify.

2. Configure your build command and output directory and you are good to go.


### Build Settings
Build command: `yarn build` or `npm build`

Publish directory: `build/`

![Build settings](build_settings.jpg)

### Environment Settings
![Build Environment settings](build_env_settings.jpg)