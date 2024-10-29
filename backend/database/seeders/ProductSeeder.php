<?php
namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 10) as $index) {
            Product::create([
                'barcode' => $faker->unique()->numerify('#####'), // Generate a random 5-digit barcode
                'name' => $faker->words(2, true), // Generate a random product name with 2 words
                'price' => $faker->randomFloat(2, 5, 100), // Random price between 5 and 100
                'stock' => $faker->numberBetween(1, 50), // Random stock between 1 and 50
                'category' => $faker->word, // Random category
                'description' => $faker->sentence, // Random description
            ]);
        }
    }
}