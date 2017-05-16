module.exports = (function(){
    var component = null;

    return {
        render : function(taskDescription){
            component = $('<li>');
            textComponent = $('<span>').text(taskDescription);
            deleteComponent = $('<div class=\'glyphicon glyphicon-remove\'/>').on('click',this.delete);
            component.append(textComponent);
            component.append(deleteComponent);
            component.attr('class','list-group-item');
            return component;
        },

        delete : function(evt) {
            component.remove();
        }
    };
});