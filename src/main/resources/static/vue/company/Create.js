Vue.component('company-create', {
    template :`
        <div>
            <form>
                <div class="form-group">
                    <label style="font-size: revert">업체구분 <small class="text-danger">*</small></label>
                    <div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="rental" name="division" class="custom-control-input" v-model="division" value="rental" checked>
                            <label class="custom-control-label" for="rental">렌탈</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="purchase" name="division" class="custom-control-input" v-model="division" value="purchase">
                            <label class="custom-control-label" for="purchase">구매</label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="name" style="font-size: revert">업체명 <small class="text-danger">*</small></label>
                    <input type="text" class="form-control" id="name" v-model="name">
                </div>
                <div class="form-group">
                    <label for="phone" style="font-size: revert">전화번호</label>
                    <input type="tel" class="form-control" id="phone" v-model="phone">
                </div>
                <div class="form-group">
                    <label style="font-size: revert">담당자</label>
                    <template v-for="(manager, index) in managers">
                        <company-manager :p-index="index" 
                                         :p-manager="manager" 
                                         @addManager="handleAddManager" 
                                         @removeManager="handleRemoveManager" 
                                         @writeManager="handleWriteManager">
                        </company-manager>
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
            </form>
        </div>
    `,
    props: {

    },
    data() {
        return {
            division: "rental",
            name: "",
            phone: "",
            remark: "",
            useYn: true,
            managers: [{
                name: "",
                phone: "",
                directNumber: ""
            }]
        }
    },
    mounted() {
    },
    methods: {
        clearInput() {
            this.division = "rental";
            this.name = "";
            this.phone = "";
            this.remark = "";
            this.useYn = "Y"
            this.managers = [{
                managerKey: "",
                name: "",
                phone: "",
                directNumber: ""
            }];
        },
        handleAddManager() {
            this.managers.push({
                managerKey: "",
                name: "",
                phone: "",
                directNumber: ""
            });
        },
        handleRemoveManager(index) {
            this.managers.splice(index, 1);
        },
        handleWriteManager(data) {
            this.managers[data.index] = {
                managerKey: data.key,
                name: data.name,
                phone: data.phone,
                directNumber: data.directNumber
            }
        },
        createCompany() {
            const vm = this;

            const obj = {
                division: vm.division,
                name: vm.name,
                phone: vm.phone,
                remark: vm.remark,
                useYn: vm.useYn === true ? "Y" : "N",
                managers: vm.managers
            }

            console.log("createCompany=> ", obj)

            $.ajax({
                url: "/company",
                type: "post",
                data: obj,
                // traditional :true, // 배열 및 리스트로 값을 넘기기 위해 필요
                // dataType: "json",
                success: function (data) {
                    console.log("success")
                    console.log(data);

                    vm.$emit("createCompany");
                },
                error: function (data) {
                    console.log("error")
                    console.log(data)
                }
            })
        }
    }
})