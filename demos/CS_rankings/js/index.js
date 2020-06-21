import Ranking from './Ranking.vue'

new Vue(
    {
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
        components: {
            Ranking
        },
        methods: {
            check: function(e){
                console.log(this.checkedFields);
                fetch('./rankings.json')
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        var i = 0;
                        for(i=0; i < this.checkedFields.length;i++){
                            var field = this.checkedFields[i];
                            this.output.push(data.field);
                        }
                    })
            }
        }
    }
).$mount('#app2');