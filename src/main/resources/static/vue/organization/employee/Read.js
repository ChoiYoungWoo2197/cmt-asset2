Vue.component('employee-read', {
    template :`
        <div>
            <div v-if="pEmployee === null">
                <span class="mdi mdi-information-outline"></span> 정보없음
            </div>
            
            <div v-else>
                <table class="table">
                    <tbody>
                    <tr>
                        <th scope="row" class="border-top-0">아이디</th>
                        <td class="border-top-0">{{id}}</td>
                    </tr>
                    <tr>
                        <th scope="row">이름</th>
                        <td>{{name}}</td>
                    </tr>
                    <tr>
                        <th scope="row">이메일</th>
                        <td>{{email}}</td>
                    </tr>
                    <tr>
                        <th scope="row">전화번호</th>
                        <td>{{phone}}</td>
                    </tr>
                    <tr>
                        <th scope="row">생년월일</th>
                        <td>{{birth}}</td>
                    </tr>
                    <tr>
                        <th scope="row">부서</th>
                        <td>{{department}}</td>
                    </tr>
                    <tr>
                        <th scope="row">권한</th>
                        <td>{{position}}</td>
                    </tr>
                    <tr>
                        <th scope="row">직책</th>
                        <td>{{authority}}</td>
                    </tr>
                    <tr>
                        <th scope="row">사용여부</th>
                        <td>{{useYn}}</td>
                    </tr>
                    <tr>
                        <th scope="row">생성일</th>
                        <td>{{createDate}}</td>
                    </tr>
                    </tbody>
                  </table>
            </div>
        </div>
    `,
    props: {
        pEmployee: Object
    },
    data() {
        return {
            id: "",
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
        pEmployee() {
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
            this.phone = data.phone === null || data.phone === "" ? "-" : data.phone;
            this.birth = data.birth === null || data.birth === "" ? "-" : data.birth;
            this.department = data.departmentName;
            this.position = data.position;
            this.authority = data.authorityName;
            this.useYn = data.useYn;
            this.createDate = data.createDateFormat;
        }
    }
})