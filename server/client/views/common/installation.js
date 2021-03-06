Template.installation.rendered = function(){
    var template = this;
    
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
        
            setTimeout(function(){
                if(chrome && ($('.meteor-spotting-is-installed').length === 0)){
                    template.$('.jumbotron')
                        .removeClass('hidden').addClass('animated pulse');
                }
            },500);
        }
    },100);
};