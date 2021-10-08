Vue.component('permission', {
    template :`
        <div>
            <div class="pl-3" style="border: 1px solid #e5e9f2; margin: 0.25rem; border-radius: 0.25rem; background-color: #e5e9f2">
                <div class="mt-2 mb-2" v-for="(permission, index) in permissions">
                    <div class="pt-2 pb-2 font-size-15 font-weight-bold">{{permission.name}}</div>
                    <div class="row pl-4">
                        <div v-for="(child, index) in permission.childs" class="col-3 pb-2">
                            <input class="form-check-input" type="checkbox" :value="child.key" :id="child.key" @change="checkPermission" v-model="checks">
                            <label class="form-check-label" :for="child.key"> {{child.name}}</label>
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
            permissions: [],
            checks: []
        }
    },
    mounted() {
        this.initPermissions();
    },
    methods: {
        initPermissions() {
            const vm = this;

            $.ajax({
                url: "/permission",
                type: "get",
                dataType: "json",
                success: function (data) {
                    vm.makePermissions(data);
                },
                error: function (data) {
                    console.log(data);
                }
            })
        },
        makePermissions(datas) {
            let permissions = [];

            for (let i = 0; i < datas.length; i++) {
                const childs = [];
                const data = datas[i];
                const keys = data.childKeys.split(",");
                const names = data.childNames.split(",");

                for (let j = 0; j < keys.length; j++) {
                    const obj = {
                        key: keys[j],
                        name: names[j]
                    }

                    childs.push(obj);
                }

                permissions.push({
                    name: data.name,
                    childs: childs
                })
            }
            this.permissions = permissions;
        },
        checkPermission() {
            this.$emit("checkPermission", this.checks);
        },
        clearCheckBox() {
            this.checks = [];
        }
    }
})