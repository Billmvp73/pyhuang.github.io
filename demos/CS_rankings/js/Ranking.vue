<template v-for="university in output" :key="university.name">
    <tbody>
        <tr>
                <td>
                    {{university.ranking}}&nbsp;
                </td>
                <td>
                    &nbsp;{{university.name}}&nbsp;
                </td>
                <td align="right">{{university.count}}</td>
        </tr>
        <tr>
            <td>
                    <table class="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <td>
                                    <small>
                                        <em>
                                            <abbr title="Click on an author's name to go to their home page.">Faculty

                                            </abbr>
                                        </em>
                                    </small>
                                </td>
                                <td align="right">
                                    <small>
                                        <em>&nbsp;&nbsp;
                                            <abbr title="Total number of publications (click for DBLP entry).">#&nbsp;Pubs

                                            </abbr> 
                                        </em>
                                    </small>
                                </td>
                                <td align="right">
                                    <small>
                                        <em>
                                            <abbr title="Count divided by number of co-authors">Adj.&nbsp;#

                                            </abbr>
                                        </em>
                                    </small>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <faculty Faculty="university.facultys"></faculty>
                        </tbody>
                    </table>
            </td>
        </tr>
    </tbody>
</template>

<script>
import faculty from "./Faculty.vue"
export default {
    name: "Ranking",
    props: {
        output:Array
    },
    components:{
        faculty
    }
}
</script>

