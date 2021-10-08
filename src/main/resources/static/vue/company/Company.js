Vue.component('company', {
    template :`
        <div>
            <create-modal :p-title="'업체'">
            </create-modal>
            <company-list></company-list>
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