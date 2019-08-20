

export default async(url,params,type = 'GET')=>{
   
    url=url.toUpperCase();
    return new Promise((resolve, reject) => {
        axios({
              url: url,
              method: method,
              data: params
            })
            .then((res) => {
                resolve(res.data);
                console.log(res);
            })
            .catch(function (error) {
                reject(error);
                console.log(error);
            });
      });
};


    
