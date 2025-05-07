<template>
  <MainLayout>
    <h1 class="font-bold text-2xl">Dashboard</h1>
    <!-- Fast Statistic -->
    <div class="flex justify-center items-center space-x-2 my-4">
      <div
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        Total Patients Daily
      </div>
      <div
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        Total Patients Monthly
      </div>
      <div
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        Monthly Revenue
      </div>
      <div
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        Bed Occupancy Rate (BOR)
      </div>
    </div>
    <!-- Trend Graph -->
    <div class="flex justify-center items-center space-x-2 my-4">
      <div
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        Patient Visits
      </div>
      <!-- Filter -->
    </div>
    <!-- Finance Summary -->
    <div class="flex justify-center items-center space-x-2 my-4">
      <div
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        Comparison Of Paid off
      </div>
      <!-- Donut Chart paid bills -->
      <div
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        Revenue/Expense
      </div>
      <!-- Donut Chart paid bills -->
      <div
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        Average Cost Per Patient
      </div>
      <!-- average cost per patient -->
    </div>
    <!-- Top 5  Table-->
    <div class="flex justify-center items-center space-x-2 my-4">
      <div
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        Disease Diagnoses
      </div>
      <div
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        Prescribed Medication
      </div>
    </div>

    <!-- Notification Panel -->
    <div class="flex justify-center items-center space-x-2 my-4">
      <div
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        Notification Panel
      </div>
    </div>
  </MainLayout>
</template>
<script setup lang="ts">
import MainLayout from "@/components/layout/MainLayout.vue";
</script>
