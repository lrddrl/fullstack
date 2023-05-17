<?php
require '../vendor/autoload.php';

$app = new \Slim\App();

$app->get('/products', function ($request, $response, $args) {
    $data = [
        [
            'id' => 1,
            'name' => 'Center Consoles & Parts',
            'price' => 10.99,
            'department' => 'Electronics',
            'description' => 'Description of the product',
            'stock' => 10,
            'image' => 'https://cdn.shopify.com/s/files/1/1961/1987/collections/GECS-001-BK-1_962a9bcb-5e71-41a9-87ff-d8a2bbfa3bea_large.jpg?v=1679522247',
        ],
        [
            'id' => 2,
            'name' => 'Dash cover',
            'price' => 29.99,
            'department' => 'Electronics',
            'description' => 'Description of the product',
            'stock' => 10,
            'image' => 'https://cdn.shopify.com/s/files/1/1961/1987/collections/ZTL-Y-0088_ecbd0c75-a453-457a-a3e4-3a914f1eadf9_large.jpg?v=1587020053',
        ],
        [
            'id' => 3,
            'name' => 'Sun version',
            'price' => 3.99,
            'department' => 'Clothing',
            'description' => 'Description of the product',
            'stock' => 10,
            'image' => 'https://cdn.shopify.com/s/files/1/1961/1987/collections/ZTL-Y-0155-GY_large.jpg?v=1679547422',
        ],
        [
            'id' => 4,
            'name' => 'Pillar Panels',
            'price' => 7.99,
            'department' => 'Clothing',
            'description' => 'Description of the product',
            'stock' => 10,
            'image' => 'https://cdn.shopify.com/s/files/1/1961/1987/collections/ZTL-Y-0295-BE-1_large.jpg?v=1665424544',
        ],
        [
            'id' => 5,
            'name' => 'Interior Door',
            'price' => 6.99,
            'department' => 'Home',
            'description' => 'Description of the product',
            'stock' => 10,
            'image' => 'https://cdn.shopify.com/s/files/1/1961/1987/collections/PT-ZTL-9052-RH_d0828890-3910-42f5-980c-5640ad66e379_large.jpg?v=1587078996',
        ],
        [
            'id' => 6,
            'name' => 'Control Switch',
            'price' => 5.99,
            'department' => 'Home',
            'description' => 'Description of the product',
            'stock' => 10,
            'image' => 'https://cdn.shopify.com/s/files/1/1961/1987/collections/WSW-025_large.jpg?v=1621111085',
        ],
    ];

    return $response->withJson($data);
});


$app-> run();
?>