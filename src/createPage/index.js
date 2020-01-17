const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

let config = require('./pageConfig/test');

console.log(config, 999);
let resolvePath = (p) => {
    return path.resolve(__dirname, p);
}

fs.readFile(resolvePath('./ejs/wrap.ejs'), (err, str) => {
    if(err) return;

    let vueHtml = ejs.render(str.toString(), config, {
        filename: resolvePath('./ejs/wrap.ejs')
    });

    console.log(resolvePath('../../../aliyun-admin/src/autoCreatePage'));
    
    fs.writeFile(resolvePath('../../../aliyun-admin/src/autoCreatePage/input.vue'), vueHtml, function(err, data) {
    });

    // console.log(vueHtml);
});