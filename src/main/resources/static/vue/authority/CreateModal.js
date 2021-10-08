Vue.component('authority-create-modal', {
    template :`
        <div>
            <button type="button" class="btn-sm btn-primary" id="createAuthority" data-toggle="modal" data-target="#createAuthorityModal">
                <i class="mdi mdi-plus"></i>등록
            </button>
            
            <div class="modal fade" id="createAuthorityModal" tabindex="-1" role="dialog" aria-labelledby="createAuthorityTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="createAuthorityTitle">권한 등록</h5>
                            <button type="button" class="close" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <authority-create class="text-left" 
                                            ref="createAuthority"
                                            @createAuthority="handleCreateAuthority"/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">취소</button>
                            <button type="button" class="btn btn-primary" @click="createAuthority">등록</button>
                        </div>
                    </div>
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
    },
    methods: {
        createAuthority() {
            this.$refs.createAuthority.createAuthority();
        },
        handleCreateAuthority(data) {
            this.$emit("createAuthority", data);
            this.closeModal();
        },
        closeModal() {
            $("#createAuthorityModal").modal("hide");
            this.$refs.createAuthority.clearInput();
        }
    }

})