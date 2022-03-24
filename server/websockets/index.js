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

      websocketConnection.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        
        if(openWebSockets[challenge])
           openWebSockets[challenge].send("RECEIVED"+JSON.stringify(parsedMessage));
    
      });


      websocketConnection.on('close', function () {
        delete openWebSockets[challenge]
      })

    }
  );

  return websocketServer;
};


module.exports.send = async function(challenge,message){

  if(openWebSockets[challenge]){
    openWebSockets[challenge].send(message);

  }
}