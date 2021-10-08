Vue.component('login', {
    template :`
        <div>
            <div class="container d-flex flex-column justify-content-between vh-100">
                <div class="row justify-content-center mt-100">
                    <div class="col-xl-5 col-lg-6 col-md-10">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <div class="app-brand">
                                    <a href="" class="pl-2 pr-2" style="width: 80%; margin: 0 auto">
                                        <img src="/img/cmt_logo.svg" width="100%" style="min-width: 100%">
                                    </a>
                                </div>
                            </div>
                            <div class="card-body p-5">
                                <form>
                                    <div class="row">
                                        <div class="form-group col-md-12 mb-0">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="mdi mdi-account"></i>
                                                    </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="ID" name="id" v-model="id">
                                            </div>
                                        </div>
                                        <div class="form-group col-md-12 ">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="mdi mdi-lock"></i>
                                                    </span>
                                                </div>
                                                <input type="password" class="form-control" placeholder="Password" name="password" v-model="password" autocomplete="off">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-lg btn-primary btn-block mb-4" @click="clickLogin">LOGIN</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
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
    }
})