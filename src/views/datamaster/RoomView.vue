<template>
  <div
    class="bg-green-700 w-full p-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700 my-3"
  >
    <div class="w-full space-y-4">
      <div class="flex justify-between">
        <h1 class="text-2xl font-bold">Buildings</h1>
        <button
          class="rounded-full px-2 py-1 bg-green-200 text-emerald-950 dark:text-green-200 shadow-2xl dark:bg-emerald-950 hover:cursor-pointer"
        >
          <span class="mr-1">+</span> Add New Building
        </button>
      </div>

      <!-- Search and Filter -->
      <div class="flex">
        <div class="flex-1">
          <input
            type="text"
            class="form-input p-2 rounded-full bg-green-200 text-emerald-950 dark:text-green-200 dark:bg-emerald-950 shadow-2xl outline-1 dark:focus:outline-green-200 focus:outline-emerald-950"
            placeholder="Search Building..."
            v-model="searchTerm"
          />
        </div>
        <div class="p-2 text-emerald-950 space-x-2">
          <select
            class="form-input hover:cursor-pointer"
            v-model="jobTitleFilter"
          >
            <option value="">Status</option>
            <option value="administrator">Active</option>
            <option value="nurse">Inactive</option>
          </select>
          <select
            class="form-input hover:cursor-pointer"
            v-model="jobTitleFilter"
          >
            <option value="">10</option>
            <option value="administrator">50</option>
            <option value="nurse">100</option>
          </select>
        </div>
      </div>

      <!-- Table Component -->
      <div
        class="max-w-[450px] max-h-[450px] sm:max-w-full sm:max-h-[550px] overflow-auto rounded-md border"
      >
        <table class="overflow-auto w-full table-auto text-sm border-gray-200">
          <thead
            class="sticky top-0 bg-green-200 text-emerald-950 dark:text-green-200 dark:bg-emerald-950 z-10 shadow-xl"
          >
            <tr>
              <th class="text-left p-2 font-medium">Actions</th>
              <th class="text-left p-2 font-medium">Code</th>
              <th class="text-left p-2 font-medium">Name</th>
              <th class="text-left p-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="person in filteredStaff"
              :key="person.building_id"
              class="hover:bg-green-600 dark:hover:bg-emerald-950"
            >
              <td class="text-left p-2">
                <button
                  class="rounded-full bg-yellow-400 px-2 text-white outline-1 outline-yellow-400 shadow-2xl hover:cursor-pointer"
                >
                  Edit
                </button>
              </td>
              <td class="text-left p-2">{{ person.name }}</td>
              <td class="text-left p-2">{{ person.department }}</td>
              <td class="text-left p-2">
                <span>{{ person.status }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex-1 flex items-center justify-between">
        <div>
          <p class="text-sm text-white">
            Showing <span class="font-medium">1</span> to
            <span class="font-medium">10</span> of
            <span class="font-medium">{{ staff.length }}</span> results
          </p>
        </div>
        <div>
          <nav
            class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border dark:border-green-200 border-emerald-950 bg-green-200 dark:bg-emerald-950 text-sm font-medium text-emerald-950 dark:text-green-200 hover:bg-green-50 dark:hover:bg-green-200 dark:hover:text-emerald-950"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 border dark:border-green-200 border-emerald-950 bg-green-200 dark:bg-emerald-950 text-sm font-medium text-emerald-950 dark:text-green-200 hover:bg-green-50 dark:hover:bg-green-200 dark:hover:text-emerald-950"
            >
              1
            </a>

            <a
              href="#"
              class="relative inline-flex items-center px-2 py-2 rounded-r-md border dark:border-green-200 border-emerald-950 bg-green-200 dark:bg-emerald-950 text-sm font-medium text-emerald-950 dark:text-green-200 hover:bg-green-50 dark:hover:bg-green-200 dark:hover:text-emerald-950"
            >
              <span class="sr-only">Next</span>
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
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
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
    department: "Administration",
    status: "Active",
  },
  {
    name: "John Smith",
    building_id: "EMP-001",
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
        person.building_id.toLowerCase().includes(term) ||
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
