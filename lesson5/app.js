import base from './src/css/base.css';
import './src/css/common.css';

// base.use();
// base.unuse();

const div = document.getElementById('container');
div.innerHTML = `<p class="${base.fontColor}">测试下字体颜色是否变成了白色</p>`