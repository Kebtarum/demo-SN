export const required= (value) =>{
    if (value) return undefined;
    
    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => (value) =>{
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    
    return undefined;
}

// export const asyncValidate = (values/*, dispatch */) => {
//     if(ad){

//     }
//     else {
//         let wrongNetwork = response.data.messages[0]    
//           .slice(    
//             response.data.messages[0].indexOf(">") + 1,    
//             response.data.messages[0].indexOf(")")    
//           )    
//           .toLocaleLowerCase();    
//         dispatch(    
//           stopSubmit("edit-profile", {    
//             contacts: { [wrongNetwork]: response.data.messages[0] }    
//           })    
//         );    
//         return Promise.reject(response.data.messages[0]);    
//       }
// }




// export const maxLength30 = (value) =>{
//     if (value.length > 30) return 'Max length is 30 symbols';
    
//     return undefined;
// }
