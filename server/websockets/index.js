const WebSocket=require("ws");
const queryString=require("query-string");

var openWebSockets={}; //{challenge: websocket}


module.exports =  () => {
  const websocketServer = new WebSocket.Server({
    path: "/websockets",
    port: 9001
  });


  websocketServer.on(
    "connection",
    function connection(websocketConnection, connectionRequest) {
      const [_path, params] = connectionRequest?.url?.split("?");
      const connectionParams = queryString.parse(params);
      const challenge=connectionParams.challenge;
      openWebSockets[challenge]=websocketConnection;

      // NOTE: connectParams are not used here but good to understand how to get
      // to them if you need to pass data with the connection to identify it (e.g., a userId).
      console.log(connectionParams);

      websocketConnection.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        console.log(parsedMessage);
        if(openWebSockets[challenge])
           openWebSockets[challenge].send("RECEIVED"+JSON.stringify(parsedMessage));
    
      });


      websocketConnection.on('close', function () {
        delete openWebSockets[challenge]
        console.log('deleted: ' + challenge)
      })

    }
  );

  return websocketServer;
};


module.exports.send = async function(challenge,message){

  console.log("for challenge:"+challenge);
  if(openWebSockets[challenge]){
    console.log("SEnding..."+message);
    openWebSockets[challenge].send(message);

  }
}