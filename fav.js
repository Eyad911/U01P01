

let favArray = JSON.parse(localStorage.getItem("arr"))

favArray= favArray.filter((item)=>{
    return  item.fav
})


// const triggerFav = (i) => {
//     // console.log("like");
//   let arr = JSON.parse(localStorage.getItem("fav"));
//   arr.push(favArray[i]);
//   localStorage.setItem("fav", JSON.stringify(arr));
//   $(`#favBtn-` + i).hide();
//   $(`#unfavBtn-` + i).show();
// };

// const triggerunFav = (i) => {
//     // console.log("unlike");
// //   let arr = JSON.parse(localStorage.getItem("fav"));
// //   arr = arr.filter((item) => {
// //     return item.name !== favArray[i].name;
// //   });
// //   localStorage.setItem("fav", JSON.stringify(arr));
// //   $(`#unfavBtn-` + i).hide();
// // //   $(`#favBtn-` + i).show();
// };


const render = () => {
    $(".imgHolderV").html("");
    favArray.forEach((item, i) => {
      $(".imgHolderV").append(` <div class="div1" ">
          <h1>${item.name}</h1>
          <p>${item.discription}</p>
          <img
            src="${item.imgUrl}" id= "info-${i}"
            alt="" style="height: 200px;"
          /> <button class='btn btn-danger' id='removeBtn-${i}'> Remove </button>
          <button class='btn btn-success' id='favBtn-${i}'> Like </button>
          <button class='btn btn-warning' id='unfavBtn-${i}'> UnLike </button>
        </div>  `);



        
  
      $("#removeBtn-" + i).click(() => {
        deleteItem(i);
      });
      $(`#info-` + i).click(() => {
        itemInfo(i);
      });
  
      $(`#favBtn-` + i).click(() => {
        triggerFav(i);
      });
  
      $(`#unfavBtn-` + i).click(() => {
          triggerunFav(i);
      });
      $(`#favBtn-` + i).hide();
    });
    // نهاية اللوب
    if (favArray.length=== 0) {

        $(".imgHolderV").append(`<div id='empty-fav'>  <h1>Opps </h1> <br><p>You have not added any item to Favorite List</p> </div>`)
        
    }
};
  render();









