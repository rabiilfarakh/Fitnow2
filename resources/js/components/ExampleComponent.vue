<template>
    <div>
        <button @click="showModal = true" class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Add</button>
        <!-- Votre table et le modal -->
        <table class="mt-1 divide-y divide-gray-200 border-solid border-2 border-black">
            <thead>
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Poids</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Height</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">biceps</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="progression in progressions" :key="progression.id">
                    <td class="px-6 py-4 whitespace-nowrap">{{progression.id}}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{progression.poids}} <span class="text-gray-600">kg</span></td>
                    <td class="px-6 py-4 whitespace-nowrap">{{progression.height}} <span class="text-gray-600">cm</span></td>
                    <td class="px-6 py-4 whitespace-nowrap">{{progression.biceps}} <span class="text-gray-600">cm</span></td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span v-if="progression.status === 'Non terminé'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            {{ progression.status }}
                        </span>
                        <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {{ progression.status }}
                        </span>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap">
                        <button @click="updateModal(progression)" class="px-4 py-2 font-medium text-white bg-yellow-300 rounded-md hover:bg-yellow-200 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Update</button>
                        <button @click="deleteProgression(progression.id)" class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal add/update -->
        <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <strong class="block text-xl py-4">{{ isUpdate ? 'Update' : 'Add' }} Progression</strong>
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <input v-model="progression.poids" placeholder="Poids" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="poids" type="text" >
                        </div>

                        <div class="mb-4">
                            <input v-model="progression.height" placeholder="Height" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="height" type="text">
                        </div>

                        <div class="mb-4">
                            <input v-model="progression.biceps" placeholder="Biceps" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biceps" type="text">
                        </div>

                        <div class="mb-4">
                            <input v-model="progression.mollet" placeholder="Mollet" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mollet" type="text" >
                        </div>
                    </form>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button @click="isUpdate ? updateProgression() : addProgression()" type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">{{ isUpdate ? 'Update' : 'Add' }}</button>
                        <button @click="showModal = false" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Arrière-plan modal -->
        <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="showModal = false"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            progressions: [],
            progression: {poids: "", height: "", biceps: "", mollet: "" },
            showModal: false,
            isUpdate: false
        }
    },

    methods: {
        getProgressions() {
            axios.get('/api/progression')
                .then(res => {
                    this.progressions = res.data;
                })
                .catch(err => console.error(err));
        },

        addProgression() {
            axios.post('/api/progression', this.progression)
                .then(res => {
                    this.getProgressions();
                    this.showModal = false;
                    this.progression = {poids: "", height: "", biceps: "", mollet: "" };
                })
                .catch(err => console.error(err));
        },

        updateModal(progression) {
            this.progression = { 
                id: progression.id,
                poids: progression.poids,
                height: progression.height,
                biceps: progression.biceps,
                mollet: progression.mollet
            };
            this.isUpdate = true; 
            this.showModal = true;
        },

        updateProgression() {
            axios.put(`/api/progression/${this.progression.id}`, this.progression)
                .then(res => {
                    this.getProgressions();
                    this.showModal = false;
                    this.progression = {poids: "", height: "", biceps: "", mollet: "" };
                    this.isUpdate = false; 
                })
                .catch(err => console.error(err));
        },

        deleteProgression(id) {
            if (confirm("Are you sure you want to delete this progression?")) {
                axios.delete(`/api/progression/${id}`)
                    .then(res => {
                        this.getProgressions();
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Failed to delete progression.");
                    });
            }
        }
    },

    mounted() {
        this.getProgressions();
    }
}
</script>
