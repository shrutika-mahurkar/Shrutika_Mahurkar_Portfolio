var project = new Vue({
    el :"#projects-box",
    
    data:{
        projectList:[]
     },

     mounted(){
         this.getProjectList();
           
     },
     methods:{
        getProjectList(){
            fetch("https://shrutika-mahurkar.github.io/Shrutika_Mahurkar_Portfolio/Project.json")
            .then(response => response.json())
            .then(data =>(this.projectList = data));
        },
     }
    })

    