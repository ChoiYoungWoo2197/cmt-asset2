Vue.component('category-standard', {
    template :`
        <div>
            <div class="row" style="border: 1px solid #e5e9f2; margin: 0.25rem; border-radius: 0.25rem; background-color: #e5e9f2">
                <div class="col-1">
                    <button v-if="pIndex === 0" type="button" class="mt-3" @click="addStandard"><i class="mdi mdi-plus"></i></button>
<!--                    <button v-else type="button" class="mt-3" @click="removeStandard(pIndex)"><i class="mdi mdi-minus"></i></button>-->
                </div>
                <div class="col-10">
                    <div class="row pt-2 pb-2">
                        <div class="col-12">
                            <input type="text" class="form-control" name="standards[]" placeholder="규격명" v-model="standardName" @keyup="writeStandard(pIndex)">
                        </div>
                    </div>
                </div>
                <div class="col-1">
                    <button type="button" class="mt-3" @click="removeStandard(pIndex)"><i class="mdi mdi-minus"></i></button>
                </div>
            </div>
        </div>
    `,
    props: {
        pIndex: Number,
        pStandard: Object
    },
    data() {
        return {
            standardKey: "",
            standardName: ""
        }
    },
    watch: {
      pStandard() {
          this.standardKey = this.pStandard.standardKey;
          this.standardName = this.pStandard.name;
      }
    },
    mounted() {
        this.initData();
    },
    methods: {
        initData() {
            this.standardKey = this.pStandard.standardKey;
            this.standardName = this.pStandard.name;
        },
        addStandard() {
          this.$emit("addStandard");
        },
        removeStandard(index) {
            this.$emit("removeStandard", {
                index: index,
                key: this.standardKey,
                name: this.standardName
            });

            if(index === 0) {
                this.standardName = "";
            }
        },
        writeStandard(index) {
            this.$emit("writeStandard", {
                index: index,
                key: this.standardKey,
                name: this.standardName
            })
        }
    }
})