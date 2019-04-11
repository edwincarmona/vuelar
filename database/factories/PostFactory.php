<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'slug' => str_slug($faker->sentence),
        'excerpt' => $faker->text(300),
        'body' => $faker->text(800)
    ];
});
