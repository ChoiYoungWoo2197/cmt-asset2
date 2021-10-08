Vue.component('category-read', {
    template :`
        <div>
            <div v-if="pCategory === null">
                <span class="mdi mdi-information-outline"></span> 정보없음
            </div>
            
            <div v-else>
                <table class="table">
                    <tbody>
                    <tr>
                        <th scope="row" class="border-top-0">상위 카테고리</th>
                        <td class="border-top-0">{{parentName}}</td>
                    </tr>
                    <tr>
                        <th scope="row">카테고리명</th>
                        <td>{{name}}</td>
                    </tr>
                    <tr>
                        <th scope="row">카테고리 규격</th>
                        <td>
                            <ul style="list-style: none" class="p-0">
                                <li v-for="standard in standards" :key="standard.categoryStandardKey">
                                    <b>- </b>{{standard.name}}
                                </li>
                            </ul>
                        </td>
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
        pCategory: Object
    },
    data() {
        return {
            parentName: "",
            name: "",
            remark: "",
            useYn: "",
            createDate: "",
            standards: []
        }
    },
    mounted() {
        this.findCategory();
    },
    watch: {
        pCategory() {
            this.findCategory();
        }
    },
    methods: {
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

            this.parentName = category.parentName === null ? "-" : category.parentName;
            this.name = category.name;
            this.remark = category.remark.replaceAll("\n", "<br>");
            this.useYn = category.useYn === "Y" ? "사용" : "미사용";
            this.createDate = category.createDateFormat;
            this.standards = data.categoryStandards;
        }
    }
})