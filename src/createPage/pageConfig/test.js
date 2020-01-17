exports.config = {
  searchBar: {
    data :[
      {
        title: '用户名',
        key: 'name',
        type: 'input'
      }, {
        title: 'appid',
        key: 'appid',
        type: 'input'
      }, {
        title: '年龄',
        key: 'age',
        type: 'select',
        option: {
            api: '/api/get/list',
            multiple: true,
            filterable: false,
        }
      }, {
        title: '业务名称',
        key: 'busseness',
        type: 'input'
      }
    ]
  },
};
