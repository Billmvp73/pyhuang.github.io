<template v-for = "field in Fields" :key="field.name">
    <tr>
        <label for="dName">
            {{field.name}}
        </label>
        <input type="checkbox" name="dName" id="dName"
        :value="field.name" v-model="checkedFields" @change="check($event)" :key="field.name">
    </tr>  
</template>
<script>
export default {
    name: 'field',
    props: {
        Fields: Array,
        dName: String,
    }
}
</script>