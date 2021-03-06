 // 登陆
 export const login = {
   data: {
     status: 'success',
     data: {
       token: 'bnk'
     },
     message: '登陆成功！'
   }
 }
 // 登录时的用户信息
 export const USER_INFO = {
   data: {
     status: 'yes',
     roleId: 0,
     name: 'BNK',
     no: '132212',
     id: '123',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
             path: 'auth',
             component: 'sysManage/auth/AuthManage',
             name: 'authManage',
             meta: {
               title: 'authManage'
             }
           },
           {
             path: 'paramSet',
             component: 'sysManage/paramSet/indexParam',
             name: 'paramSet',
             meta: {
               title: 'paramSet'
             },
             children: [{
                 path: 'houseLayout',
                 component: 'sysManage/paramSet/houseParam/houseLayout',
                 name: 'houseLayout',
                 meta: {
                   title: 'houseLayout'
                 }
               },
               {
                 path: 'houseType',
                 component: 'sysManage/paramSet/houseParam/houseType',
                 name: 'houseType',
                 meta: {
                   title: 'houseType'
                 }
               },
               {
                 path: 'houseStatus',
                 component: 'sysManage/paramSet/houseParam/houseStatus',
                 name: 'houseStatus',
                 meta: {
                   title: 'houseStatus'
                 }
               },
               {
                 path: 'houseStruct',
                 component: 'sysManage/paramSet/houseParam/houseStruct',
                 name: 'houseStruct',
                 meta: {
                   title: 'houseStruct'
                 }
               },
               {
                 path: 'staffDept',
                 component: 'sysManage/paramSet/staffParam/staffDept',
                 name: 'staffDept',
                 meta: {
                   title: 'staffDept'
                 }
               },
               {
                 path: 'staffPost',
                 component: 'sysManage/paramSet/staffParam/staffPost',
                 name: 'staffPost',
                 meta: {
                   title: 'staffPost'
                 }
               },
               {
                 path: 'staffTitle',
                 component: 'sysManage/paramSet/staffParam/staffTitle',
                 name: 'staffTitle',
                 meta: {
                   title: 'staffTitle'
                 }
               }, {
                 path: 'staffType',
                 component: 'sysManage/paramSet/staffParam/staffType',
                 name: 'staffType',
                 meta: {
                   title: 'staffType'
                 }
               }, {
                 path: 'staffStatus',
                 component: 'sysManage/paramSet/staffParam/staffStatus',
                 name: 'staffStatus',
                 meta: {
                   title: 'staffStatus'
                 }
               }, {
                 path: 'staffSpouse',
                 component: 'sysManage/paramSet/staffParam/staffSpouse',
                 name: 'staffSpouse',
                 meta: {
                   title: 'staffSpouse'
                 }
               }, {
                 path: 'rentOption',
                 component: 'sysManage/paramSet/rentParam/rentOption',
                 name: 'rentOption',
                 meta: {
                   title: 'rentOption'
                 }
               }, {
                 path: 'rentPostArea',
                 component: 'sysManage/paramSet/rentParam/rentPostArea',
                 name: 'rentPostArea',
                 meta: {
                   title: 'rentPostArea'
                 }
               }, {
                 path: 'rentPostVal',
                 component: 'sysManage/paramSet/rentParam/rentPostVal',
                 name: 'rentPostVal',
                 meta: {
                   title: 'rentPostVal'
                 }
               }, {
                 path: 'rentTitleArea',
                 component: 'sysManage/paramSet/rentParam/rentTitleArea',
                 name: 'rentTitleArea',
                 meta: {
                   title: 'rentTitleArea'
                 }
               }, {
                 path: 'rentTitleVal',
                 component: 'sysManage/paramSet/rentParam/rentTitleVal',
                 name: 'rentTitleVal',
                 meta: {
                   title: 'rentTitleVal'
                 }
               }, {
                 path: 'fixContent',
                 component: 'sysManage/paramSet/fixParam/fixContent',
                 name: 'fixContent',
                 meta: {
                   title: 'fixContent'
                 }
               }, {
                 path: 'rentalOption',
                 component: 'sysManage/paramSet/rentalParam/rentalOption',
                 name: 'rentalOption',
                 meta: {
                   title: 'rentalOption'
                 }
               }, {
                 path: 'residentRel',
                 component: 'sysManage/paramSet/rentalParam/residentRel',
                 name: 'residentRel',
                 meta: {
                   title: 'residentRel'
                 }
               },
             ]
           }, {
             path: 'announcement',
             component: 'sysManage/announcement',
             name: 'announcement',
             meta: {
               title: 'announcement'
             },
           }
         ]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           roles: ['ADMIN', 'OFFICER'],
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               {
                 path: 'region',
                 component: 'basiceData/buildingRegionData/regionData',
                 name: 'regionManage',
                 meta: {
                   title: 'regionManage'
                 }
               },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
       /* 维修管理 */
       {
         path: '/fixManage',
         component: 'layout/index',
         name: 'fixManage',
         meta: {
           title: 'fixManage'
         }, // you can set roles in root nav
         children: [{
             path: 'fixAccept',
             component: 'fixManage/fixAccept',
             name: 'fixAccept',
             meta: {
               title: 'fixAccept'
             }
           },
           {
             path: 'fixAgree',
             component: 'fixManage/fixAgree',
             name: 'fixAgree',
             meta: {
               title: 'fixAgree'
             }
           }, {
             path: 'fixSuper',
             component: 'fixManage/fixSuper',
             name: 'fixSuper',
             meta: {
               title: 'fixSuper'
             }
           }, {
             path: 'fixApplyManager',
             component: 'fixManage/fixApplyManager',
             name: 'fixApplyManager',
             meta: {
               title: 'fixApplyManager'
             }
           }, {
             path: 'fixBalance',
             component: 'fixManage/fixBalance',
             name: 'fixBalance',
             meta: {
               title: 'fixBalance',
             }
           }, {
             path: 'fixApply',
             component: 'fixManage/fixApply',
             name: 'fixApply',
             meta: {
               title: 'fixApply'
             }
           },
         ]
       },
       /* 租赁管理 */
       {
         path: '/leaseManage',
         component: 'layout/index',
         name: 'leaseManage',
         meta: {
           roles: ['ADMIN', 'OFFICER'],
           title: 'leaseManage'
         }, // you can set roles in root nav
         children: [{
             path: 'hireAccept',
             component: 'leaseManage/hireAccept',
             name: 'hireAccept',
             meta: {
               title: 'hireAccept'
             }
           },
           {
             path: 'hireAgree',
             component: 'leaseManage/hireAgree',
             name: 'hireAgree',
             meta: {
               title: 'hireAgree'
             }
           }, {
             path: 'hireApprove',
             component: 'leaseManage/hireApprove',
             name: 'hireApprove',
             meta: {
               title: 'hireApprove'
             }
           }, {
             path: 'hireSuper',
             component: 'leaseManage/hireSuper',
             name: 'hireSuper',
             meta: {
               title: 'hireSuper'
             }
           }, {
             path: 'hireContract',
             component: 'leaseManage/hireContract',
             name: 'hireContract',
             meta: {
               title: 'hireContract'
             }
           }, {
             path: 'hireApplyManage',
             component: 'leaseManage/hireApplyManage',
             name: 'hireApplyManage',
             meta: {
               title: 'hireApplyManage'
             }
           }, {
             path: 'rentGenerate',
             component: 'leaseManage/rentGenerate',
             name: 'rentGenerate',
             meta: {
               title: 'rentGenerate',
             }
           },
         ]
       },
       /* 网上选房 */
       {
         path: '/online',
         component: 'layout/index',
         name: 'online',
         meta: {
           title: 'online'
         }, // you can set roles in root nav
         children: [{
             path: 'hireStafferSet',
             component: 'online/hireStafferSet',
             name: 'hireStafferSet',
             meta: {
               title: 'hireStafferSet'
             }
           },
           {
             path: 'hireHouseSet',
             component: 'online/hireHouseSet',
             name: 'hireHouseSet',
             meta: {
               title: 'hireHouseSet'
             }
           }, {
             path: 'selfService',
             component: 'online/selfService/index',
             name: 'selfService',
             meta: {
               title: 'selfService',
             }
           }, {
             path: 'hireApply',
             component: 'online/hireApply',
             name: 'hireApply',
             meta: {
               title: 'hireApply',
             }
           },
         ]
       },
       /* 数据分析 */
       {
         path: '/analysis',
         component: 'layout/index',
         name: 'analysis',
         meta: {
           title: 'analysis'
         }, // you can set roles in root nav                                              
         children: [{
             path: 'house',
             component: 'dataAnalysis/house/index',
             name: 'houseAnalysis',
             meta: {
               title: 'houseAnalysis'
             }
           },
           {
             path: 'fix',
             component: 'dataAnalysis/fix/index',
             name: 'fixFormAnalysis',
             meta: {
               title: 'fixFormAnalysis'
             }
           }, {
             path: 'scanning',
             component: 'dataAnalysis/scanning',
             name: 'scanning',
             meta: {
               title: 'scanning'
             }
           }, {
             path: 'monetarySub',
             component: 'dataAnalysis/monetarySub',
             name: 'monetarySub',
             meta: {
               title: 'monetarySub'
             }
           },
         ]
       },
       /* 个人设置 */
       {
         path: '',
         redirect: '/user',
         component: 'layout/index',
         hidden: true,
         name: 'personal',
         meta: {
           title: 'personal'
         }, // you can set roles in root nav                                                               
         //hidden:true,
         children: [{
           path: 'user',
           component: 'personal/index',
           name: 'personal',
           meta: {
             title: 'personal',
           }
         }, ]
       },
       /* 错误界面 */
       {
         path: '*',
         redirect: '/404',
         hidden: true
       }
     ]

   }
 }
 // 用户组列表
 export const authList = [{
     id: 1,
     group_name: '主管1',
     desc: '1',
     state: false,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   },
   {
     id: 2,
     group_name: '普通管理员1',
     desc: '2',
     state: true,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   },
   {
     id: 3,
     group_name: '超级管理员1',
     desc: '3',
     state: true,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   },
   {
     id: 4,
     group_name: '主管2',
     desc: '1',
     state: false,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   },
   {
     id: 5,
     group_name: '普通管理员2',
     desc: '2',
     state: true,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   },
   {
     id: 6,
     group_name: '超级管理员2',
     desc: '3',
     state: true,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   }, {
     id: 7,
     group_name: '主管3',
     desc: '1',
     state: false,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   },
   {
     id: 8,
     group_name: '普通管理员3',
     desc: '2',
     state: true,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   },
   {
     id: 9,
     group_name: '超级管理员3',
     desc: '3',
     state: true,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   }, {
     id: 10,
     group_name: '主管4',
     desc: '1',
     state: false,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   },
   {
     id: 11,
     group_name: '普通管理员4',
     desc: '2',
     state: true,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   },
   {
     id: 12,
     group_name: '超级管理员4',
     desc: '3',
     state: true,
     add_time: '2019-05-12 23:25',
     userRouters: [
       /* 参数设置 */
       {
         path: '/sysmanage',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'sysManage',
         meta: {
           title: 'sysManage'
         }, // you can set roles in root nav
         children: [{
           path: 'paramSet',
           component: 'sysManage/paramSet/indexParam',
           name: 'paramSet',
           meta: {
             title: 'paramSet'
           },
           children: [{
               path: 'houseLayout',
               component: 'sysManage/paramSet/houseParam/houseLayout',
               name: 'houseLayout',
               meta: {
                 title: 'houseLayout'
               }
             },
             // {
             //   path: 'houseType',
             //   component: 'sysManage/paramSet/houseParam/houseType',
             //   name: 'houseType',
             //   meta: {
             //     title: 'houseType'
             //   }
             // },
             // {
             //   path: 'houseStatus',
             //   component: 'sysManage/paramSet/houseParam/houseStatus',
             //   name: 'houseStatus',
             //   meta: {
             //     title: 'houseStatus'
             //   }
             // },
             {
               path: 'houseStruct',
               component: 'sysManage/paramSet/houseParam/houseStruct',
               name: 'houseStruct',
               meta: {
                 title: 'houseStruct'
               }
             },
             {
               path: 'staffDept',
               component: 'sysManage/paramSet/staffParam/staffDept',
               name: 'staffDept',
               meta: {
                 title: 'staffDept'
               }
             },
             {
               path: 'staffPost',
               component: 'sysManage/paramSet/staffParam/staffPost',
               name: 'staffPost',
               meta: {
                 title: 'staffPost'
               }
             },
             {
               path: 'staffTitle',
               component: 'sysManage/paramSet/staffParam/staffTitle',
               name: 'staffTitle',
               meta: {
                 title: 'staffTitle'
               }
             }, {
               path: 'staffType',
               component: 'sysManage/paramSet/staffParam/staffType',
               name: 'staffType',
               meta: {
                 title: 'staffType'
               }
             }, {
               path: 'staffStatus',
               component: 'sysManage/paramSet/staffParam/staffStatus',
               name: 'staffStatus',
               meta: {
                 title: 'staffStatus'
               }
             }, {
               path: 'staffSpouse',
               component: 'sysManage/paramSet/staffParam/staffSpouse',
               name: 'staffSpouse',
               meta: {
                 title: 'staffSpouse'
               }
             }, {
               path: 'rentOption',
               component: 'sysManage/paramSet/rentParam/rentOption',
               name: 'rentOption',
               meta: {
                 title: 'rentOption'
               }
             }, {
               path: 'rentPostArea',
               component: 'sysManage/paramSet/rentParam/rentPostArea',
               name: 'rentPostArea',
               meta: {
                 title: 'rentPostArea'
               }
             }, {
               path: 'rentPostVal',
               component: 'sysManage/paramSet/rentParam/rentPostVal',
               name: 'rentPostVal',
               meta: {
                 title: 'rentPostVal'
               }
             }, {
               path: 'rentTitleArea',
               component: 'sysManage/paramSet/rentParam/rentTitleArea',
               name: 'rentTitleArea',
               meta: {
                 title: 'rentTitleArea'
               }
             }, {
               path: 'rentTitleVal',
               component: 'sysManage/paramSet/rentParam/rentTitleVal',
               name: 'rentTitleVal',
               meta: {
                 title: 'rentTitleVal'
               }
             }, {
               path: 'fixContent',
               component: 'sysManage/paramSet/fixParam/fixContent',
               name: 'fixContent',
               meta: {
                 title: 'fixContent'
               }
             }, {
               path: 'rentalOption',
               component: 'sysManage/paramSet/rentalParam/rentalOption',
               name: 'rentalOption',
               meta: {
                 title: 'rentalOption'
               }
             }, {
               path: 'residentRel',
               component: 'sysManage/paramSet/rentalParam/residentRel',
               name: 'residentRel',
               meta: {
                 title: 'residentRel'
               }
             },
           ]
         }, {
           path: 'announcement',
           component: 'sysManage/announcement',
           name: 'announcement',
           meta: {
             title: 'announcement'
           },
         }]
       },
       /* 基础数据 */
       {
         path: '/basic',
         component: 'layout/index',
         redirect: '/sysmanage/paramSet',
         name: 'basiceData',
         meta: {
           noCache: true,
           title: 'basiceData'
         }, // you can set roles in root nav
         children: [
           // 区域楼栋
           {
             path: 'buildingArea',
             component: 'basiceData/buildingRegionData/indexNav',
             name: 'region',
             redirect: '/basic/buildingArea/campus',
             meta: {
               title: 'region'
             },
             children: [{
                 path: 'campus',
                 component: 'basiceData/buildingRegionData/campus',
                 name: 'campusManage',
                 meta: {
                   title: 'campusManage'
                 }
               },
               // {
               //   path: 'region',
               //   component: 'basiceData/buildingRegionData/regionData',
               //   name: 'regionManage',
               //   meta: {
               //     title: 'regionManage'
               //   }
               // },
               {
                 path: 'building/:id',
                 component: 'basiceData/buildingRegionData/buildingData',
                 name: 'buildingManage',
                 meta: {
                   title: 'buildingManage'
                 }
               },
             ]
           },
           // 住房管理
           {
             path: 'house',
             component: 'basiceData/houseData/houseData',
             name: 'houseManage',
             //redirect: '/basic/house',
             meta: {
               title: 'houseManage'
             },
           },
           // 职工管理
           {
             path: 'staff',
             component: 'basiceData/staffData/indexNav',
             name: 'staffManage',
             meta: {
               title: 'staffManage'
             },
             redirect: '/basic/staff/byDept/48',
             children: [{
               path: 'byDept/:id',
               component: 'basiceData/staffData/staffData',
               name: 'staffData',
               meta: {
                 title: 'staffData'
               }
             }, {
               path: 'byId/:id',
               component: 'basiceData/staffData/singleStaffData',
               name: 'singleStaffData',
               meta: {
                 title: 'singleStaffData'
               }
             }, {
               path: 'add',
               component: 'basiceData/staffData/addStaff',
               name: 'addStaff',
               meta: {
                 title: 'addStaff'
               }
             }, ]
           },
           // 住房登记
           {
             path: 'houseResident',
             component: 'basiceData/houseResident/resident',
             name: 'houseResident',
             meta: {
               title: 'houseResident'
             },
           },
           // 数据导入
           {
             path: 'importData',
             component: 'basiceData/importData/importData',
             name: 'importData',
             meta: {
               title: 'importData'
             },
           },

         ]
       },
     ]

   },
 ]

 // 职工列表
 export const staffList = {
   group_name: '主管1',
   staff: [{
       id: '0001',
       name: '王小虎',
       addr: '武汉理工大学教务处',
       birth: '1977-06-01'
     },
     {
       id: '0001',
       name: '王小虎',
       addr: '武汉理工大学教务处',
       birth: '1977-06-01'
     },
     {
       id: '0001',
       name: '王小虎',
       addr: '武汉理工大学教务处',
       birth: '1977-06-01'
     },
     {
       id: '0001',
       name: '王小虎',
       addr: '武汉理工大学教务处',
       birth: '1977-06-01'
     },
     {
       id: '0001',
       name: '王小虎',
       addr: '武汉理工大学教务处',
       birth: '1977-06-01'
     },
   ]
 }
