<template>
<button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Add</button>
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
                <button class="px-4 py-2 font-medium text-white bg-yellow-300 rounded-md hover:bg-yellow-200 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Update</button>
                <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
            </td>
        </tr>

    </tbody>
</table>
</template>

<script>

export default {

    data() {
            return {
                progressions: []
            }
        },
        mounted() {
            axios.get('/api/progression')
                .then(res => {
                    this.progressions = res.data;
                })
                .catch(err => console.error(err));
        }
    }

</script>
