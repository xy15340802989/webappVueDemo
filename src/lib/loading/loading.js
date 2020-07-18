import Vue from "vue";
import Loading from "./loading.vue"



export default _=>{
    let LoadingClass = Vue.extend(Loading);

    let vm = new LoadingClass({
        data:{
            flag:false
        },
        methods:{
            load(){
            //    this.flag=true;      
                document.body.appendChild(vm.$mount().$el)
            },
            unload(){
                // this.flag =false;
                document.body.removeChild(vm.$mount().$el)
            }
        }
    })
    
    // document.body.appendChild(vm.$mount().$el)
    
    return vm;
}