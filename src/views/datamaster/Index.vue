<template>
  <div class="w-full">
    <h1 class="font-bold text-2xl">Datamaster</h1>
    <ul
      class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 my-4"
    >
      <li
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        <router-link to="/datamaster/building">Building</router-link>
      </li>
      <!-- 
  IGD / Instalasi Gawat Darurat

RI / Rawat Inap

POLI / Poliklinik

RAD / Radiologi

LAB / Laboratorium

OP / Operasi

RM / Rehabilitasi Medis

APO / Apotek

ICU / Intensive Care Unit

NICU / Neonatal Intensive Care Unit

HD / Hemodialisis

RT / Radioterapi

KJ / Kamar Jenazah

ADM / Administrasi

FK / Fasilitas Kesehatan Lainnya
    -->
      <li
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        <router-link to="/datamaster/room">Room</router-link>
      </li>
      <li
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        <router-link to="/datamaster/bed">Bed</router-link>
      </li>
    </ul>
    <hr />
    <ul
      class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 my-4"
    >
      <li
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        <router-link to="/datamaster/room">Province</router-link>
      </li>
      <li
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        <router-link to="/datamaster/room">District</router-link>
      </li>
      <li
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        <router-link to="/datamaster/room">Doctor Type</router-link>
      </li>
      <!-- 
    Dokter Umum (General Practitioner)

Dokter Gigi (Dentist)

Dokter Spesialis Anak (Pediatris)

Dokter Spesialis Bedah (Surgeon)

Dokter Spesialis Jantung (Kardiolog)

Dokter Spesialis Kulit (Dermatolog)

Dokter Spesialis Mata (Oftalmolog)

Dokter Spesialis Telinga, Hidung, Tenggorokan (THT)

Dokter Spesialis Saraf (Neurolog)

Dokter Spesialis Syaraf Anak (Pediatric Neurologist)

Dokter Spesialis Kehamilan dan Kandungan (Obstetrik dan Ginekologi)

Dokter Spesialis Orthopedi

Dokter Spesialis Psikiatri

Dokter Spesialis Penyakit Dalam (Internis)

Dokter Spesialis Radiologi

Dokter Spesialis Anestesiologi

Dokter Spesialis Urologi

Dokter Spesialis Forensik

Dokter Spesialis Gizi (Dokter Gizi)

Dokter Spesialis Endokrinologi

Dokter Spesialis Rehabilitasi Medis (Rehabilitasi Fisik)

Dokter Spesialis Infeksi (Infeksiologi)

Dokter Spesialis Geriatri

Dokter Spesialis Pulmonologi

Dokter Spesialis Hematologi

Dokter Spesialis Onkologi

Dokter Spesialis Kesehatan Kerja (Occupational Medicine)
 -->
    </ul>
    <hr />
    <ul
      class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 my-4"
    >
      <li
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        <router-link to="/datamaster/room">Staff</router-link>
      </li>
      <li
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        <router-link to="/datamaster/room">Schedule</router-link>
      </li>
    </ul>
    <hr />
    <ul
      class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 my-4"
    >
      <li
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        <router-link to="/datamaster/room">Medicine</router-link>
      </li>
      <li
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        <router-link to="/datamaster/room">Service</router-link>
      </li>
      <li
        class="bg-green-600 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
      >
        <router-link to="/datamaster/room">Deals</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts"></script>
