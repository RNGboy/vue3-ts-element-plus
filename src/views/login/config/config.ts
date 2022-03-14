// 检验规则配置
export const accountRules = {
  name: [
    {
      required: true,
      message: '用户名是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a=z0-9]{5,10}$/,
      message: '密码必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ]
}

export const phoneRules = {
  phone: [
    {
      required: true,
      message: '用户名是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字'
    }
  ],
  code: [
    {
      required: true,
      message: '密码是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a=z0-9]{5,10}$/,
      message: '密码必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ]
}