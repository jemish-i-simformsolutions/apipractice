import axios from 'axios';
import React, { useState } from 'react';

export const GetUser=()=>{
   let getuser=axios.get('https://jsonplaceholder.typicode.com/todos/1');
   let getanotheruser=axios.get('https://jsonplaceholder.typicode.com/todos/6');
   const body={
    albumId: 2,
    id: 100,
    thumbnailUrl: "https://via.placeholder.com/150/14ba42",
    title: "et qui rerum  van der dussain",
    url: "https://via.placeholder.com/600/14ba42"};
    var a=null
    const [data,setData]=useState(null);
    Promise.all([getuser,getanotheruser]).then(res=>{setData(res[0].data.title+' '+res[1].data.title)});
   let img=axios.get('https://jsonplaceholder.typicode.com/photos/100').then(res=>console.log(res.data)).catch(err=>console.log(err));
   let change=axios.put('https://jsonplaceholder.typicode.com/photos/100',body).then(res=>console.log(res.data.title))
   return(
       <>

    {console.log(img)}
       </>
   );
}

//axios.put(url,body,..)
//axios.get(url)
//axios.post(url,body,...)
//Promise.all([1st promise,2nd promise]).then(res=>{const a=res[0] const b=res[1]}).catch(err=>err)
//Promise.all([1st promise,2nd promise]).then(axios.spread(u1,u2)=>{const a=u1,const b=u2}).catch(err=>err)
//https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/