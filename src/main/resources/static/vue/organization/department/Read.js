Vue.component('department-read', {
    template :`
        <div>
            <div v-if="pDepartment === null || pDepartment === undefined">
                <span class="mdi mdi-information-outline"></span> 정보없음
            </div>
            
            <div v-else>
                <table class="table">
                    <tbody>
                    <tr>
                        <th scope="row" class="border-top-0">상위 부서</th>
                        <td class="border-top-0">{{parentName}}</td>
                    </tr>
                    <tr>
                        <th scope="row">부서명</th>
                        <td>{{name}}</td>
                    </tr>
                    <tr>
                        <th scope="row">비고</th>
                        <td v-html="remark"></td>
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
        pDepartment: Object
    },
    data() {
        return {
            parentName: "",
            name: "",
            remark: "",
            useYn: "",
            createDate: ""
        }
    },
    mounted() {
        this.findDepartment();
    },
    watch: {
      pDepartment() {
          this.findDepartment();
      }
    },
    methods: {
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
            this.parentName = data.parentName === null ? "-" : data.parentName;
            this.name = data.name;
            this.remark = data.remark.replaceAll("\n", "<br>");
            this.useYn = data.useYn === "Y" ? "사용" : "미사용";
            this.createDate = data.createDateFormat;
        }
    }
})