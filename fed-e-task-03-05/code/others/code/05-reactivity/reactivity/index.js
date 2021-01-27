const isObject = (val) => val !== null && typeof val === "object";
const convert = (target) => (isObject(target) ? reactive(target) : target);
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (target, key) => hasOwnProperty.call(target, key);

export function reactive(target) {
  // 判断是否是对象 不是对象则返回
  if (!isObject(target)) return target;

  const handler = {
    get(target, key, receiver) {
      // 收集依赖
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      // 判断获取的是否是对象 如果是对象 则对对象的属性也进行响应式操作 在进行一次get后进行
      return convert(result);
    },
    set(target, key, value, receiver) {
      const oldValue = Reflect.get(target, key, receiver);
      let result = true;
      // 当要设置的值和原本的值不相同的时候才执行
      if (oldValue !== value) {
        result = Reflect.set(target, key, value, receiver);
        // 触发更新
        trigger(target, key);
      }
      return result;
    },
    deleteProperty(target, key) {
      const hadKey = hasOwn(target, key);
      const result = Reflect.deleteProperty(target, key);
      if (hadKey && result) {
        // 触发更新
        trigger(target, key);
      }
      return result;
    },
  };

  return new Proxy(target, handler);
}

let activeEffect = null;
export function effect(callback) {
  activeEffect = callback;
  callback(); // 访问响应式对象属性，去收集依赖
  activeEffect = null;
}

// 收集依赖
let targetMap = new WeakMap();

export function track(target, key) {
  if (!activeEffect) return;
  let depsMap = targetMap.get(target);
  // 判断是否有该对象
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  // 有对象 判断是否有属性
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  // 添加依赖到 该对象的该属性中
  dep.add(activeEffect);
}

// 触发更新
export function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach((effect) => {
      effect();
    });
  }
}

export function ref(raw) {
  // 判断 raw 是否是ref 创建的对象，如果是的话直接返回
  if (isObject(raw) && raw.__v_isRef) {
    return;
  }
  let value = convert(raw);
  const r = {
    __v_isRef: true,
    get value() {
      track(r, "value");
      return value;
    },
    set value(newValue) {
      if (newValue !== value) {
        raw = newValue;
        value = convert(raw);
        trigger(r, "value");
      }
    },
  };
  return r;
}

export function toRefs(proxy) {
  const ret = proxy instanceof Array ? new Array(proxy.length) : {};

  for (const key in proxy) {
    ret[key] = toProxyRef(proxy, key);
  }

  return ret;
}

function toProxyRef(proxy, key) {
  const r = {
    __v_isRef: true,
    get value() {
      return proxy[key];
    },
    set value(newValue) {
      proxy[key] = newValue;
    },
  };
  return r;
}

export function computed(getter) {
  const result = ref();

  effect(() => (result.value = getter()));

  return result;
}
