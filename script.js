 <script src="https://components.connect.trimble.com/trimble-connect-workspace-api/index.js"></script>
  <div>
    <button onclick="doConnect()">connect</button>  
    <iframe hidden id="viewer" src="https://web.connect.trimble.com/?isEmbedded=true" width="100%" height="750px"/>
    <script>
        function doConnect(){
          var viewer = document.getElementById("viewer");
          viewer.hidden = false;
          var API = await TrimbleConnectWorkspace.connect(viewer, (event, data) => {
            console.log("Event: ", event, data);
          });
          API.embed.setTokens({accessToken: "587951a4-97a3-40bd-8039-b77e75d2e939"}); // or {shareToken: "shareToken_here"}
          API.embed.init3DViewer({projectId: "kqafPqVOb7U"});
        }
    </script>
  </div>
