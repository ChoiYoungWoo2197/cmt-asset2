Vue.component('category', {
    template :`
        <div>
            <div class="row">
                <div class="col-4">
                    <category-jstree ref="categoryJstree" 
                                     @selectCategory="handleSelectCategory"/>
                </div>
                <div class="col-8">
                    <ul class="nav nav-tabs nav-fill">
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="selectTab('category-read')"
                               :class="{'active font-weight-bold nav-border-bottom': activeTab('category-read')}">상세정보</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="selectTab('category-update')"
                               :class="{'active font-weight-bold nav-border-bottom': activeTab('category-update')}">수정</a>
                        </li>
                    </ul>
                    <div class="card border-top-0">
                        <div class="card-body">
                            <component :is="activatedComponent"
                                       :p-category="selectCategory"
                                       @updateCategory="handleUpdateCategory"
                                       @deleteCategory="handleDeleteCategory"/>
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
            selectCategory: null,
            activatedComponent: "category-read"
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
        handleSelectCategory(data) {
            this.selectCategory = data;
            this.activatedComponent = "category-read";
        },
        handleUpdateCategory(categoryKey) {
            this.activatedComponent = "category-read"
        },
        handleDeleteCategory() {
            this.selectCategory = null;
            this.$refs.categoryJstree.refreshJsTreeData();
            this.activatedComponent = "category-read"
        }
    }
})