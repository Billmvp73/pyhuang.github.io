<template v-for="direction in Directions" :key="direction.name">
    <table>
        <thead>
            <tr>
                <th>
                    <p class="text-muted">{{direction.name}}
                        [<a class="area_group_selector" :id="direction.off_id">off</a> | <a class="area_group_selector" :id="direction.on_id">on</a>]
                        </p>
                </th>
            </tr>
        </thead>
        <tbody>
            <field Fields="direction.fields" dName="direction.name">
        </tbody>
    </table>
</template>

<script>
export default {
    name: "directions",
    props:{
        Directions: Array
    },
    components
}
</script>