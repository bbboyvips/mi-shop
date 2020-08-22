// 封装一个操作storage的api,避免客户端出现一堆key value

// 定义一个key,所有数据将在这个key上进行操作
const KEY = 'mi';

export default {
    // 获取整个storage对象
    getStorage() {
        const val = window.sessionStorage.getItem(KEY) || "{}";
        return JSON.parse(val);
    },
    // 存储
    setItem(module, value, key) {
        if (!key) {
            let val = this.getStorage();
            if (!val) {
                val = {};
            }
            val[module] = value;
            return window.sessionStorage.setItem(KEY, JSON.stringify(val));
        }
        let val = this.getItem(module);
        if (!val) {
            val = {};
        }
        if (!val[key]) {
            val[key] = {}
        }
        val[key] = value;
        this.setItem(module, val);
    },
    // 取出
    getItem(module, key) {
        if (!key) {
            let val = this.getStorage();
            return val[module];
        }
        let val = this.getItem(module);
        return val[key];

    },
    // 删除
    deleteItem(module, key) {
        let val = this.getStorage();
        if (!key) {
            delete val[module];
            return window.sessionStorage.setItem(KEY, JSON.stringify(val));
        }
        delete val[module][key];
        return window.sessionStorage.setItem(KEY, JSON.stringify(val));
    }
}