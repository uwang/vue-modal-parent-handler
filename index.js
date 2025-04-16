/**
 * 弹窗内再弹窗处理工具
 * 功能：
 *   1. 弹窗显示前，将父弹窗移出 viewport
 *   2. 弹窗关闭前，将父弹窗拉回 viewport
 */
export default {
    methods: {
      pushParentAway(parentClass) {
        if (parentClass) {
          const element = document.querySelector(`.${parentClass}`) && document.querySelector(`.${parentClass}`).parentElement;
          if (element) {
            element.style.transform = 'translateX(-100vw)';
          } else {
            console.warn(`Parent element with class "${parentClass}" not found`);
          }
        }
      },
      pullParentBack(parentClass) {
        if (parentClass) {
          const element = document.querySelector(`.${parentClass}`) && document.querySelector(`.${parentClass}`).parentElement;
          if (element) {
            element.style.transform = 'none';
          }
        }
      }
    }
  }