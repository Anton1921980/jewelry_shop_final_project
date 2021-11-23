var axios = require( "axios" );

function deleteAllProducts ()
{
  axios
    .post( "/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    } )
    .then( response =>
    {
      let token = response.data.token;
      console.log( token );
      axios.get( "/products/" ).then( products =>
      {
        //   console.log(products);
        products.data
          .forEach( element =>
          {
            let i = element.itemNo;
            //удаление по категориям
            // if (element.categories === "rings"){
            axios
              .delete( `/products/${ i }`, {
                headers: { Authorization: `${ token }` }
              } )
              .then( res =>
              {
                console.log( "success", res );

              } )
              .catch( err =>
              {
                console.log( 'error', err );
              } );
            // }
          } )
        // .catch(err => {
        //   console.log(err);
        // });
      } );
    } );
}
deleteAllProducts()