<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('laundry_requests', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id');
            $table->foreignId('dorm_id');
            $table->integer('dorm_num');
            $table->string('author')->nullable()->default(null);
            $table->boolean('is_occupied')->default(false);
            $table->date('date');
            $table->time('time_start');
            $table->time('time_end');
        });

        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id');
            $table->foreignId('dorm_id');
            $table->integer('dorm_num');
            $table->string('author');
            $table->boolean('is_completed')->default(false);
            $table->boolean('is_approved')->default(false);
            $table->date('date_complete');
            $table->string('employee_note');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laundry_requests');
        Schema::dropIfExists('requests');
    }
};
