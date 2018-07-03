import base from './src/css/base.less';
import common from './src/css/common.less';

// base.use();
// base.unuse();

const div = document.getElementById('container');
div.innerHTML = `<p class="${base.fontColor}">测试下字体颜色是否变成了白色</p>`