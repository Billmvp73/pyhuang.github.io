var VueComponent1 = Vue.extend({
    template: '#app1',
    data: function() {
        return {
            Directions: []
        }
    }
})

var VueComponent2=Vue.extend({
    template: '#app2',
    data: function() {
        return {
            output: []
        }
    }
})
var vm = new Vue(
    {
        el: 'body',
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
)

new VueComponent1().$mount('#app1');
var app2 = Vue.component('app2', VueComponent2);