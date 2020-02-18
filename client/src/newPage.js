import axios from 'axios';


export function addPage() {
    const newPage = {
        customId: "brand-history",
        title: "Brand History",
        images: ["/img/pages/aboutus/001.png", "/img/pages/aboutus/002.png"],
        htmlContent: `
        <p>   
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et magni voluptas. Sequi excepturi praesentium commodi aliquam quo, exercitationem, dolor, quisquam eius earum dolore beatae deleniti repudiandae doloremque totam possimus.
        Commodi alias ullam eveniet dolorem quod inventore provident nulla similique aut recusandae, unde molestiae, enim nisi laboriosam iste tempora, pariatur atque voluptates voluptas doloremque vero adipisci? Magnam architecto velit tenetur!
        Praesentium inventore quasi explicabo optio, voluptatum ab dignissimos perspiciatis laborum dolor provident laboriosam amet illum enim! Eaque, veritatis. Alias sunt expedita maiores et officia, voluptates quidem consequatur ipsam minima veniam?
        Animi molestiae dolorum cupiditate cum unde porro expedita, ut debitis sed nemo corporis quaerat autem officiis dolore error facilis temporibus minima facere tempora incidunt recusandae deleniti? Laudantium iusto quidem laborum?
        Voluptatibus cumque, provident sit soluta est ut quia accusantium commodi corporis expedita iure necessitatibus, rerum odit ad autem quibusdam dicta repellendus officiis veritatis pariatur doloremque porro itaque maiores corrupti! Minima!
        Animi harum asperiores laudantium earum non sint iure alias eum iusto deserunt quia et laborum quo saepe dignissimos facilis, itaque adipisci voluptatem cumque? Vitae fugit illum quia, excepturi maxime voluptatem!
        Adipisci eligendi animi pariatur labore enim nobis voluptatum soluta sit. Facilis autem culpa ducimus eos quaerat magnam eum esse, aperiam, et blanditiis cumque corporis atque saepe quam natus ad repellendus!
        Laudantium alias voluptatibus dolorem animi ab debitis, consequuntur at vitae odio ipsa veritatis rerum ullam commodi. Error ducimus, repellat natus voluptate nulla sed facere saepe quo alias, accusamus id at?
        Itaque odio, quo minima, sunt similique eius quam officiis doloribus vel nemo vitae praesentium molestiae perferendis cupiditate, beatae magnam sapiente delectus? Sequi tempora dolores voluptate, aperiam blanditiis fugit id impedit.
        Consequatur illum, architecto cum mollitia qui ipsa numquam voluptatum omnis iure excepturi! Distinctio iste numquam, eaque officia mollitia dolorum tenetur nisi unde, quisquam molestias error, at facilis beatae praesentium rem?
        Autem, eum impedit. Ut hic voluptas, accusamus maiores cum autem sunt minus dolorum placeat mollitia fugiat quia porro. A error, non laudantium deserunt voluptas dignissimos nam corrupti sit repellendus rem?
        Assumenda praesentium consequatur eos porro, culpa dolores veritatis fugit incidunt nostrum doloribus suscipit nisi, officiis hic mollitia quisquam officia exercitationem est saepe ipsam, debitis nemo illo. Labore inventore cumque mollitia.
        Iste voluptates quidem blanditiis molestiae quibusdam assumenda nihil corrupti quia quasi sequi. Unde maiores itaque minus quia deleniti explicabo, necessitatibus a laudantium esse, facere delectus? Aut quia maiores corporis deleniti!
        Ab, esse! Itaque, placeat. Ipsa excepturi ut voluptate, ex sequi vero, nisi sed consequatur perferendis sunt delectus tempore provident nesciunt sit amet deleniti exercitationem quos a doloremque quam totam. Tempora.
        Vero sit veniam laboriosam qui, perspiciatis veritatis ipsam quasi nam quae perferendis saepe quis voluptates hic error doloribus temporibus aspernatur, non facilis inventore alias unde. Numquam eos eaque sapiente recusandae!
        Asperiores, dignissimos numquam unde fugit reprehenderit totam soluta cupiditate alias voluptatem! At eum laudantium sed cumque hic dolor provident mollitia architecto natus ab quas quasi, nostrum sapiente nesciunt odit corrupti.
        Ipsa quam quibusdam dolores doloribus nisi aut expedita adipisci, eos dignissimos velit est debitis in enim ea quaerat excepturi veniam a nemo tempore. Voluptates reiciendis recusandae quasi ea perferendis officia!
        Et distinctio omnis eligendi perspiciatis corrupti ipsam soluta rerum illo debitis? Dolorem voluptatibus iusto, sunt doloribus error veniam alias et perferendis molestias neque quibusdam minus illum ex magni facere beatae!
        Perspiciatis vitae tempora voluptas aperiam magnam! Assumenda non sunt numquam. Vel quis aliquam aliquid, inventore commodi architecto explicabo animi laboriosam veniam possimus cumque. Sunt hic quia nulla explicabo quam id!
        Corrupti ducimus temporibus fuga magni dolores exercitationem mollitia aperiam corporis, animi libero, ab minima tenetur cupiditate earum suscipit quae eius aspernatur nesciunt nisi expedita quaerat itaque! Deserunt recusandae velit provident.
        Maiores repudiandae veritatis blanditiis quidem fugiat. Architecto nam assumenda odit debitis quaerat neque velit exercitationem hic! Ipsum quibusdam sunt inventore doloribus modi earum quidem nulla, reiciendis quaerat sapiente molestias deserunt.
        Voluptate excepturi magni reprehenderit aperiam corrupti beatae ad cum accusamus quae, quam consequatur facere maiores ducimus! Accusantium in, sapiente voluptates ducimus odio quidem modi, eum accusamus et a praesentium minus.
        Voluptatibus facilis amet, similique, natus nulla ipsam magni beatae pariatur odio corrupti voluptas id consequuntur nisi iure. Inventore vitae, accusamus labore eos optio commodi non repudiandae at quod voluptatem beatae.
        Accusantium ipsum temporibus ipsa numquam magnam, voluptates iste vero vitae explicabo eveniet soluta velit repudiandae veritatis eius dolorem exercitationem dolorum! Modi sequi ullam voluptatibus doloribus minima sapiente laudantium ea eveniet!
        Excepturi iste molestiae exercitationem molestias voluptas enim fugiat tenetur rem nesciunt? Aperiam quibusdam veritatis voluptatum in officiis nesciunt suscipit, provident similique voluptates voluptatibus, blanditiis rerum explicabo? Corporis minima nihil aut!
        doloribus error veniam alias et perferendis molestias neque quibusdam minus illum ex magni facere!
        </p>`
    };



    axios
        .post("http://localhost:5000/customers/login", { "loginOrEmail": "customer@gmail.com", "password": "1111111" })
        .then(response => {
            /*Do something with newProduct*/
            let token = response.data.token;

            axios
                .post("http://localhost:5000/pages",  newPage, { headers: { "Authorization": `${token}` } })
                .then( newPage => {
                    /*Do something with newProduct*/
                    console.log( newPage);
                })
                .catch(err => {
                    /*Do something with error, e.g. show error to user*/
                });
        })
        .catch(err => {
            /*Do something with error, e.g. show error to user*/
        });
}
