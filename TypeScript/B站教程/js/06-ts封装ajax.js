"use strict";
function ajax(config) {
    console.log('开始请求');
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        console.log('成功');
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (config.dataType = 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'GET',
    url: 'http://127.0.0.1:8000/text',
    data: '',
    dataType: 'json'
});
