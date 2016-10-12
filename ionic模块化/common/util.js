var APPUtil = {
    getFileData : function( url, callback ){
        var request = new XMLHttpRequest();
        request.open( "GET", url , false);
        request.onreadystatechange = function(){
            if( request.readyState !== 4 ) return;
            if( request.status === 200 ){
                callback(request.responseText);
            }
        };
        request.send( null );
    }
};