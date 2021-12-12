var project = new Vue({
    
    name: "project",
    // data:{
    //     projects:null
    // },

    //         getProjectList(){
    //             fetch("Project.json").then(Response=>Response.json().then(data=>this.projectList=data));
    //         }

    data() {
        return {
            projectList: []
        };
      },
      methods: {
        getProjectList() {
          fetch("./Project.json")
            .then(response => response.json())
            .then(data => (this.projectList = data));
        }
      }
  
});
