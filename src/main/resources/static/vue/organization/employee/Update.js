Vue.component('employee-update', {
    template :`
        <div>
            <div v-if="pEmployee === null">
                <span class="mdi mdi-information-outline"></span> 정보없음
            </div>
            
            <div v-else>
                <form>
                    <div class="form-group">
                        <label for="id" style="font-size: revert">아이디 <small class="text-danger">*</small></label>
                        <input type="text" class="form-control" id="id" v-model="id" readonly>
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
                        <input type="email" class="form-control" id="email" v-model="email" readonly>
                    </div>
                    <div class="form-group">
                        <label for="name" style="font-size: revert">전화번호</label>
                        <input type="tel" class="form-control" id="phone" v-model="phone">
                    </div>
                    <div class="form-group">
                        <label for="birth" style="font-size: revert">생년월일</label>
                        <input type="date" class="form-control" id="birth" v-model="birth" readonly>
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
                    <div class="text-right">
                        <button type="button" class="btn btn-primary" @click="updateEmployee">수정</button>
                        <button type="button" class="btn btn-danger" @click="deleteEmployee">삭제</button>
                    </div>
                </form>
            </div>
        </div>
    `,
    props: {
        pEmployee: Object
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
            position: "",
            authority: "",
            useYn: "",
            createDate: ""
        }
    },
    mounted() {
        this.findEmployee();
    },
    watch: {
        pCategory() {
            this.findEmployee();
        }
    },
    methods: {
        findEmployee() {
            const vm = this;

            if(vm.pEmployee !== null && vm.pEmployee !== undefined) {
                $.ajax({
                    url: "/employee/" + vm.pEmployee.id,
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
            this.id = data.id;
            this.name = data.name;
            this.email = data.email;
            this.phone = data.phone;
            this.birth = data.birth;
            this.department = data.departmentKey;
            this.position = data.position;
            this.authority = data.authorityCode;
            this.useYn = data.useYn;
        },
        updateEmployee() {
            const vm = this;


        },
        deleteEmployee() {
            const vm = this;


        }
    }
})