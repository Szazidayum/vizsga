<?php

use App\Models\Szavak;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id();
            $table->string('angol');
            $table->string('magyar');
            $table->foreignId('temaId')->references('id')->on('temas');
            $table->timestamps();
        });

        Szavak::create(["angol" => "beautiful", "magyar" => "gyönyörű", "temaId" => 1]);
        Szavak::create(["angol" => "diligent", "magyar" => "okos", "temaId" => 1]);
        Szavak::create(["angol" => "curious", "magyar" => "kíváncsi", "temaId" => 1]);
        Szavak::create(["angol" => "dog", "magyar" => "kutya", "temaId" => 2]);
        Szavak::create(["angol" => "cat", "magyar" => "macska", "temaId" => 2]);
        Szavak::create(["angol" => "sulphur-crested cockatoo", "magyar" => "sárgabóbitás kakadu", "temaId" => 2]);
    }

    
    public function down(): void
    {
        Schema::dropIfExists('szavaks');
    }
};
