Vue.component('authority-list', {
    template :`
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"><input type="checkbox"></th>
                        <th scope="col">권한코드</th>
                        <th scope="col">권한명</th>
                        <th scope="col">비고</th>
                        <th scope="col">사용여부</th>
                        <th scope="col">등록일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(authority, index) in authoritys" :key="index">
                        <td><input type="checkbox"></td>
                        <td>{{authority.code}}</td>
                        <td>{{authority.name}}</td>
                        <td>{{authority.remark}}</td>
                        <td>{{authority.useYn}}</td>
                        <td>{{authority.createDate}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    props: {

    },
    data() {
        return {
            authoritys: [],
        }
    },
    mounted() {
        this.initData();
    },
    computed: {
        getAuthoritys() {
            console.log("getAuthoritys => ", this.authoritys)
            return this.authoritys;
        }
    },
    methods: {
        initData() {
            const vm = this;

            $.ajax({
                url: "/authority",
                type: "get",
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    vm.authoritys = data;
                },
                error: function (data) {
                    console.log(data);
                }
            })
        }
    }
})