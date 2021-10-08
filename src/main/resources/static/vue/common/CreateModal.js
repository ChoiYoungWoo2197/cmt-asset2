Vue.component('create-modal', {
    template :`
        <div>
            <button type="button" class="btn-sm btn-primary" id="createCompany" data-toggle="modal" data-target="#createCompanyModal">
                <i class="mdi mdi-plus"></i>등록
            </button>
            
            <div class="modal fade" id="createCompanyModal" tabindex="-1" role="dialog" aria-labelledby="createCompanyTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="createCompanyTitle">{{pTitle}} 등록</h5>
                            <button type="button" class="close" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div v-if="pTitle === '업체'">
                            <company-create class="text-left" 
                                            ref="createCompany"
                                            @createCompany="handleCreateCompany"/>
                            </div>
                            <div v-if="pTitle === '회원'">
                                <employee-create></employee-create>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">취소</button>
                            <button type="button" class="btn btn-primary" @click="createCompany">등록</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: {
        pTitle: String
    },
    data() {
        return {
            title: ""
        }
    },
    mounted() {
    },
    watch: {
      pTitle() {
          this.title = this.pTitle
      }
    },
    methods: {
        createCompany() {
            this.$refs.createCompany.createCompany();
        },
        handleCreateCompany(data) {
            this.$emit("createCompany", data);
            this.closeModal();
        },
        closeModal() {
            this.$refs.createCompany.clearInput();
            $("#createCompanyModal").modal("hide");
        }
    }
})