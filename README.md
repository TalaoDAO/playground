# Talao Playground

The project consists of two separate projects: 
- The client side located on the ./client path
- The server side located to the ./server path

Both projects need to be installed and run in order for the application to work with full functionality

## Installation

### Server side
Clone the project and run `npm i` in the server directory.

Edit the .env file with the appropriate values. Examples can be found in .env-example file on the repository. 

Before running the application, the database needs to be migrated. Run the following commands on the server directory:
```
 ./node_modules/.bin/sequelize db:migrate

 ./node_modules/.bin/sequelize db:seed:all
```
This will create the database and the required data for the first run.

The server can now run using `npm start` on the server directory. When running via terminal use `nohup npm start &` instead. The server will be listening on http://localhost:9000 for the default configuration. There is also a websocket server running on port 9001.

The logs of the project are generated on the server directory, in the files *combined.log* and *error.log*. Logging configuration is located in the file *./config/logging.js*


### Client side
Run `npm i` in the client directory.

Edit the .env file with the appropriate values. Examples can be found in .env-example file on the repository. 

The following values need to be configured with the details of the server installation:

- REACT_APP_NODE_LOCAL=\<server domain>/api
- REACT_APP_WEBSOCKET_SERVER=\<server domain>/websockets

Run ` npm run build` in the client directory to deploy changes. When working locally, you can start the project with `npm start` and the server listens on http://localhost:3000

### NGINX configuration

The nginx reverse proxy needs to be configured in order to forward requests to the client.
The server block path needs to include a root that points to the client build ` root  /home/vivi/playground/client/build;`


There are also paths on the server project that need to be declares as locations on the server block of the nging configuration. The following paths are required:

- `/nodejs` path with proxy pass "http://localhost:9000"
- `/api` path with proxy pass "http://localhost:9000"
- `/websockets` path with proxy pass 'http://localhost:9001'



## Didkit package

The didkit package for nodejs that is used in the project is:
https://www.npmjs.com/package/@spruceid/didkit-wasm-node

The package doesn't require any additional installations besides the server installation as described.

To use the didkit package simply include it in the module:
```
const DIDKit = require('@spruceid/didkit-wasm-node');
```

You can use the didkit to retrieve a did by a private key in JWK format as follows:
```
var did = DIDKit.keyToDID('ethr',privateKey);
```
The private key is a string in JWK format:
```
{
	"crv": "secp256k1",
	"d": "...",
	"kty": "EC",
	"x": "...",
	"y": "...",
	"alg": "ES256K-R"
}
```

In order to sign a VC use the didkit as follows:

```
let proof_options={
    proofPurpose: "assertionMethod",
    verificationMethod: did+"#controller", 
};

//credential: the vc as string, proof_options: string, key: string
const res=await DIDKit.issueCredential(JSON.stringify(data), JSON.stringify(proof_options),privateKey);
```
