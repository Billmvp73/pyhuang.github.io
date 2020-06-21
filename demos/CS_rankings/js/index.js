var vm = new Vue(
    {
        el: '#app',
        data:{
            checkedFields:[],
            Directions :[
                { 
                    name : 'AI',
                    on_id : 'ai_area_on',
                    off_id : 'ai_area_off',
                    fields:[
                        { name : 'Artifical intelligence'},
                        { name : 'Computer Vision'},
                        { name : 'Machine Learning'}
                    ]
                },
                { 
                    name : 'Systems',
                    on_id : 'sys_area_on',
                    off_id : 'sys_area_off',
                    fields:[
                        { name : 'Computer architecture'},
                        { name : 'Computer networks'},
                        { name : 'Databases'}
                    ]
                }
            ],
            output:[]
        },
        methods: {
            check: function(e){
                console.log(this.checkedFields);
            }
        }
    }
)