//frida -U -f com.darvin.security -l pass.js   
Java.perform(function() {
    var MainActivity2 = Java.use('com.darvin.security.MainActivity2');
    var MainActivity = Java.use('com.darvin.security.MainActivity');
    var Intent = Java.use('android.content.Intent');
    var activityThread=Java.use('android.app.ActivityThread');
    var startIntent = Intent.$new();
    var mClass = Java.use('com.darvin.security.MainActivity2$1');

    mClass.onClick.implementation = function() {

            //Java.scheduleOnMainThread(function() {   
                    var i=Intent.$new(activityThread.currentApplication().getApplicationContext(),MainActivity.$new().getClass());
                    activityThread.currentApplication().getApplicationContext().startActivity(i);
                    
            //});//scheduleOnMainThread



    };//onClick
        
        
        
        
//
});//perform
