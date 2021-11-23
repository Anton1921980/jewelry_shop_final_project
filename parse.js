var axios = require("axios");
var needle = require("needle");
var cheerio = require("cheerio");
var async = require("async");

console.log("start");

// let categories = "pendants";
// let categories = "bracelets";
// let categories = "earrings";
// let categories = "necklaces";
let categories = "rings";

// !!! не забыть папку для фото проверить и поменять категорию и закомментить лишние ссылки

var urls = [

  //pendants
  // 'https://zarina.ua/catalog/podvesy',
  // 'https://zarina.ua/catalog/podvesy?p=2',
  // 'https://zarina.ua/catalog/podvesy?p=3',

// //bracelets
  // "https://zarina.ua/catalog/braslety",
  // "https://zarina.ua/ru/catalog/braslety?p=2",
  // "https://zarina.ua/ru/catalog/braslety?p=3",


  //earrings
  // "https://zarina.ua/catalog/sergi",
  // "https://zarina.ua/ru/catalog/sergi?p=2",
  // "https://zarina.ua/ru/catalog/sergi?p=3",

  //necklaces
  // "https://zarina.ua/catalog/kolie",
  // "https://zarina.ua/ru/catalog/kolie?p=2",
  // "https://zarina.ua/ru/catalog/kolie?p=3"

  //rings
  "https://zarina.ua/catalog/kolca",
  // "https://zarina.ua/ua/catalog/kolca?p=2",
  // "https://zarina.ua/ua/catalog/kolca?p=3",
];
function get_page(page_url) {
  needle.get(
    page_url,
    function(err, res) {
      if (err) throw err;
      var $ = cheerio.load(res.body);

      let link = $(".product_image_wrapper a");
      let links = [];
      link.each(function(i, val) {
        var linkItem = $(val).attr("href");
        links.push(linkItem);
      });
      console.log("TCL: links", links);
      //links доступен только тут и вызываем загрузку каждого продукта
      var i = 0;
      while (links.length > i) {
        let product_url = links[i];
        get_product(product_url);
        i++;
      }
    },
    100
  );
}

for (let i = 0; urls.length > i; i++) {
  // выведет 0, затем 1, затем 2
  let page_url = urls[i];
  get_page(page_url);

  console.log("TCL: page_url", page_url);
}

// get_product("https://zarina.ua/serezhki-hjurrem-bilij-rodij"); //тестируем 1 продукт

function get_product(product_url) {
  needle.get(
    product_url,
    function(err, res) {
      if (err) throw err;



      var $ = cheerio.load(res.body);
  

      // console.log("TCL: functionget_product -> res.body", res.body)
      

//описание товара

      let th1 = $(".attribute_item>.label").text();
      console.log("TCL: functionget_product -> th1", th1)
      var th = th1.split(":");
      console.log("TCL: functionget_product -> th", th)

   
      let td1 = $(".value").append(":").text()


      console.log("TCL: functionget_product -> td1 ", td1 )
      let td = td1.split(":");
      console.log("TCL: functionget_product -> td", td)
      


      // let td = $(".label").next();

      let imgMain1 = $(".gallery-placeholder__image").attr('srcset')
      .replace(/cache\/.*?\//, '')
      console.log("TCL: functionget_product -> imgMain1", imgMain1)
      // удаляем cache/a6c52857580bce6f0c970cda33e4ab72/
      //https://zarina.ua/media/mf_webp/jpg/media/catalog/product/cache/a6c52857580bce6f0c970cda33e4ab72/3/-/3-387_276.webp

      //добавляем второю картинку вручную  
       let imgMain2 = imgMain1.slice(0,imgMain1.length-5)+"_1_.webp"
       let imgMain3 = imgMain1.slice(0,imgMain1.length-5)+"_2_.webp"

       console.log("TCL: functionget_product -> imgMain3", imgMain3)
       console.log("TCL: functionget_product -> imgMain2", imgMain2)

       let imgMain=[imgMain1,imgMain2,imgMain3]
       console.log("TCL: functionget_product -> imgMain", imgMain)
      

      let price111 = $(".price")
        .text()
        // .replace(/...../i, "")
        .replace(/.грн.*/i, "")
        .replace(/\s/i, "");

      console.log("TCL: functionget_product -> price111", price111)

      let price222 = Number(price111);

      if (price222 !== NaN) {
        let price333 = price222;
        console.log("TCL: functionget_product -> price333", price333)
  

        let thh = [];
        let tdd = [];
        let imgg2 = [];
        let imgg = [];


for(let i=0;i<th.length;i++){      
  
          let thItem = th[i]         
            .replace("Знижка", "discount")
            .replace("Price From:", "currentPrice")
            .replace("Вид застібки", "fixer")
            .replace("Цвет металла", "metal_color")
            .replace("Цвет металла", "metal_color")
            .replace("Цвет ", "metal_color")
            .replace("Проба", "sample")
            .replace("Метал", "metal")
            .replace("metalл", "metal")
            .replace("Колекція", "collection")
            .replace("Коллекция", "collection")
            .replace("Вставки", "gemstone")
            .replace("Код виробу", "item_code")
            .replace("Код изделия", "item_code")
            .replace("Розмір", "size")
            .replace("Вага", "weight")
            .replace("Вес", "weight");

            console.log("TCL: functionget_product -> thItem", thItem)
     
          thh.push(thItem);

          console.log("TCL: functionget_product -> thh", thh)        
      }


      for(let i=0;i<td.length;i++){      
  
        let tdItem = td[i]      
            .replace("Немає", "none")
            .replace("Золото", "gold")
            .replace("Cрібло", "silver")
            .replace("Жовтий", "yellow")
            .replace("Білий", "white")
            .replace("ZARINA Classic", "ZARINA Classic")
            .replace("Меланка", "Melanka")
            .replace("Зірка", "Star")
            .replace("Капли Дождя", "Rain Drops")
            .replace("Краплі Дощу", "Rain Drops")
            .replace(/Iconic.*/, "Iconic")
            .replace(/NATKINA.*/, "NATKINA")
            .replace(/In motion.*/, "In motion")
            .replace(/Safari.*/, "Safari")
            .replace("ZARINA Classic", "ZARINA Classic")
            .replace("Меланка", "Melanka")
            .replace("Зірка", "Star")
            .replace("Мужская", "Men")
            .replace("Детская", "Baby")
            .replace("Дитяча", "Baby")
            .replace("Фрески", "Freski")
            .replace("ВідданаByZARINA", "ViddanaByZARINA")
            .replace("Три Цвета Любви", "Love Colors")
            .replace("Крижані Чари", "Frozen Magic")
            .replace("Крижані чари", "Frozen Magic")
            .replace("Душа Природи", "Nature`s Soul")
            .replace("Драгоценная шкатулка", "Precious box")
            .replace("Дорогоцінна Скарбничка", "Precious box")
            .replace("Дорогоцiнна скарбничка", "Precious box")
            .replace("Бальная Книга", "Precious box")
            .replace("Звезда", "Star")
            .replace("Ледяные чары", "Frozen Magic")
            .replace("Три цвета любви", "Love colors")
            .replace("Три Кольори Кохання", "Love colors")
            .replace("Три кольори кохання", "Love colors")   
            .replace("Сердце Океана", "Ocean heart") 
            .replace("Богема", "Bohemian")
            .replace("Гранат", "Granat")
            .replace("Розмір", "size")
            .replace("Вага", "weight")
            .replace("Золото", "gold")
            .replace("Срібло", "silver")
            .replace("Серебро", "silver")
            .replace("Желтый", "yellow")
            .replace("Белый", "white")
            .replace("Білий", "white")
            .replace("Розмір", "size")
            .replace("Вага", "weight")
            .replace("Вес", "weight")
            .replace("Дiамант", "Diamond")
            .replace("Бриллиант", "Diamond")
            .replace("Рубін", "Rubin")
            .replace("Рубин", "Rubin")
            .replace("Топаз", "Topaz")
            .replace("Фiанiт", "Fianit")
            .replace("Фианит", "Fianit")
            .replace("Сапфір", "Sapphire")
            .replace("Сапфир", "Sapphire")
            .replace("Изумруд", "Emerald")
            .replace("Смарагд", "Emerald")
            .replace("Без вставок", "Pure metal")
            .replace("Хризоліт", "Hrizolit")
            .replace("Хризолит", "Hrizolit")
            .replace("Цитрин", "Citrin")
            .replace("Кварц Димчатий", "Quarz")           
            .replace("Кварц димчатий", "Quarz") 
            .replace("Кварц дымчатый", "Quarz")
            .replace("Кварц Димчатий", "Quarz")
            .replace("Quarz Димчатий", "Quarz") 
            .replace("Кварц Зелений", "Quarz")
            .replace("Кварц Рожевий", "Quarz")
            .replace("Кварц рожевий", "Quarz")           
            .replace("Quarz Рожевий", "Quarz")
            .replace("Кварц", "Quarz")
            .replace("Лейкосапфір", "Leicosapphire")
            .replace("Лейкосапфир", "Leicosapphire")
            .replace("Цаворит", "Cavorit")
            .replace("Эмаль", "Emal")
            .replace("Емаль", "Emal")
            .replace("Халцедон", "Halcedon")
            .replace("Турмалин", "Turmalin")           
            .replace("Цирконій SWAROVSKI", "SWAROVSKI")
            .replace("Кристалл Сваровски", "SWAROVSKI")            
            .replace("Оникс", "Onix")
            .replace("Агат", "Agat")
            .replace("Силикон", "Silicon")
            .replace("Перли", "Pearls")
            .replace("Перламутр", "Pearls")
            .replace("Жемчуг", "Pearls")
            .replace("Аметист", "Ametist")
            .replace("Рожевий", "rose")
            .replace("Розовый", "rose")
            .replace("Димчатий", "")

          tdd.push(tdItem);
        };

        //ставим правильную картинку на главную
        for(let i=0;i<imgMain.length;i++){
          let image2 = imgMain[i]
          let image1 = image2.substr(image2.lastIndexOf("/"));
          let image = `/img/products/${categories}${image1}`;
          // imgg[0] = image;
          // imgg2[0] = image2;
            imgg.push(image);
            imgg2.push(image2);
          
        }


        // $(imgMain).each(function(i, val) {
        //   let image2 = $(val)
        //   let image1 = image2.substr(image2.lastIndexOf("/"));
        //   let image = `/img/products/${categories}${image1}`;
        //   // imgg[0] = image;
        //   // imgg2[0] = image2;
        //     imgg.push(image);
        //     imgg2.push(image2);
        // });
        //все картинки главная теперь дублируется
        // img.each(function(i, val) {
        //   let image2 = $(val)
        //     .attr("src")
        //     .replace("thumbnail/128x128/", "image/");
        //   let image1 = image2.substr(image2.lastIndexOf("/"));
        //   let image = `/img/products/${categories}${image1}`;
        //   imgg.push(image);
        //   imgg2.push(image2);
        // });
        //удаляем дубликат главной картинки
        imgg = Array.from(new Set(imgg));
        imgg2 = Array.from(new Set(imgg2));

        tdd.pop();
        tdd.push(price333);
        tdd.push(categories);
        thh.push("categories");

        //была функция не доходили переменные из-за асинхронности
        let result = {};
        for (var i = 0; i < thh.length; i++) {
          result[thh[i]] = tdd[i];
        }

        if (result.gemstone == "Diamond") {
          result.gemstone_color = "white";
        } else if (result.gemstone == "Sapphire") {
          result.gemstone_color = "green";
        } else if (result.gemstone == "Fianit") {
          result.gemstone_color = "blue";
        } else if (result.gemstone == "Rubin") {
          result.gemstone_color = "red";
        } else {
          result.gemstone_color = "white";
        }
        if (!result.hasOwnProperty("weight")) {
          result.weight = "1.8";
        }
        if (!result.hasOwnProperty("metal_color")) {
          result.metal_color = "white";
        }
        result.product_url = product_url;
        result.imageUrls = imgg;
        result.imageUrls2 = imgg2;
        result.previousPrice = price333;
        result.currentPrice = price333;
        result.name = `${result.gemstone} ${result.metal} ${categories.slice(
          0,
          -1
        )}`;
        
        console.log("result", result)

        ///поле цены в некоторых товарах пеескакивает в поле пробу sample, не добавляем их
        if (
          result.currentPrice > 0 &&
          result.sample !== undefined &&
          result.sample !== null &&
          result.sample.length === 3
        ) {
          //взять массив ссылок на картинки из result.imageUrls
          // обрезать конец в название и сохранить в папку
          // добавить адрес папки  и записать в result.imageUrls_2
          var http = require("https"),
            fs = require("fs");

          var i = 0;
          while (result.imageUrls2.length > i) {
            let url3 = result.imageUrls2[i];
            // let ur14 = url3.replace(/iamge.*/i, "");
            request(url3);
            i++;
          }
          function request(url3) {
            http.get(url3, function(res) {
              var imagedata = "";
              res.setEncoding("binary");

              res.on("data", function(chunk) {
                imagedata += chunk;
              });

              res.on("end", function() {
                // let ur14 = url3.replace(/\w\.(.*)/i, "");
                let ur14 = url3.substr(url3.lastIndexOf("/"));
                console.log("TCL: request ->  ur14", ur14);

                fs.writeFile(
                  `./client/public/img/products/${categories}/${ur14}`,
                  imagedata,
                  "binary",
                  function(err) {
                    if (err) throw err;
                    console.log("File saved.");
                  }
                );
              });
            });
          }

          //   console.log("TCL: get_product -> result", result);

          addProduct(result);

        } //в поле проба попадала иногда цена причину не нашел, это костыль
      }
    },
    100
  );
  
}

//убрать пробелы заменить названия на англ через регулярные
//добавить функцию парсер урлов товаров со страницы товаров
//запушить их в массив который вверху и запустить  эту
//название: из камень метал цвет категория

function addProduct(result) {
  const newProduct = {
    ...result,
    brand: "Zarina",
    quantity: 100
    //   productUrl: "/necklaces",
    //   name: "Diamond white gold Necklace",
    //   currentPrice: 37700,
    //   previousPrice: 48800,
    //   categories: "necklaces",
    //   imageUrls: [
    //     "img/products/necklaces/1-199_912_.jpg"
    //     // "img/products/bracelets/1-199_122_1.jpg",
    //     // "img/products/earrings/0990.jpg",
    //     // "img/products/earrings/0992.jpg",
    //   ],
    //   collection: "Melanka",
    //   metal: "gold",
    //   gemstone: "diamond",
    //   weight: "2.76",
    //   sample: "585",
    //   gemstone_color: "white",
    //   metal_color: "white",
  };
  //   console.log("TCL: addProduct ->  newProduct", newProduct);
  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      let token = response.data.token;

      axios
        .post("http://localhost:5000/products", newProduct, {
          headers: { Authorization: `${token}` }
        })
        .then(newProduct => {
          console.log(newProduct);
        })
        .catch(err => {
          console.log("TCL: addProduct -> err", err);
        });
    })
    .catch(err => {
      console.log("TCL: addProduct -> err", err);
    });
}
