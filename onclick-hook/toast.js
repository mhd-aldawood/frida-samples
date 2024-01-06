Java.perform(function() {
//     var MainActivity2 = Java.use("com.darvin.security.MainActivity2");
// var mClass = Java.use("com.darvin.security.MainActivity2$1");
//frida -U -f com.darvin.security -l pass.js   


  var MainActivity2 = Java.use("com.darvin.security.MainActivity2");
    var MainActivity = Java.use("com.darvin.security.MainActivity");

    var mClass = Java.use("com.darvin.security.MainActivity2$1");
     var Toast = Java.use('android.widget.Toast');
  
    mClass.onClick.implementation = function() {
        // Create a Toast message
       var context = Java.use('android.app.ActivityThread').currentApplication().getApplicationContext();

    Java.scheduleOnMainThread(function() {
        var toast = Java.use("android.widget.Toast");
        toast.makeText(context, Java.use("java.lang.String").$new("This is works!"), 1).show();
    });
    };




});
