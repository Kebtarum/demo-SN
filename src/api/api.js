import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers:{'API-KEY': '46d75fc6-30a3-4d7a-81e5-8ce6e95ef3a8'},
})

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    follow(userId){
        return instance.post(`/follow/${userId}`)
        .then(response => {
            return response.data;
        })
    },
    unfollow(userId){
        return instance.delete(`/follow/${userId}`)
        .then(response => {
            return response.data;
        })
    },
    ////Теперь ниже profileAPI 
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    },
 
}

export const profileAPI = {
    
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
        .then(response => {
            return response.data;
        });
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
        .then(response => {
            return response.data;
        });
    }
 
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        });
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
        .then(response => {
            return response.data;
        });
    },
    logout(){
        return instance.delete(`auth/login`)
        .then(response => {
            return response.data;
        });
    },
}