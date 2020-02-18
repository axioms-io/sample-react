# sample-react
React sample with Axioms authentication using `web-js` SDK


## Clone or download this repo
Update origin

```
git clone git@github.com:axioms-io/sample-react.git
```

## Install dependencies
```
npm install
```

## Update config
Either update `.env.prod` or create a `.env.local` to add following configs.

- `Your-App-Domain` is where you going to host or run your app. It can be `localhost` or a domain
- `Your_Client_ID` is your client id which can be obtained from the Axioms Dashboard -> Clients section
- `<Your_Slug>.axioms.io` is your Axioms tenant default domain or custom domain mapped to Axioms servers

```
REACT_APP_Client_Id=<Your_Client_ID>
REACT_APP_Axioms_Domain=<Your_Slug>.axioms.io
REACT_APP_Redirect_Uri=https://<Your-App-Domain>/callback
REACT_APP_Post_Logout_Uri=https://<Your-App-Domain>/login
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production

Build using `.env.production

```
npm run build
```

## Deploy to Netlify
Configure your build command and output directory and you are good to go.