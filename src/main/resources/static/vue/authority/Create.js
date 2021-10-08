Vue.component('authority-create', {
    template :`
        <div>
            <form>
                <div class="form-group">
                    <label style="font-size: revert">권한코드 <small class="text-danger">*</small></label>
                    <div class="row">
                        <div class="col-9">
                            <input type="text" class="form-control" id="id" v-model="code">
                        </div>
                        <div class="col-3">
                            <button type="button" class="btn btn-primary" @click="clickDuplicateCheck">중복체크</button>
                        </div>
                    </div>
                    {{duplicateCodeResult}}
                    <div v-if="duplicateCodeResult === 'success'" class="font-size-12 text-success">사용가능한 코드입니다.</div>
                    <div v-else-if="duplicateCodeResult === 'duplicate'" class="font-size-12 text-danger">이미 사용중인 코드입니다.</div>
                </div>
                <div class="form-group">
                    <label for="name" style="font-size: revert">권한명 <small class="text-danger">*</small></label>
                    <input type="text" class="form-control" id="name" v-model="name">
                </div>
                <div class="form-group">
                    <label style="font-size: revert">허가 목록</label>
                    <!--<template v-for="(permission, index) in permissions">
                        <permission :p-index="index" 
                                    :p-permission="permission" 
                                    @checkPermission="handleCheckPermission">
                        </permission>
                    </template>-->
                    <permission ref="permission" 
                                @checkPermission="handleCheckPermission">
                    </permission>
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
            </form>
        </div>
    `,
    props: {

    },
    data() {
        return {
            code: "",
            name: "",
            remark: "",
            useYn: "Y",
            permissions: [],
            duplicateCode: "",
            checkDuplicateCode: false
        }
    },
    computed: {
        duplicateCodeResult() {
            return this.duplicateCode;
        }
    },
    mounted() {
    },
    methods: {
        clearInput() {
            this.code = "";
            this.name = "";
            this.remark = "";
            this.useYn = "Y";
            this.$refs.permission.clearCheckBox();
        },
        handleCheckPermission(permissions) {
            this.permissions = permissions;

            console.log(this.permissions)
        },
        clickDuplicateCheck() {
            const vm = this;

            if(vm.code === "") {
                alert("권한코드를 입력하세요.");
                return false;
            }

            $.ajax({
                url: "/authority/checkDuplicate/" + vm.code,
                type: "get",
                success: function (data) {
                    console.log(data);
                    if(data === "required") {
                        alert("권한코드를 입력하세요.");
                    } else if(data === "duplicate") {
                        this.duplicateCode = "duplicate";
                    } else {
                        this.duplicateCode = "success";
                        this.checkDuplicateCode = true;
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            })
        },
        createAuthority() {
            const vm = this;

            if(vm.checkDuplicateCode) {
            }
        }
    }
})