const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, './ejs/wrap.ejs'), (err, str) => {
    if(err) {
        return;
    }

    let config = {
        data :[{
                title: '用户名',
                key: 'name'
            }, {
                title: 'appid',
                key: 'appid'
            }, {
                title: '年龄',
                key: 'age'
            }, {
                title: '业务名称',
                key: 'busseness'
            }]
        };

    ejs.render(str.toString(), config, {async: true}).then(html => {
        fs.writeFile(path.resolve(__dirname, './page/input.vue'), html, function(err, data) {
        });
    });
});