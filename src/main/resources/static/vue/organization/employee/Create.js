Vue.component('employee-create', {
    template :`
        <div>
            <form>
                <div class="form-group">
                    <label for="id" style="font-size: revert">아이디 <small class="text-danger">*</small></label>
                    <div class="row">
                        <div class="col-9">
                            <input type="text" class="form-control" id="id" v-model="id">
                        </div>
                        <div class="col-3">
                            <button type="button" class="btn btn-primary">중복체크</button>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" style="font-size: revert">비밀번호 <small class="text-danger">*</small></label>
                    <input type="password" class="form-control" id="password" v-model="password">
                </div>
                <div class="form-group">
                    <label for="passwordConfirm" style="font-size: revert">비밀번호 확인 <small class="text-danger">*</small></label>
                    <input type="password" class="form-control" id="passwordConfirm" v-model="passwordConfirm">
                </div>
                <div class="form-group">
                    <label for="name" style="font-size: revert">이름 <small class="text-danger">*</small></label>
                    <input type="text" class="form-control" id="name" v-model="name">
                </div>
                <div class="form-group">
                    <label for="email" style="font-size: revert">이메일 <small class="text-danger">*</small></label>
                    <input type="email" class="form-control" id="email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="name" style="font-size: revert">전화번호</label>
                    <input type="tel" class="form-control" id="phone" v-model="phone">
                </div>
                <div class="form-group">
                    <label for="birth" style="font-size: revert">생년월일</label>
                    <input type="date" class="form-control" id="birth" v-model="birth">
                </div>
                <div class="form-group">
                    <label for="department" style="font-size: revert">부서 <small class="text-danger">*</small></label>
                    <select class="form-control" id="department" v-model="department">
                        <option>개발부</option>
                        <option>인사부</option>
                        <option selected>영업부</option>
                        <option>기획부</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="authority" style="font-size: revert">권한 <small class="text-danger">*</small></label>
                    <select class="form-control" id="authority" v-model="authority">
                        <option>사용자</option>
                        <option>부서 책임자</option>
                        <option>관리자</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="position" style="font-size: revert">직책 <small class="text-danger">*</small></label>
                    <select class="form-control" id="position" v-model="position">
                        <option>사원</option>
                        <option>대리</option>
                        <option>과장</option>
                        <option>차장</option>
                        <option>부장</option>
                    </select>
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
            id: "",
            password: "",
            passwordConfirm: "",
            name: "",
            email: "",
            phone: "",
            birth: "",
            department: "",
            authority: "",
            position: "",
            useYn: ""
        }
    },
    mounted() {
    },
    methods: {
        clearInput() {
            this.id = "";
            this.password = "";
            this.passwordConfirm = "";
            this.name = "";
            this.email = "";
            this.phone = "";
            this.birth = "";
            this.department = "";
            this.authority = "";
            this.position = "";
            this.useYn = "Y";
        },
        createEmployee() {
            const vm = this;

            const obj = {
                id: vm.id,
                password: vm.password,
                name: vm.name,
                email: vm.email,
                phone: vm.phone,
                birth: vm.birth,
                department: vm.department,
                authority: vm.authority,
                position: vm.position,
                useYn: vm.useYn === true ? "Y" : "N"
            }

            $.ajax({
                url: "/employee",
                type: "post",
                data: obj,
                // dataType: "json",
                success: function (data) {
                    console.log("success")
                    console.log(data);

                    vm.$emit("createEmployee");
                },
                error: function (data) {
                    console.log(data)
                }
            })
        }
    }
})