import { reactive } from "vue";

export const store = reactive({
    characters: [],
    categoryFilter: "",
    loading: false
})