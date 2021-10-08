Vue.component('organization', {
    template :`
        <div>
            <div>
                <employee-create-modal ref="createEmployeeModal"></employee-create-modal>
            </div>
            <div class="row">
                <div class="col-4">
                    <organization-jstree ref="organizationJstree" 
                                         @selectOrganization="handleSelectOrganization"/>
                </div>
                <div class="col-8">
                    <ul class="nav nav-tabs nav-fill">
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="selectTab(readComponent)" 
                               :class="{'active font-weight-bold nav-border-bottom': activeTab(readComponent)}">상세정보</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="selectTab(updateComponent)"
                               :class="{'active font-weight-bold nav-border-bottom': activeTab(updateComponent)}">수정</a>
                        </li>
                    </ul>
                    <div class="card border-top-0">
                        <div class="card-body">
                            <component :is="activatedComponent"
                                       :p-department="selectDepartment" 
                                       :p-employee="selectEmployee"
                                       @updateDepartment="handleUpdateDepartment" 
                                       @deleteDepartment="handleDeleteDepartment" />
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
            selectDepartment: null,
            selectEmployee: null,
            activatedComponent: "department-read",
            readComponent: "department-read",
            updateComponent: "department-update"
        }
    },
    mounted() {
    },
    methods: {
        selectTab(component) {
            this.activatedComponent = component;
        },
        activeTab(component) {
            return this.activatedComponent === component;
        },
        handleSelectOrganization(data) {
            console.log("handleSelectOrganization=>", data)

            if(data !== null) {
                if(data.type === "department") {
                    this.readComponent = "department-read";
                    this.updateComponent = "department-update";
                    this.selectDepartment = data;
                    this.activatedComponent = "department-read";
                } else {
                    this.readComponent = "employee-read";
                    this.updateComponent = "employee-update";
                    this.selectEmployee = data;
                    this.activatedComponent = "employee-read";
                }
            }
        },
        handleUpdateDepartment() {
            this.activatedComponent = "department-read";
        },
        handleDeleteDepartment() {
            this.selectDepartment = null;
            this.$refs.organizationJstree.refreshJsTreeData();
            this.activatedComponent = "department-read";
        }
    }
})