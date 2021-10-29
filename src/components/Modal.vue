<template>
    <div class="modal-backdrop">
        <div class="modal">
            <header class="modal-header">
                <slot name="header"> Default Title </slot>
                <button type="button" class="btn-close" @click="props.toggleModal">x</button>
            </header>

            <section class="modal-body">
                <slot name="body"> Default Body </slot>
            </section>
        </div>
    </div>
</template>

<script>
import '../styles/global.css'

export default {
    name: 'Modal',
    components: {},
    props: {
        toggleModal: {
            type: Function,
        },
    },
    setup(props) {
        return {
            props,
        }
    },
}
</script>
<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: #000000;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    max-width: 50%;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #00ff01;
    color: #00ff01;
    justify-content: space-between;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #00ff01;
    background: transparent;
}
</style>
