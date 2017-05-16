var taskComponent = require('./task');
var $ = require('jquery');
var rx = require('rxjs/core');

myApp = (function(){
        var list = $('ul');
        var arrayObservable = null;
        var tasks = [];
        return {
            init : function (){
                //adding events
                $('button').on('click',this.onNewTask);
                arrayObservable = rx.Observable.ofObjectChanges(tasks);
                arrayObservable.subscribe(this.onNewTaskAdded);
            },
            onNewTask: function(evt) {
                var newTask = new taskComponent();
                var taskDescription = $('input').val();
                var newLiItem = newTask.render(taskDescription);
                tasks.push({'id':1,'description':'desc'});
                list.append(newLiItem);
            },
            onNewTaskAdded: function(newTask){
                console.log(newTask);
            }
        };
    }
)();

myApp.init();