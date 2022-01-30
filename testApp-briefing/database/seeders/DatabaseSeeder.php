<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        if(DB::table('orders')->count() == 0){

            DB::table('orders')->insert([

                [
                    'uid' => '112348',
                    'order_number' => '491800',
                    'order_status' => 'transferred',
                ],
                [
                    'uid' => '112349',
                    'order_number' => '491801',
                    'order_status' => 'transferred',
                ],
                [
                    'uid' => '112350',
                    'order_number' => '491802',
                    'order_status' => 'transferred',
                ],
                [
                    'uid' => '112351',
                    'order_number' => '491803',
                    'order_status' => 'transferred',
                ],
                [
                    'uid' => '112352',
                    'order_number' => '491804',
                    'order_status' => 'transferred',
                ],
                [
                    'uid' => '112353',
                    'order_number' => '491805',
                    'order_status' => 'transferred',
                ],
                [
                    'uid' => '112354',
                    'order_number' => '491806',
                    'order_status' => 'transferred',
                ],
                [
                    'uid' => '112355',
                    'order_number' => '491807',
                    'order_status' => 'transferred',
                ],
                [
                    'uid' => '112356',
                    'order_number' => '491808',
                    'order_status' => 'transferred',
                ],
                [
                    'uid' => '112358',
                    'order_number' => '491810',
                    'order_status' => 'transferred',
                ]

            ]);
            
        } else { echo "\e[31mTable is not empty, therefore NOT "; }

    }
}
