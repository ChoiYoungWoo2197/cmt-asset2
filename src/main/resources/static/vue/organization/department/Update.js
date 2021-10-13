Vue.component('department-update', {
    template :`
        <div>
            <div v-if="pDepartment === null">
                <span class="mdi mdi-information-outline"></span> 정보없음
            </div>
            
            <div v-else>
                <form>
                    <div class="form-group">
                        <label for="parentName" style="font-size: revert">상위 부서 <small class="text-danger">*</small></label>
                        <input type="text" class="form-control" id="parentName" v-model="parentName" readonly>
                    </div>
                    <div class="form-group">
                        <label for="parentName" style="font-size: revert">부서코드 <small class="text-danger">*</small></label>
                        <input type="text" class="form-control" id="name" v-model="code" readonly>
                    </div>
                    <div class="form-group">
                        <label for="parentName" style="font-size: revert">부서명 <small class="text-danger">*</small></label>
                        <input type="text" class="form-control" id="name" v-model="name" :class="{'is-invalid': requiredCheck}">
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
                        <button type="button" class="btn btn-primary" @click="updateDepartment">수정</button>
                        <button type="button" class="btn btn-danger" @click="deleteDepartment">삭제</button>
                    </div>
                </form>
            </div>
        </div>
    `,
    props: {
        pDepartment: Object
    },
    data() {
        return {
            department: null,
            parentName: "",
            code: "",
            name: "",
            remark: "",
            useYn: "",
            childs: [],
            requiredCheck: false
        }
    },
    mounted() {
        this.childsCheck();
        this.findDepartment();
    },
    watch: {
        pCategory() {
            this.childsCheck();
            this.findDepartment();
        }
    },
    methods: {
        childsCheck() {
            if(this.pDepartment !== null && this.pDepartment !== undefined) {
                this.childs = this.pDepartment.children;
            }
        },
        findDepartment() {
            const vm = this;

            if(vm.pDepartment !== null && vm.pDepartment !== undefined) {
                $.ajax({
                    url: "/department/" + vm.pDepartment.id,
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
            this.department = data;

            this.parentName = data.parentName === null ? "-" : data.parentName;
            this.code = data.code;
            this.name = data.name;
            this.remark = data.remark;
            this.useYn = data.useYn === "Y";
        },
        updateDepartment() {
            const vm = this;

            const obj = {
                code: vm.department.code,
                name: vm.name,
                parentCode: vm.department.parentCode,
                depth: vm.department.depth,
                remark: vm.remark,
                useYn: vm.useYn === true ? "Y" : "N"
            }

            if(vm.name === "") {
                alert("부서명을 입력하세요.");
                vm.requiredCheck = true;
                return false;
            }

            if(vm.childs.length !== 0 && obj.useYn === "N") {
                alert("하위 부서가 존재하여 사용여부를 수정할 수 없습니다.");
                return false;
            }

            $.ajax({
                url: "/department/" + vm.department.departmentKey,
                type: "put",
                data: obj,
                success: function (data) {
                    if(data === "success") {
                        $("#jsTree").jstree(true).refresh();
                        vm.$emit("updateDepartment");
                    } else if(data === "child") {
                        alert("하위 부서가 존재하여 사용여부를 수정할 수 없습니다.");
                    } else {
                        vm.requiredCheck = true;
                        alert("부서명을 입력하세요.");
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            })
        },
        deleteDepartment() {
            const vm = this;

            if(confirm("'"+this.name+"' 부서를 삭제하시겠습니까?")) {
                if(this.childs.length !== 0) {
                    alert("하위 부서가 존재하여 삭제할 수 없습니다.");
                    return false;
                }

                $.ajax({
                    url: "/department/" + vm.department.departmentKey,
                    type: "delete",
                    success: function (data) {
                        if(data === "success") {
                            vm.$emit("deleteDepartment");
                        } else {
                            alert("하위 부서가 존재하여 삭제할 수 없습니다.");
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