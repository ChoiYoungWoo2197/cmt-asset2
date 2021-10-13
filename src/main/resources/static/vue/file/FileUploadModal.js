Vue.component('file-upload-modal', {
    template :`
        <div :class="getUniqueId">
            <button type="button" class="btn-sm btn-primary" id="fileUploadBtn" data-toggle="modal" data-target="#fileUploadModal">
                <i class="mdi mdi-plus"></i>{{title}} 파일 업로드
            </button>
            
            <div class="modal fade" id="fileUploadModal" tabindex="-1" role="dialog" aria-labelledby="fileUploadTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="fileUploadTitle">{{title}} 등록</h5>
                            <button type="button" class="close" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                         <form>
                            <div class="custom-file">
                              <!--accept=".conf, .xls, .xlsx"-->
                              <input type="file" class="custom-file-input" id="fileUpload" @change="readFile" :key="fileInputKey"
                                     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                              <label class="custom-file-label" for="fileUpload">파일선택</label>
                            </div>
                            <span class="text-primary">※ 엑셀 형식의 파일만 지원합니다.</span>
                          </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">취소</button>
<!--                            <button type="button" class="btn btn-primary" @click="createEmployee">등록</button>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: {
        pTitle : String
    },
    data : function() {
        return {
            title : null,
            datas : [],
            fileInputKey : 0,
            uniqueId : null,
        }
    },
    mounted : function() {
        this.title = this.pTitle;
        // this.getUniqueId();
    },
    computed: {
        getUniqueId: function () {
            if(!this.uniqueId) {
                this.uniqueId = 'file-upload-modal-' + this._uid;
                return this.uniqueId;
            }

            return this.uniqueId;
        }
    },
    methods: {
        clearData : function () {
            const vm = this;
            $('.' + vm.getUniqueId).find('#fileUpload').next().html("");
            this.fileInputKey++;
            this.datas = [];
        },
        closeModal : function () {
            const vm = this;
            $('.' + vm.getUniqueId).find('#fileUploadModal').modal("hide");
            this.clearData();
        },
        readFile : function (event) {
            if (! event.target.files.length) return;
            const vm = this;
            const file = event.target.files[0];
            let reader = new FileReader();
            let tmpResult = {};
            $('.' + vm.getUniqueId).find('#fileUpload').next().html(file.name);

            reader.onload = (e) => {
                let data = e.target.result;
                data = new Uint8Array(data);
                let excelFile = XLSX.read(data, {type: 'array'});
                excelFile.SheetNames.forEach(function(sheetName) {
                    const roa = XLSX.utils.sheet_to_json( excelFile.Sheets[sheetName],
                        { header: 1 }
                    );
                    if (roa.length) tmpResult[sheetName] = roa;
                });

                this.datas=tmpResult;
                if(this.datas.Sheet1.length > 0) {

                    vm.$emit("completeFileUpload", this.datas.Sheet1);
                }
            };
            vm.closeModal();
            reader.readAsArrayBuffer(file);
        }
    }
})