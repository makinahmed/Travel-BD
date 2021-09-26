const places = [
    {
        placeName: 'Aston Martin',
        cost: 26342313,
        color: "black",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        length: '900mm'
    }, {
        placeName: 'Mercedes',
        cost: 8645102,
        color: "Black",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
        length: '900mm'
    },
    {
        placeName: 'BMW',
        cost: 34534223,
        color: "Sky Blue",
        image: "https://www.bmw.com.bd/content/dam/bmw/common/all-models/2-series/gran-coupe/2019/Inspire-Highligt/bmw-2-series-gran-coupe-inspire-ag-sp-xxl.jpg",
        length: '850mm'
    },
    {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    },
    {
        placeName: 'Cadillac',
        cost: 5623536,
        color: "White",
        image: "https://cdn.motor1.com/images/mgl/e2xBp/s3/2022-cadillac-ct5-v-blackwing.jpg",
        length: '855mm'
    }, {
        placeName: 'Mercedes',
        cost: 8645102,
        color: "Black",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
        length: '900mm'
    },
    {
        placeName: 'Chevrolet',
        cost: 5165464,
        color: "Coral",
        image: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2022/performance/camaro/02-images/mov/2022-camaro-masthead-01.jpg?imwidth=960",
        length: '920mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    }, {
        placeName: 'Mercedes',
        cost: 8645102,
        color: "Black",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
        length: '900mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    },
    {
        placeName: 'Datsun',
        cost: 54541654,
        color: "Red",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwd7aJmeSoZIDCLMFNjZMx5teoraLH_4k8A&usqp=CAU",
        length: '900mm'
    },
    {
        placeName: 'Ferrari',
        cost: 577454485,
        color: "Red",
        image: "https://cdn.motor1.com/images/mgl/JvB4M/s1/2021-ferrari-omologata.jpg",
        length: '855mm'
    },
    {
        placeName: 'Ford',
        cost: 5146541,
        color: "Blue",
        image: "https://images.financialexpress.com/2021/07/Ford-EcoSport-SE.jpg",
        length: '800mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    },
    {
        placeName: 'Aston Martin',
        cost: 23452200,
        color: "Dark Black",
        image: "https://robbreport.com/wp-content/uploads/2020/09/victor01.jpg?w=1000",
        length: '855mm'
    }, {
        placeName: 'BMW',
        cost: 34534223,
        color: "Sky Blue",
        image: "https://www.bmw.com.bd/content/dam/bmw/common/all-models/2-series/gran-coupe/2019/Inspire-Highligt/bmw-2-series-gran-coupe-inspire-ag-sp-xxl.jpg",
        length: '850mm'
    },
    {
        placeName: 'Honda',
        cost: 56466516,
        color: "Gray",
        image: "https://i.ytimg.com/vi/EOipqVRNGrE/maxresdefault.jpg",
        length: '800mm'
    }, {
        placeName: 'Datsun',
        cost: 54541654,
        color: "Red",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwd7aJmeSoZIDCLMFNjZMx5teoraLH_4k8A&usqp=CAU",
        length: '900mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    },
    {
        placeName: 'Mercedes',
        cost: 8645102,
        color: "Black",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
        length: '900mm'
    }, {
        placeName: 'Datsun',
        cost: 54541654,
        color: "Red",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwd7aJmeSoZIDCLMFNjZMx5teoraLH_4k8A&usqp=CAU",
        length: '900mm'
    }, {
        placeName: 'Mercedes',
        cost: 8645102,
        color: "Black",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
        length: '900mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    },
    {
        placeName: 'Nissan',
        cost: 265841103,
        color: "Black",
        image: "https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2021/03/chrome-image-2021-nissan-maxima-01.png",
        length: '855mm'
    }, {
        placeName: 'BMW',
        cost: 34534223,
        color: "Sky Blue",
        image: "https://www.bmw.com.bd/content/dam/bmw/common/all-models/2-series/gran-coupe/2019/Inspire-Highligt/bmw-2-series-gran-coupe-inspire-ag-sp-xxl.jpg",
        length: '850mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    },
    {
        placeName: 'Porsche',
        cost: 757221472,
        color: "Orange",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAkKHc1-2Mb26gJQzxs5_Oz5opbq-zagbjA&usqp=CAU",
        length: '920mm'
    },
    {
        placeName: 'Rolls-Royce',
        cost: 830680638,
        color: "Navy Blue",
        image: "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-2-phantom-swb/page-properties/rolls-royce-phantom-twin-pulse.jpg",
        length: '900mm'
    },
    {
        placeName: 'Toyota',
        cost: 2345210,
        color: "White",
        image: "https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/c-hr/2NA/1.png?bg=fff&fm=webp&w=930",
        length: '855mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    }, {
        placeName: 'Datsun',
        cost: 54541654,
        color: "Red",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwd7aJmeSoZIDCLMFNjZMx5teoraLH_4k8A&usqp=CAU",
        length: '900mm'
    },
    {
        placeName: 'BMW',
        cost: 34534223,
        color: "Sky Blue",
        image: "https://www.bmw.com.bd/content/dam/bmw/common/all-models/2-series/gran-coupe/2019/Inspire-Highligt/bmw-2-series-gran-coupe-inspire-ag-sp-xxl.jpg",
        length: '850mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    }, {
        placeName: 'Datsun',
        cost: 54541654,
        color: "Red",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwd7aJmeSoZIDCLMFNjZMx5teoraLH_4k8A&usqp=CAU",
        length: '900mm'
    },

    {
        placeName: 'Mercedes',
        cost: 8645102,
        color: "Black",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
        length: '900mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    }, {
        placeName: 'Audi',
        cost: 2435214000,
        color: "Dakr Silver",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
        length: '800mm'
    },

]

/*












,
    {
      "brandName": "Mercedes",
      "cost": 864102,
      "Vehicle": "Black",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
      "zilla": "900mm",
      "isSecure": "ture"
    },
    {
      "brandName": "BMW",
      "cost": 3453223,
      "Vehicle": "Sky Blue",
      "image": "https://www.bmw.com.bd/content/dam/bmw/common/all-models/2-series/gran-coupe/2019/Inspire-Highligt/bmw-2-series-gran-coupe-inspire-ag-sp-xxl.jpg",
      "zilla": "850mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Audi",
      "cost": 243514000,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "false"
    },
    {
      "brandName": "Audi",
      "cost": 243521400,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Cadillac",
      "cost": 9623536,
      "Vehicle": "White",
      "image": "https://cdn.motor1.com/images/mgl/e2xBp/s3/2022-cadillac-ct5-v-blackwing.jpg",
      "zilla": "855mm",
      "isSecure": "false"
    },
    {
      "brandName": "Mercedes",
      "cost": 845102,
      "Vehicle": "Black",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
      "zilla": "900mm",
      "isSecure": "false"
    },
    {
      "brandName": "Chevrolet",
      "cost": 5115464,
      "Vehicle": "Coral",
      "image": "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2022/performance/camaro/02-images/mov/2022-camaro-masthead-01.jpg?imwidth=960",
      "zilla": "920mm",
      "isSecure": "false"
    },
    {
      "brandName": "Audi",
      "cost": 25214000,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Mercedes",
      "cost": 86451002,
      "Vehicle": "Black",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
      "zilla": "900mm",
      "isSecure": "false"
    },
    {
      "brandName": "Audi",
      "cost": 243544000,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "false"
    },
    {
      "brandName": "Datsun",
      "cost": 54416054,
      "Vehicle": "Red",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwd7aJmeSoZIDCLMFNjZMx5teoraLH_4k8A&usqp=CAU",
      "zilla": "900mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Ferrari",
      "cost": 577444850,
      "Vehicle": "Red",
      "image": "https://cdn.motor1.com/images/mgl/JvB4M/s1/2021-ferrari-omologata.jpg",
      "zilla": "855mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Ford",
      "cost": 51465510,
      "Vehicle": "Blue",
      "image": "https://images.financialexpress.com/2021/07/Ford-EcoSport-SE.jpg",
      "zilla": "800mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Audi",
      "cost": 244352140,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Aston Martin",
      "cost": 23152200,
      "Vehicle": "Dark Black",
      "image": "https://robbreport.com/wp-content/uploads/2020/09/victor01.jpg?w=1000",
      "zilla": "855mm",
      "isSecure": "ture"
    },
    {
      "brandName": "BMW",
      "cost": 3454123,
      "Vehicle": "Sky Blue",
      "image": "https://www.bmw.com.bd/content/dam/bmw/common/all-models/2-series/gran-coupe/2019/Inspire-Highligt/bmw-2-series-gran-coupe-inspire-ag-sp-xxl.jpg",
      "zilla": "850mm",
      "isSecure": "false"
    },
    {
      "brandName": "Honda",
      "cost": 56469516,
      "Vehicle": "Gray",
      "image": "https://i.ytimg.com/vi/EOipqVRNGrE/maxresdefault.jpg",
      "zilla": "800mm",
      "isSecure": "false"
    },
    {
      "brandName": "Datsun",
      "cost": 50541654,
      "Vehicle": "Red",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwd7aJmeSoZIDCLMFNjZMx5teoraLH_4k8A&usqp=CAU",
      "zilla": "900mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Audi",
      "cost": 295214000,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "false"
    },
    {
      "brandName": "Audi",
      "cost": 24721400,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Mercedes",
      "cost": 86453302,
      "Vehicle": "Black",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
      "zilla": "900mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Datsun",
      "cost": 54541651,
      "Vehicle": "Red",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwd7aJmeSoZIDCLMFNjZMx5teoraLH_4k8A&usqp=CAU",
      "zilla": "900mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Mercedes",
      "cost": 83645102,
      "Vehicle": "Black",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
      "zilla": "900mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Audi",
      "cost": 2458214000,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Nissan",
      "cost": 265823103,
      "Vehicle": "Black",
      "image": "https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2021/03/chrome-image-2021-nissan-maxima-01.png",
      "zilla": "855mm",
      "isSecure": "ture"
    },
    {
      "brandName": "BMW",
      "cost": 345332223,
      "Vehicle": "Sky Blue",
      "image": "https://www.bmw.com.bd/content/dam/bmw/common/all-models/2-series/gran-coupe/2019/Inspire-Highligt/bmw-2-series-gran-coupe-inspire-ag-sp-xxl.jpg",
      "zilla": "850mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Audi",
      "cost": 226214000,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "false"
    },
    {
      "brandName": "Porsche",
      "cost": 754121472,
      "Vehicle": "Orange",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAkKHc1-2Mb26gJQzxs5_Oz5opbq-zagbjA&usqp=CAU",
      "zilla": "920mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Rolls-Royce",
      "cost": 830684038,
      "Vehicle": "Navy Blue",
      "image": "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-2-phantom-swb/page-properties/rolls-royce-phantom-twin-pulse.jpg",
      "zilla": "900mm",
      "isSecure": "false"
    },
    {
      "brandName": "Toyota",
      "cost": 2345850,
      "Vehicle": "White",
      "image": "https://www.toyota.com/imgix/responsive/images/mlp/Vehicleizer/2021/c-hr/2NA/1.png?bg=fff&fm=webp&w=930",
      "zilla": "855mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Audi",
      "cost": 24352500,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Datsun",
      "cost": 54541454,
      "Vehicle": "Red",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwd7aJmeSoZIDCLMFNjZMx5teoraLH_4k8A&usqp=CAU",
      "zilla": "900mm",
      "isSecure": "false"
    },
    {
      "brandName": "BMW",
      "cost": 3453623,
      "Vehicle": "Sky Blue",
      "image": "https://www.bmw.com.bd/content/dam/bmw/common/all-models/2-series/gran-coupe/2019/Inspire-Highligt/bmw-2-series-gran-coupe-inspire-ag-sp-xxl.jpg",
      "zilla": "850mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Audi",
      "cost": 24374000,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "false"
    },
    {
      "brandName": "Datsun",
      "cost": 547654,
      "Vehicle": "Red",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwd7aJmeSoZIDCLMFNjZMx5teoraLH_4k8A&usqp=CAU",
      "zilla": "900mm",
      "isSecure": "ture"
    },
    {
      "brandName": "Mercedes",
      "cost": 869102,
      "Vehicle": "Black",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS32KT_mJJ9xizdyuqvnn8pUT1PGChUcXyQ&usqp=CAU",
      "zilla": "900mm",
      "isSecure": "false"

    },
    {
      "brandName": "Audi",
      "cost": 256214000,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "false"
    },
    {
      "brandName": "Audi",
      "cost": 24347400,
      "Vehicle": "Dakr Silver",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/210902101633-audi-grandsphere-concept-car-exlarge-169.jpg",
      "zilla": "800mm",
      "isSecure": "false"
    }


*/