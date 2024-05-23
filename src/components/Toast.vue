<template>
    <div class="toast-wrapper fs-200">
        Based on your configuration, we’ve selected {{selectedItem}} unified memory. Please review this selection.
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const props = defineProps({
  showToast: Boolean,
  selectedItem: String
})
const emit = defineEmits(['notifyParent']);

const selectedItem = ref(props.selectedItem)

    document.querySelector('header').style.zIndex = -1;
    onMounted(()=>{
        document.querySelector('.toast-wrapper').classList.add('active');
        setTimeout(()=>{
            document.querySelector('.toast-wrapper').classList.remove('active');
        },500);
        setTimeout(() =>{
            emit('notifyParent', !props.showToast);
        },1000)
    })
</script>
<style scoped>
    .toast-wrapper{
        position: fixed;
        top:0;
        width:100%;
        padding:1rem;
        background-color: #0071e3;
        color:white;
        z-index: 9999;
        display:flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 1s ease-out;
    }
    .toast-wrapper.active{
        opacity: 1;
    }
</style>