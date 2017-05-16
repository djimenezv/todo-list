var taskComponent = require('./task');
var $ = require('jquery');

myApp = (function(){
        var list = $('ul');
        var arrayObservable = null;
        var tasks = [];
        return {
            init : function (){
                //adding events
                $('button').on('click',this.onNewTask);
            },
            onNewTask: function(evt) {
                if($('input').val() !== '') {
                    var newTask = new taskComponent();
                    var taskDescription = $('input').val();
                    var newLiItem = newTask.render(taskDescription);
                    tasks.push({'id':1,'description':'desc'});
                    list.append(newLiItem);
                }
            }
        };
    }
)();

myApp.init();