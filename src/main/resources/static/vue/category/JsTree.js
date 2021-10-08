Vue.component('category-jstree', {
    template :`
        <div>
            <div class="input-group mb-1">
                <input type="text" class="form-control" placeholder="검색" aria-describedby="inputGroup-sizing-sm" v-model="searchWord" @keyup.enter="searchCategory">
                <div class="input-group-append">
                    <button class="btn-sm btn-primary" @click="searchCategory"><i class="mdi mdi-magnify"></i></button>
                </div>
            </div>
    
            <div id="jsTree"></div>
        </div>
    `,
    props: {

    },
    data() {
        return {
            categorys: [],
            searchWord: ""
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
                    "data" : {
                        "url" : function (node) {
                            return "/category";
                        },
                        "dataFilter" : function (data) {
                            const dataObj = JSON.parse(data);
                            const jsTreeDatas = [];

                            jsTreeDatas.push({
                                "id": "0",
                                "parent": "#",
                                "text": "전체 목록",
                                "a_attr" : {
                                    class : "disable_checkbox"
                                }
                            })

                            dataObj.forEach((data) => {
                                const obj = {
                                    "id": data.categoryKey,
                                    // "parent": data.parentKey === null ? 0 : data.parentKey,
                                    "parent": data.parentKey,
                                    "text": data.name,
                                    "type": "category",
                                    "a_attr" : {
                                        style : data.useYn === "N" ? "color:#bbb; text-decoration: line-through;" : ""
                                    }
                                };
                                jsTreeDatas.push(obj);
                            })

                            vm.categorys = jsTreeDatas;
                            return JSON.stringify(jsTreeDatas);
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
                    "category" : {
                        // "icon" : "uil uil-folder"
                        "icon" : "fa fa-folder-o"
                        // 'icon': false
                    },
                },
                "checkbox" : {
                    "three_state" : false,
                    "whole_node" : false,
                    "tie_selection" : false
                },
                "plugins" : [ "wholerow", "types", "search", "contextmenu", "checkbox" ],
                "search" : {
                    "show_only_matches" : true,
                    "show_only_matches_children" : true
                },
                "contextmenu" : {
                    "select_node": false,
                    "items": function(node) {
                        const jsTree = $("#jsTree");

                        return {
                            "Create" : {
                                "separator_before" : false,
                                "separator_after" : false,
                                "label" : "등록",
                                "action" : function () {
                                    node = jsTree.jstree(true).create_node(node, {
                                        "text" : "카테고리명",
                                    });

                                    jsTree.jstree(true).edit(node);
                                    // tree.jstree(true).select_node(node);
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

                $.ajax({
                    url: "/category",
                    type: "post",
                    data: obj,//&"standards="+vm.standards
                    // dataType: "json",
                    success: function (data) {
                        $("#jsTree").jstree(true).refresh();
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            })
            .on("select_node.jstree", function(event, data) {
                const node = data.node;
                vm.$emit("selectCategory", node.id === "0" ? null : node);
            })
            .on('loaded.jstree', function() {
                $("#jsTree").jstree("open_node", 0);
            });
        },
        searchCategory() {
            $("#jsTree").jstree("search", this.searchWord);
        },
        refreshJsTreeData() {
            $("#jsTree").jstree(true).refresh();
        },
        // openNodeJsTree(id) {
        //     console.log("openNodeJsTree=> ", id)
        //     // $("#jsTree").jstree("open_node", id);
        //     $("#jsTree").on('loaded.jstree', function(event) {
        //         console.log("*********************************")
        //         console.log(event)
        //         $("#jsTree").jstree("open_node", 0);
        //     });
        //
        // }
    }
})