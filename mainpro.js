"use strict";

const foodList = JSON.parse(localStorage.getItem("arr")) || [
  {
    name: "KFC",
    discription: "FastFood",
    imgUrl: `https://www.dgwgo.com/wp-content/uploads/2021/07/kfc-logo.png`,
    discriptionFull: `KFC stands for Kentucky Fried Chicken. KFC all started with Colonel Harland Sanders, an entrepreneur who began selling fried chicken from his roadside restaurant in Corbin, Kentucky, during the Great Depression, founded KFC. The first "Kentucky Fried Chicken" franchise opened in Salt Lake City, Utah in 1952. Branding himself as "Colonel Sanders", he has become a figure of American cultural history, and his image remains widely used in KFC advertising. There are over 20,500 KFC outlets in more than 125 countries and territories around the world. Sanders original recipe of 11 herbs and spices is one of the most famous trade secrets throughout fast food industries.`,
    extraimg: [
      "https://5msh.com/wp-content/uploads/2021/02/%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1-%D9%88%D8%AC%D8%A8%D8%A7%D8%AA-%D9%83%D9%86%D8%AA%D8%A7%D9%83%D9%89.png",
      "https://americana-group.com/app/uploads/2017/11/kfc.jpg",
      "https://www.ngmisr.com/wp-content/uploads/2019/06/%D8%A7%D9%84%D8%B1%D9%82%D9%85-%D8%A7%D9%84%D9%85%D9%88%D8%AD%D8%AF-%D9%83%D9%86%D8%AA%D8%A7%D9%83%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9-%D9%85%D9%86%D9%8A%D9%88-%D9%83%D9%86%D8%AA%D8%A7%D9%83%D9%8A.jpg",
      "https://5msh.com/wp-content/uploads/2021/02/%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1-%D9%88%D8%AC%D8%A8%D8%A7%D8%AA-%D9%83%D9%86%D8%AA%D8%A7%D9%83%D9%89.png",
      "https://americana-group.com/app/uploads/2017/11/kfc.jpg",
      "https://www.ngmisr.com/wp-content/uploads/2019/06/%D8%A7%D9%84%D8%B1%D9%82%D9%85-%D8%A7%D9%84%D9%85%D9%88%D8%AD%D8%AF-%D9%83%D9%86%D8%AA%D8%A7%D9%83%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9-%D9%85%D9%86%D9%8A%D9%88-%D9%83%D9%86%D8%AA%D8%A7%D9%83%D9%8A.jpg",
    ],
    fav: false,
  },
  {
    name: "MacdonaldFC",
    discription: "FastFood",
    imgUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/220px-McDonald%27s_logo.svg.png`,
    discriptionFull: `In 1917, 15-year-old Ray Kroc lied about his age to join the Red Cross as an ambulance driver, but the war ended before he completed his training. He then worked as a piano player, a paper cup salesman and a Multimixer salesman. In 1954, he visited a restaurant in San Bernardino, California that had purchased several Multimixers. There he found a small but successful restaurant run by brothers Dick and Mac McDonald, and was stunned by the effectiveness of their operation.
    The McDonald’s brothers produced a limited menu, concentrating on just a few items – burgers, fries and beverages – which allowed them to focus on quality and quick service.They were looking for a new franchising agent and Kroc saw an opportunity. In 1955, he founded McDonald’s System, Inc., a predecessor of the McDonald’s Corporation, and six years later bought the exclusive rights to the McDonald’s name and operating system. By 1958, McDonald’s had sold its 100 millionth hamburger.`,
    extraimg: [
      "https://img.delicious.com.au/JT1RgF1X/w1200/del/2020/10/mcdonalds-menu-140578-1.jpg",
      "https://www.kimberley.co.za/wp-content/uploads/2019/01/33891_Mcdonalds-KCP-PL-02-Chicken.jpg",
      "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2015/12/hero_pdt_favouritesau-597x320.png",
    ],
    fav: false,
  },
  {
    name: "Hardees",
    discription: "FastFood",
    imgUrl: `https://www.reddevelopment.com/jefferson-pointe/wp-content/uploads/sites/15/2020/08/7h_28129.png`,
    discriptionFull: `For 60 years, Hardee's has brought communities together with quality, delicious food. With more than 1,800 restaurants across the U.S., and locations in 14 countries, we are committed to the best tasting food to better serve our guests--From Made From Scratch™ Biscuits and Hand-Breaded Chicken Tenders™. Wilber Hardee, opens his first Hardee's® restaurant in Greenville, North Carolina, on September 3, 1960. The one-of-a-kind menu included 15-cent hamburgers, 10-cent fries, and 20-cent milkshakes. By the end of the 60s, there were more than 200 Hardee's locations.`,
    extraimg: [
      "https://storage.eu.content-cdn.io/am-resources/8e05005e-5364-4850-94cf-2e54e2242528/Images/userimages/Chargrilled_burgers.png",
      "https://americana-group.com/app/uploads/2017/11/Hardees.jpg",
      "https://pbs.twimg.com/ext_tw_video_thumb/1440745850326585350/pu/img/c3w9mj5kyhqCZpxK.jpg",
    ],
    fav: false,
  },
  {
    name: "Burger King",
    discription: "FastFood",
    imgUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_BK_Logo.svg/1200px-User_BK_Logo.svg.png`,
    discriptionFull: `Every day, more than 11 million guests visit Burger King restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food. Founded in 1954, Burger King is the second largest fast food hamburger chain in the world. The original Home of the Whopper, our commitment to premium ingredients, signature recipes, and family-friendly dining experiences is what has defined our brand for more than 50 successful years.`,
    extraimg: [
      "https://miro.medium.com/max/1400/0*FtMqkN_p_FndN9j7.jpg",
      "https://cdn-images-1.medium.com/max/1200/1*pIJH1mPega8583Y3NuPaLg.jpeg",
      "https://d1xrg67pith2aj.cloudfront.net/images/store_facade_image/HJFLO4Sjg-main.jpeg?1493019515366",
    ],
    fav: false,
  },
  {
    name: "dominos",
    discription: "FastFood",
    imgUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png`,
    discriptionFull: ` Founded in 1960, Domino's is the recognized world leader in pizza delivery operating a network of company-owned and franchise-owned stores in the United States and international markets. Domino's is a company of exceptional people on a mission to be the best pizza delivery company in the world. Like most corporate success stories, Domino's started out small – with just one store in 1960. However, in 1978 the 200th Domino's store opened, and things really began to cook. By 1983 there were 1,000 Domino's stores and 5,000 in 1989. Today, there are over 18,000 stores – including more than 11,000 outside the United States. Sure, it took more than 50 years to get here, but the trip was well worth it. Feel free to take the journey yourself. Order a hot, Domino's Pizza for delivery to your door and make your family's dinner the best they have ever had.`,
    extraimg: [
      "https://diginomica.com/sites/default/files/images/2017-05/dominos.jpg",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/domino-s-thechick-ain-t-vegannuggets1-1608288780.jpg",
      "https://www.totallyveganbuzz.com/wp-content/uploads/2020/01/Dominos-Vegan-pizza_TotallyVeganBuzz-1280x720.jpg",
    ],
    fav: false,
  },
];


const deleteItem = (index) => {
  //  console.log(index);
  foodList.splice(index, 1);
  render();
};

// const favoriteF = (index) => {
//   favo = foodList.filter((item) => {
//     return item.fav;
//   });
//   //  $(`.imgHolder`).hide();
//   //  $(`.favoDiv`).show();
//   console.log(favo);
//   render();
// };

const triggerFav = (i) => {
    // console.log("like");
//   let arr = JSON.parse(localStorage.getItem("fav"));
//   arr.push(foodList[i]);
//   localStorage.setItem("fav", JSON.stringify(arr));
//   $(`#favBtn-` + i).hide();
//   $(`#unfavBtn-` + i).show();
foodList[i].fav = !foodList[i].fav
localStorage.setItem("arr",JSON.stringify(foodList))
render()

};

// const triggerunFav = (i) => {
//     // console.log("unlike");
//   let arr = JSON.parse(localStorage.getItem("fav"));
//   arr = arr.filter((item) => {
//     return item.name !== foodList[i].name;
//   });
//   localStorage.setItem("fav", JSON.stringify(arr));
//   $(`#unfavBtn-` + i).hide();
//   $(`#favBtn-` + i).show();
// };

const itemInfo = (i) => {
  //   console.log(i);
  $(`.imgHolder`).hide();
  $(`#addBtn`).hide();
  $(`#searchIng`).hide();
  $(".hideDiv").hide();
  $(`.infoDev`).show();
  $(`.infoDev`)
    .append(`<img src="${foodList[i].imgUrl}" id= "infoImg" alt="logo"/> 
  <div id ="infohp-${i}">
  <h1 class="h1Info" id="h1Info-${i}">${foodList[i].name}</h1> <br><br><br>
  <p class="infoPar" infoPar-${i}">  ${foodList[i].discriptionFull}</p></div>
  `);
  foodList[i].extraimg.forEach((item, i) => {
    $(`.extraImg`).append(`<img src="${item}" alt="">`);
  });
};

const render = () => {
  $(".imgHolder").html("");
  foodList.forEach((item, i) => {
    $(".imgHolder").append(` <div class="div1" ">
        <h1>${item.name}</h1>
        <p>${item.discription}</p>
        <img
          src="${item.imgUrl}" id= "info-${i}"
          alt="" style="height: 200px;"
        /> <button class='btn btn-danger' id='removeBtn-${i}'> Remove </button>
        <button class='btn btn-success' id='favBtn-${i}'> Like </button>
        
      </div>  `);
      if (item.fav){
          $("#favBtn-"+i).text("unlike")
          $("#favBtn-"+i).addClass('btn-warning')
      }

    $("#removeBtn-" + i).click(() => {
      deleteItem(i);
    });
    $(`#info-` + i).click(() => {
      itemInfo(i);
    });

    $(`#favBtn-` + i).click(() => {
      triggerFav(i);
    });

    
  });
  // نهاية اللوب
};

const showInput = () => {
  $(".hideDiv").show();
  $(`#hideNewBtn`).show();
  $(`#addBtn`).hide();



};

const hideInput = ()=> {
    $(".hideDiv").hide();
    $(`#addBtn`).show();
    $(`#hideNewBtn`).hide();


}

const addNewItem = () => {
  const inpName = $(`#inpName`).val();
  const inpDisc = $(`#inpDisc`).val();
  const inpUrl = $(`#inpUrl`).val();
  if (inpName === "" || inpDisc === "" || inpUrl === "") {
    return;
  } else {
    let newObj = { name: inpName, discription: inpDisc, imgUrl: inpUrl };
    foodList.push(newObj);
    render();
    $(".hideDiv").hide();
  }
};

render();
$(`#addBtn`).click(showInput);
$(`#hideNewBtn`).click(hideInput);

$(`#addNewBtn`).click(addNewItem);
$(`#favoNavBar`).click(favoriteF);
