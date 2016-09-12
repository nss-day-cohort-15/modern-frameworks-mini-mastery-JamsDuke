var app = angular.module("Flowers")
.constant('FirebaseURL', "https://flower-power-angular.firebaseio.com");
};

app.factory("FlowerData", ($q, $http, FirebaseURL) => {
  let getFlowers = () => {
    let flowers = [];
    return $q((resolve, reject)=>{
      $http.get(`${FirebaseURL}/arrangements"`)
      .success((flowerObject)=>{
        if (flowerObject !== null){
          Object.keys(flowerObject).forEach((key)=>{
            flowerObject[key].id = key;
            flowers.push(flowerObject[key]);
          });
          resolve(flowers);
        } else {
          resolve(flowers);
        }
      })
      .error((error)=>{
        reject(error);
      });
    });
  };
    return {getFlowers};
});