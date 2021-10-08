Vue.component('category-update', {
    template :`
        <div>
            <div v-if="pCategory === null">
                <span class="mdi mdi-information-outline"></span> 정보없음
            </div>
            
            <div v-else>
                <form>
                    <div class="form-group">
                        <label for="parentName" style="font-size: revert">상위 카테고리 <small class="text-danger">*</small></label>
                        <input type="text" class="form-control" id="parentName" v-model="parentName" readonly>
                    </div>
                    <div class="form-group">
                        <label for="parentName" style="font-size: revert">카테고리명 <small class="text-danger">*</small></label>
                        <input type="text" class="form-control" id="name" v-model="name" :class="{'is-invalid': requiredCheck}">
                    </div>
                    <div class="form-group">
                        <label style="font-size: revert">카테고리 규격</label>
                        <template v-for="(standard, index) in standards">
                            <category-standard  :p-index="index" 
                                                :p-standard="standard"
                                                @addStandard="handleAddStandard"
                                                @removeStandard="handleRemoveStandard"
                                                @writeStandard="handleWriteStandard" />
                        </template>
                    </div>
                    <div class="form-group">
                        <label for="remark" style="font-size: revert">비고</label>
                        <textarea class="form-control" id="remark" v-model="remark"></textarea>
                    </div>
                    <div class="form-group">
                        <label style="font-size: revert">사용여부 <small class="text-danger">*</small></label>
                        <div>
                            <label class="switch switch-text switch-primary switch-pill form-control-label">
                            <input type="checkbox" class="switch-input form-check-input" v-model="useYn">
                            <span class="switch-label" data-on="Yes" data-off="No"></span>
                            <span class="switch-handle"></span>
                            </label>
                        </div>
                    </div>
                    <div class="text-right">
                        <button type="button" class="btn btn-primary" @click="updateCategory">수정</button>
                        <button type="button" class="btn btn-danger" @click="deleteCategory">삭제</button>
                    </div>
                </form>
            </div>
        </div>
    `,
    props: {
        pCategory: Object
    },
    data() {
        return {
            category: null,
            parentName: "",
            name: "",
            remark: "",
            useYn: "",
            standards: [],
            childs: [],
            requiredCheck: false
        }
    },
    mounted() {
        this.childsCheck();
        this.findCategory();
    },
    watch: {
        pCategory() {
            this.childsCheck();
            this.findCategory();
        }
    },
    methods: {
        childsCheck() {
            if(this.pCategory !== null && this.pCategory !== undefined) {
                this.childs = this.pCategory.children;
            }
        },
        findCategory() {
            const vm = this;

            if(vm.pCategory !== null && vm.pCategory !== undefined) {
                $.ajax({
                    url: "/category/" + vm.pCategory.id,
                    type: "get",
                    success: function (data) {
                        vm.initData(data);
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        },
        initData(data) {
            const category = data.category;
            const standards = data.categoryStandards;

            this.category = category;
            this.parentName = category.parentName === null ? "-" : category.parentName;
            this.name = category.name;
            this.remark = category.remark;
            this.useYn = category.useYn === "Y";

            if(standards.length === 0) {
                this.standards.push({
                    standardKey: 0,
                    name: ""
                })
            } else {
                for (let i = 0; i < standards.length; i++) {
                    const standard = standards[i];
                    this.standards.push({
                        standardKey: standard.categoryStandardKey,
                        name: standard.name
                    })
                }
            }
        },
        handleAddStandard() {
            this.standards.push({
                standardKey: 0,
                name: ""
            })
        },
        handleRemoveStandard(data) {
            if(this.standards.length === 1) {
                this.standards[0] = {
                    standardKey: data.key,
                    name: ""
                }
            } else {
                this.standards.splice(data.index, 1);
            }
        },
        handleWriteStandard(data) {
            this.standards[data.index] = {
                standardKey: data.key,
                name: data.name
            }
        },
        updateCategory() {
            const vm = this;

            const obj = {
                categoryKey : vm.category.categoryKey,
                name: vm.name,
                parentKey: vm.category.parentKey,
                depth: vm.category.depth,
                remark: vm.remark,
                useYn: vm.useYn === true ? "Y" : "N",
                standards: JSON.stringify(vm.standards)
                // standards: vm.standards
            }

            if(vm.name === "") {
                alert("카테고리명을 입력하세요.")
                vm.requiredCheck = true;
                return false;
            }

            if(vm.childs.length !== 0 && obj.useYn === "N") {
                alert("하위 카테고리가 존재하여 사용여부를 수정할 수 없습니다.");
                return false;
            }

            const emptyNameCheck = vm.standards.some(standard => standard.name === "");

            // if(! emptyNameCheck) {
                $.ajax({
                    url: "/category/" + vm.category.categoryKey,
                    type: "put",
                    data: obj,
                    // traditional :true, // 배열 및 리스트로 값을 넘기기 위해 필요
                    // dataType: "json",
                    success: function (data) {
                        if(data === "success") {
                            $("#jsTree").jstree(true).refresh();
                            vm.$emit("updateCategory", vm.category.categoryKey);
                        } else if(data === "child") {
                            alert("하위 카테고리가 존재하여 사용여부를 수정할 수 없습니다.");
                        } else {
                            vm.requiredCheck = true;
                            alert("카테고리명을 입력하세요.");
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                })
            // } else {
            //     alert("카테고리 규격명이 비었습니다.\n규격명을 입력하세요.");
            // }
        },
        deleteCategory() {
            const vm = this;

            if(confirm("'"+this.name+"' 카테고리를 삭제하시겠습니까?")) {
                if(this.childs.length !== 0) {
                    alert("하위 카테고리가 존재하여 삭제할 수 없습니다.");
                    return false;
                }

                $.ajax({
                    url: "/category/" + vm.category.categoryKey,
                    type: "delete",
                    success: function (data) {
                        if(data === "success") {
                            vm.$emit("deleteCategory");
                        } else {
                            alert("하위 카테고리가 존재하여 삭제할 수 없습니다.");
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                })
            }
        }
    }
})