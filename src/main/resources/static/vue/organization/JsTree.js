Vue.component('organization-jstree', {
    template :`
        <div>
            <div class="input-group mb-1">
                <input type="text" class="form-control" placeholder="검색" aria-describedby="inputGroup-sizing-sm" v-model="searchWord" @keyup.enter="searchOrganization">
                <div class="input-group-append">
                    <button class="btn-sm btn-primary" @click="searchOrganization"><i class="mdi mdi-magnify"></i></button>
                </div>
            </div>
    
            <div id="jsTree"></div>
        </div>
    `,
    props: {

    },
    data() {
        return {
            departments: [],
            employees: [],
            selectDepartments: [],
            searchWord: "",
            jsTreeDatas: []
        }
    },
    mounted() {
        this.initJsTree();
    },
    methods: {
        initJsTree() {
            const vm = this;

            $("#jsTree").jstree({
                "core" : {
                    "animation" : 0,
                    "check_callback" : true,
                    "multiple" : false,
                    "themes" : {
                        "stripes" : true
                    },
                    // "data" : vm.getJsTreeData(),
                    "data" : {
                        "url" : function (node) {
                            return "/department";
                        },
                        "dataFilter" : function (data) {
                            const dataObj = JSON.parse(data);
                            const datas = [];

                            datas.push({
                                "id": "0",
                                "parent": "#",
                                "text": "전체 목록",
                                "type": "department"
                            })

                            dataObj.forEach((data) => {
                                const obj = {
                                    "id": data.departmentKey,
                                    "parent": data.parentKey,
                                    "text": data.name,
                                    "type": "department",
                                    "a_attr" : {
                                        style : data.useYn === "N" ? "color:#bbb; text-decoration: line-through;" : ""
                                    }
                                };
                                datas.push(obj);
                            })

                            vm.departments = datas;
                            vm.jsTreeDatas.push(datas);
                            return JSON.stringify(datas);
                        }
                    }
                    // "strings" : {
                    //   "Loading ..." : "로딩 중 ..."
                    // },
                },
                "types" : {
                    "default": {
                        'icon': false
                    },
                    "department" : {
                        // "icon" : "uil uil-folder"
                        "icon" : "fa fa-folder-o"
                        // 'icon': false
                    },
                    "employee" : {
                        "icon" : "uil uil-user"
                        // 'icon': false
                    }
                },
                "checkbox" : {
                    "three_state" : false,
                    "whole_node" : false,
                    "tie_selection" : false
                },
                "plugins" : [ "wholerow", "types", "search", "contextmenu"],
                "search" : {
                    "show_only_matches" : true,
                    "show_only_matches_children" : true
                },
                "contextmenu" : {
                    "select_node": false,
                    "items": function(node) {
                        const tree = $("#jsTree");

                        console.log("contextmenu: ", node)

                        if(node.type === "department") {
                            return {
                                "Create" : {
                                    "separator_before" : false,
                                    "separator_after" : false,
                                    "label" : "등록",
                                    "action" : function () {
                                        node = tree.jstree(true).create_node(node, {
                                            "text" : "부서명",
                                        });

                                        tree.jstree(true).edit(node);
                                        // tree.jstree(true).select_node(node);
                                    }
                                }
                            }
                        }
                    }
                }
            })
            .on("rename_node.jstree", function (event, data) {
                const node = data.node;

                const obj = {
                    name: node.text,
                    parentKey: node.parent,
                    depth: node.parents.length - 1,
                    remark : "",
                    useYn : "Y"
                }

                console.log(obj)

                $.ajax({
                    url: "/department",
                    type: "post",
                    data: obj,
                    // dataType: "json",
                    success: function (data) {
                        console.log("success")
                        console.log(data);

                        $("#jsTree").jstree(true).refresh();
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            })
            .on("select_node.jstree", function(event, data) {
                const node = data.node;
                console.log("select_node--> ", node)

                vm.$emit("selectOrganization", node.id === "0" ? null : node);

                if(data.node.type === "department" && ! vm.selectDepartments.includes(node.id)) {
                    vm.getEmployeesInDepartmentData(node.id);
                    vm.selectDepartments.push(node.id);
                }
            })
            .on('loaded.jstree', function() {
                $("#jsTree").jstree("open_node", 0);
            })
            .on('open_node.jstree', function (event, data) {
                const node = data.node;
                console.log("open_node--> ", node)

                if(data.node.type === "department" && ! vm.selectDepartments.includes(node.id)) {
                    vm.getEmployeesInDepartmentData(node.id);
                    vm.selectDepartments.push(node.id);
                }
            });
        },
        /*getJsTreeData() {
            const vm = this;
            const jsTreeData = [];
            const jsTree = $("#jsTree");

            $.ajax({
                url: "/department",
                type: "get",
                dataType: "json",
                success: function (data) {
                    console.log("success")
                    console.log(data);

                    const departments = data;

                    jsTreeData.push({
                        "id": "0",
                        "parent": "#",
                        "text": "전체 목록",
                        // "a_attr" : {
                        //   class : "disable_checkbox"
                        // }
                    })

                    departments.forEach((data) => {
                        const obj = {
                            "id": data.departmentKey,
                            "parent": data.parentKey === null ? 0 : data.parentKey,
                            "text": data.name,
                            "type": "department",
                            "a_attr" : {
                                style : data.useYn === "N" ? "color:#bbb; text-decoration: line-through;" : ""
                            }
                        };
                        jsTreeData.push(obj);
                    })

                    jsTree.jstree(true).settings.core.data = jsTreeData;
                    jsTree.jstree(true).refresh();
                },
                error: function (data) {
                    console.log("error")
                    console.log(data)
                }
            })
        },*/
        getEmployeesInDepartmentData(departmentKey) {
            const vm = this;
            const jsTree = $("#jsTree");

            $.ajax({
                url: "/employee/department="+departmentKey,
                type: "get",
                dataType: "json",
                success: function (data) {
                    console.log("getEmployeesInDepartmentData success")
                    console.log(data);
                    const datas = [];

                    data.forEach(item => {
                        const obj = {
                            "id": item.id,
                            "parent": departmentKey,
                            "text": item.name,
                            "type": "employee"
                        }

                        datas.push(obj);

                        jsTree.jstree("create_node", departmentKey, obj, "last");
                        jsTree.jstree("open_node", departmentKey);
                    })

                    vm.employees = datas;
                    vm.jsTreeDatas.push(datas);
                },
                error: function (data) {
                    console.log(data)
                }
            })
        },
        searchOrganization() {
            $("#jsTree").jstree("search", this.searchWord);
            // 회원 검색 안됨. => 회원 정보 데이터 업데이트 해야될듯
        },
        refreshJsTreeData() {
            $("#jsTree").jstree(true).refresh();
        }
    }
})