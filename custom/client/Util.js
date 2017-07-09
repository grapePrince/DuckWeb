define(
['bluebird'],
function (Promise) {
    var promisedRequest = function(url, data, type) {
        if (!type) {
            type = "GET";
        }
        return new Promise((resolve, reject) => {
            $.ajax({
                type: type,
                dataType: "json",
                cache: false,
                url: url,
                data: data,
            }).done((result) => {
                resolve(result);
            }).fail( function (jqXHR, textStatus, errorThrown) {
                console.log("ajaxRequest failed!");
                console.log(jqXHR);
                resolve({
                    jqXHR: jqXHR, 
                    textStatus: textStatus, 
                    errorThrown: errorThrown
                });
            }).always(function() {
            }); 
        });
    };
    return {
        promisedRequest: promisedRequest
    }
});