Vue.component('company-list', {
    template :`
        <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="rental-tab" data-toggle="tab" href="#rental" role="tab" aria-controls="rental" aria-selected="true">렌탈</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="purchase-tab" data-toggle="tab" href="#purchase" role="tab" aria-controls="purchase" aria-selected="false">구매</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="rental" role="tabpanel" aria-labelledby="rental-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"><input type="checkbox"></th>
                                <th scope="col">업체명</th>
                                <th scope="col">전화번호</th>
                                <th scope="col">담당자정보</th>
                                <th scope="col">비고</th>
                                <th scope="col">사용여부</th>
                                <th scope="col">등록일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="purchase" role="tabpanel" aria-labelledby="purchase-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"><input type="checkbox"></th>
                                <th scope="col">업체명</th>
                                <th scope="col">전화번호</th>
                                <th scope="col">담당자정보</th>
                                <th scope="col">비고</th>
                                <th scope="col">사용여부</th>
                                <th scope="col">등록일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    props: {

    },
    data() {
        return {
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        initData() {

        }
    }
})