 <script src="https://components.connect.trimble.com/trimble-connect-workspace-api/index.js"></script>
    window.onload = (event) => {
       getData();
    };

    async function getData() {
     API = await TrimbleConnectWorkspace.connect(window.parent, (event, data) => {
      console.log("Event: ", event, data);
     });

     API.project.getProject().then(project => {
      console.log(project); // Trimble Connect project details
     });
    }
 </script>

 <script src="https://components.connect.trimble.com/trimble-connect-workspace-api/index.js"></script>
