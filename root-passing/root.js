Java.perform(function() {
    var MainActivity2 = Java.use("com.darvin.security.MainActivity2"); // Replace 'your.package.name' with the actual package name

    // Hook the isPhoneRooted method
    MainActivity2.isPhoneRooted.implementation = function() {
        console.log('[*] Hooking isPhoneRooted method...');
        
        // You can perform any custom logic here before calling the original method

        // Call the original method
   
 //var result = this.isPhoneRooted();
        // You can modify or log the result here

        return false;
    };
});