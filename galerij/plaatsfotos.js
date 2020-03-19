const linksNaarFotos = [
    'https://i.pinimg.com/236x/b8/9f/9d/b89f9d87282fed4c73d0ed5041b790c9.jpg',
    'https://i.pinimg.com/236x/e4/0d/cd/e40dcdb701bc0f03840a1a9a9baca5c9.jpg',
    'https://i.pinimg.com/236x/cd/82/9a/cd829ab9cf227dc20e0c343f68a28cf2.jpg',
    'https://i.pinimg.com/236x/1e/0d/81/1e0d81ae1d17d51bca70d2efc6f54e59--no-knead-bread-dit.jpg',
    'https://www.dejongeturken.com/wp-content/uploads/2018/11/zezeazeazazeazeaeaz-640x470.jpg',
    'https://cdn.pixabay.com/photo/2017/08/10/16/13/cigkofte-2624336_960_720.jpg',
    'https://dgmnuojaamh45.cloudfront.net/images/maaltijden/124792-zeytinyagli-taze-fasulye-500x333.jpg',
    'https://lh5.ggpht.com/-oUjjlFIiXxA/VP2DSSPedpI/AAAAAAAADHU/vTPUH4oz0hA/s640/IMG_20150309_115106.jpg',
    'https://www.proud2bme.nl/fgw.php?action=media&id=129461',
    'https://media-cdn.tripadvisor.com/media/photo-s/0e/5e/7f/7e/yemeklerimiz-ve-restaurant.jpg',
    'https://www.turksekok.nl/?qa=blob&qa_blobid=13853253920623823320',
    'https://www.proud2bme.nl/fgw.php?action=media&id=231534',
    'https://1.bp.blogspot.com/_Qwz9ecyivms/TPAeGlvDHyI/AAAAAAAABqw/jGjrANa3AJc/s1600/PB181852+%2528Gewijzigd%2529.JPG',
    'https://blog-admin.zoover.cloud/wp-content/uploads/2017/05/adobestock_37853115.jpeg',
    'https://previews.123rf.com/images/recebin/recebin1905/recebin190500166/123826804-big-chicken-donner-with-vegetables.jpg',
    'https://www.turkijevisum.nl/wp-content/uploads/2016/02/photodune-11619131-traditional-turkish-bursa-iskender-kebap-garnished-with-grilled-m.jpg',
    'https://lh3.googleusercontent.com/proxy/NqdcdR3TZen4STVHDpTiNArlSvC-HImWWdTFB9m1mkC0nyCCWKkGhJnL0x_E1g5GL2VzzNaLJIzoVbS0lXuMrSbuYnw9VgiFrKUCBYRz-8w0h-sih5E',
    'https://st2.depositphotos.com/6903838/10053/i/950/depositphotos_100530746-stock-photo-mixed-turkish-food-in-istanbul.jpg',
    'https://travelaar.nl/wp-content/uploads/2014/10/DSC06524.jpg',
    'https://i.pinimg.com/originals/43/1d/38/431d3820b17b0ffae03b77380423bb20.jpg',
    'https://i.pinimg.com/originals/87/f6/0d/87f60d01d646428f771265d9c5cb96a3.jpg',
    'https://www.burgertrutjes.nl/wp-content/uploads/2017/06/Kofte-zonder-pakjes-en-zakjes.jpg',
    'https://www.havzanrestaurant.nl/images/joomlart/features-intro/beyti-kebabi-havzan-amsterdam-turkse-restaurant.jpg',
    'https://www.klavertje-arnhem.nl/www.klavertje-arnhem.nl/img/gerechten/5ca7f1d98da7d_20190405_192620.png',
    'https://www.oasehoogkerk.nl/www.oasehoogkerk.nl/img/gerechten/5cf7e7f486921_Turkse-tosti-ua-klein-665x435.png',
];

const houder = document.getElementById('container');

function plaatsEenFoto(url) {
    let item = document.createElement('div');
    item.className = 'item';
    let deFoto = document.createElement('img');
    deFoto.src = url;
    deFoto.alt = 'Turks eten';
    item.append(deFoto);
    houder.append(item);

}

for(let i=linksNaarFotos.length; i>0; i--) {
    let getalletje = Math.floor(Math.random()*linksNaarFotos.length)
    plaatsEenFoto(linksNaarFotos[getalletje]);
    linksNaarFotos.splice(getalletje,1)  
}