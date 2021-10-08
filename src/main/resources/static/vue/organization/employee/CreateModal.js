Vue.component('employee-create-modal', {
    template :`
        <div>
            <button type="button" class="btn-sm btn-primary" id="createCompany" data-toggle="modal" data-target="#createEmployeeModal">
                <i class="mdi mdi-plus"></i>직원 등록
            </button>
            
            <div class="modal fade" id="createEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="createEmployeeTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="createEmployeeTitle">직원 등록</h5>
                            <button type="button" class="close" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <employee-create ref="createEmployee" 
                                             @createEmployee="handleCreateEmployee"/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">취소</button>
                            <button type="button" class="btn btn-primary" @click="createEmployee">등록</button>
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
        createEmployee() {
            this.$refs.createEmployee.createEmployee();
        },
        handleCreateEmployee(data) {
            this.$emit("createCompany", data);
            this.closeModal();
        },
        closeModal() {
            $("#createEmployeeModal").modal("hide");
            this.$refs.createEmployee.clearInput();
        }
    }
})