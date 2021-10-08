Vue.component('company-manager', {
    template :`
        <div>
            <div class="row" id="infoManager" style="border: 1px solid #e5e9f2; margin: 0.25rem; border-radius: 0.25rem; background-color: #e5e9f2">
                <div class="col-1">
                    <button v-if="pIndex === 0" type="button" class="mt-3" @click="addManager"><i class="mdi mdi-plus"></i></button>
                    <button v-else type="button" class="mt-30" @click="removeManager(pIndex)"><i class="mdi mdi-minus"></i></button>
                </div>
                <div class="col-11">
                    <div class="row pt-2 pb-2">
                        <div class="col-4 pt-2 pb-2">
                            <input type="text" class="form-control" name="managerName" placeholder="담당자명" v-model="managerName" @keyup="writeManager(pIndex)">
                        </div>
                        <div class="col-4 pt-2 pb-2">
                          <input type="tel" class="form-control" name="managerPhone" placeholder="담당자 전화번호" v-model="managerPhone" @keyup="writeManager(pIndex)">
                        </div>
                        <div class="col-4 pt-2 pb-2">
                            <input type="tel" class="form-control" name="managerDirectNumber" placeholder="담당자 직통번호" v-model="managerDirectNumber" @keyup="writeManager(pIndex)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: {
        pIndex: Number,
        pManager: Object
    },
    data() {
        return {
            managerKey: "",
            managerName: "",
            managerPhone: "",
            managerDirectNumber: ""
        }
    },
    watch: {
      pManager() {
          this.managerKey = this.pManager.managerKey;
          this.managerName = this.pManager.name;
          this.managerPhone = this.pManager.phone;
          this.managerDirectNumber = this.pManager.directNumber;
      }
    },
    mounted() {
        this.initData();
    },
    methods: {
        initData() {
            this.managerKey = this.pManager.managerKey;
            this.managerName = this.pManager.name;
            this.managerPhone = this.pManager.phone;
            this.managerDirectNumber = this.pManager.directNumber;
        },
        addManager() {
            this.$emit("addManager");
        },
        removeManager(index) {
            this.$emit("removeManager", index);
        },
        writeManager(index) {
            this.$emit("writeManager", {
                index: index,
                key: this.managerKey,
                name: this.managerName,
                phone: this.managerPhone,
                directNumber: this.managerDirectNumber,
            })
        }
    }
})