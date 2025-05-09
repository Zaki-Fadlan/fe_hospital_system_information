<template>
  <div
    class="bg-green-700 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700 my-3"
  >
    <div class="w-full space-y-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Bed</h1>
        <button class="btn btn-primary">
          <span class="mr-2">+</span> Add Staff Member
        </button>
      </div>

      <!-- Search and Filter -->
      <div class="flex gap-4">
        <div class="flex-1">
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >Search</label
          >
          <input
            type="text"
            class="form-input"
            placeholder="Search staff..."
            v-model="searchTerm"
          />
        </div>
        <div class="w-full md:w-48">
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >Department</label
          >
          <select class="form-input" v-model="departmentFilter">
            <option value="">All Departments</option>
            <option value="administration">Administration</option>
            <option value="nursing">Nursing</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="laboratory">Laboratory</option>
            <option value="it">IT</option>
          </select>
        </div>
        <div class="w-full md:w-48">
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >Job Title</label
          >
          <select class="form-input" v-model="jobTitleFilter">
            <option value="">All Job Titles</option>
            <option value="administrator">Administrator</option>
            <option value="nurse">Nurse</option>
            <option value="pharmacist">Pharmacist</option>
            <option value="technician">Technician</option>
            <option value="specialist">Specialist</option>
          </select>
        </div>
      </div>

      <!-- Table Component -->
      <div
        class="max-w-[450px] max-h-[450px] sm:max-w-full sm:max-h-[550px] overflow-auto rounded-md border"
      >
        <table class="overflow-auto w-full table-auto text-sm border-gray-200">
          <thead>
            <tr>
              <th
                class="text-left p-2 font-medium text-gray-600 dark:text-gray-300"
              >
                Actions
              </th>
              <th
                class="text-left p-2 font-medium text-gray-600 dark:text-gray-300"
              >
                Code
              </th>
              <th
                class="text-left p-2 font-medium text-gray-600 dark:text-gray-300"
              >
                Name
              </th>
              <th
                class="text-left p-2 font-medium text-gray-600 dark:text-gray-300"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="person in filteredStaff"
              :key="person.employee_id"
              class="hover:bg-green-700 dark:hover:bg-emerald-950"
            >
              <td class="text-left p-2">
                <button class="text-blue-500 hover:underline">Edit</button>
                <button class="text-red-500 hover:underline ml-2">
                  Delete
                </button>
              </td>
              <td class="text-left p-2">{{ person.department }}</td>
              <td class="text-left p-2">{{ person.name }}</td>
              <td class="text-left p-2">
                <span>{{ person.status }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const searchTerm = ref("");
const departmentFilter = ref("");
const jobTitleFilter = ref("");
const currentPage = ref(1);

// Define table columns
const columns = [
  { field: "staffMember", label: "Staff Member", sortable: true },
  { field: "department", label: "Department", sortable: true },
  { field: "job_title", label: "Job Title", sortable: true },
  { field: "role", label: "Role", sortable: true },
  { field: "contact", label: "Contact", sortable: false },
  { field: "status", label: "Status", sortable: true },
];

// Sample data for staff
const staff = ref([
  {
    name: "John Smith",
    employee_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
]);

// Process staff data to include staffMember and contact fields for the table
const processedStaff = computed(() => {
  return staff.value.map((s) => ({
    ...s,
    staffMember: s.name, // This will be replaced by the custom template
  }));
});

// Filtered staff based on search term and filters
const filteredStaff = computed(() => {
  let result = processedStaff.value;

  // Apply search filter
  if (searchTerm.value) {
    const term = searchTerm.value.toLowerCase();
    result = result.filter(
      (person) =>
        person.name.toLowerCase().includes(term) ||
        person.employee_id.toLowerCase().includes(term) ||
        person.department.toLowerCase().includes(term)
    );
  }

  // Apply department filter
  if (departmentFilter.value) {
    result = result.filter(
      (person) =>
        person.department.toLowerCase() === departmentFilter.value.toLowerCase()
    );
  }

  return result;
});

// Handle sorting event
const handleSort = (sortData: { field: string; order: string }) => {
  console.log("Sorting by:", sortData.field, "Order:", sortData.order);
};

// Handle page change event
const handlePageChange = (page: number) => {
  currentPage.value = page;
  console.log("Current page:", page);
};
</script>
