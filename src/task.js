module.exports = (function(){
    var component = null;

    return {
        render : function(taskDescription){
            component = $('<li>');
            textComponent = $('<span>').text(taskDescription);
            deleteComponent = $('<div class=\'glyphicon glyphicon-remove\'/>').on('click',this.delete);
            taskComplete = $('<div class=\'glyphicon glyphicon-ok\'/>').on('click',this.complete);
            component.append(textComponent);
            component.append(deleteComponent);
            component.append(taskComplete);
            component.attr('class','list-group-item');
            return component;
        },

        delete : function(evt) {
            component.remove();
        },

        complete : function(evt) {
            $(evt.currentTarget).siblings('span').addClass('tachado');
        }

    };
});