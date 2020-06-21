<template v-for="direction in Directions" :key="direction.name">
    <thead>
        <tr>
            <th>
                <p class="text-muted">{{direction.name}}
                    [<a class="area_group_selector" :id="direction.off_id">off</a> | <a class="area_group_selector" :id="direction.on_id">on</a>]
                    </p>
            </th>
        </tr>
    </thead>
    <table v-for="direction in Directions" :key="direction.name">
        <tbody v-for = "field in direction.fields" :key="field.name">
                <tr>
                    <label for="direction.name">
                        {{field.name}}
                    </label>
                    <input type="checkbox" name="direction.name" id="direction.name"
                    :value="field.name" v-model="checkedFields" @change="check($event)" :key="field.name">
                </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "directions",
    props:{
        Directions: Array
    }
}
</script>