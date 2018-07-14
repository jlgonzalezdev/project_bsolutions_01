
import axios from 'axios'
var server= 'http://localhost:3002';
   
var TaskService = {
    getAll: () => {
        var url = server + '/tasks/all';
        return axios.get(url).then((response) => {
            return response;
        });
    },
    insert:(item)=>{
        var url = server + '/tasks/insert';
        return axios.post(url,item).then((response) => {
            return response;
        });
    },
    delete:(item)=>{
        var url = server + '/tasks/delete';
        return axios.post(url,item).then((response) => {
            return response;
        });
    },
    update:(item)=>{
        var url = server + '/tasks/update';
        return axios.post(url,item).then((response) => {
            return response;
        });
    }
}


export default TaskService;