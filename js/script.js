$(document).ready(function()
    {
        $.ajax({
            url: "https://api.airtable.com/v0/appTcNfokoNiW3RHR/musics?api_key=keyHB9YheEhsUXTkY",
            type:"GET",
            data: "json",
            jsonp: "jsoncallback",
            success: function(data)
            {console.log(data);
                $("#template").tmpl(data.records).appendTo("#placeholder");
            },
            error: function(XMLHttpRequest, textStatus, ErrorThrown){console.log(XMLHttpRequest, textStatus, ErrorThrown)}
        });
    });