<template>
    <div>
        <div>{{result}}</div>
        <form v-on:submit="onSubmitForm">
            <input maxlength="4" refs="answer" v-model="value">
            <button type="submit">입력</button>
        </form>
        <div>시도: {{tries.length}}</div>
        <ul>
            <li v-for="t in tries">{{t}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
            data () {
                return {
                    tries: [],
                    result: '',
                    value: '',
                }
            },
            methods: {
                onSubmitForm(e) {
                    e.preventDefault();
                    this.tries.push(this.value);
                    this.value = '';
                    this.$refs.answer.focus();
                }
            }
    };
</script>
<style></style>
