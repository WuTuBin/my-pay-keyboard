<template>
    <div class="pay-box" id="app">
        <div>{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: 'pay-keyboard',
    props: {
        msg: {
            type: String,
            default: '默认值',
        }
    }
}
</script>
