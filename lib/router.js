Router.configure({
    layoutTemplate: 'tLayout',
});

Router.map(function() {
    this.route('tHome', {
        path: '/'
    });
    this.route('tSchedule', {
        path: '/schedule'
    });
    this.route('tAbout', {
        path: '/about'
    });
    
    this.route('tContact', {
        path: '/contact'
    });
});
