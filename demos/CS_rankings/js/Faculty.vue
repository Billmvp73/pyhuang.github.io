<template v-for="faculty in Faculty">
    <tr>
        <td>
            &nbsp;&nbsp;&nbsp;&nbsp;
        </td>
        <td>
            <small>
                <a title="Click for author's home page." target="_blank" href="faculty.href" onclick="trackOutboundLink('faculty.href', true); return false;">
                    {{faculty.name}}
                </a>&nbsp;
            </small>
        </td>
        <td align="right">
            <small>
                {{faculty.Pubs}}
            </small>
        </td>
        <td align="right">
            <small>
                {{faculty.Adj}}
            </small>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'faculty',
    props:{
        Faculty:Array
    }
}
</script>