<template>
    <div class="flex-grow-1 d-flex jcc aic" v-if="!ready">
        <div class="d-flex flex-column">
            <span class="fs-1 text-light mb-2 text-center">Time controls select</span>
            <form class="d-flex flex-column mt-2" @submit.prevent="selectTime">
                <div class="d-flex mb-3">
                    <div class="d-flex flex-column aic">
                        <label for="minutes" class="text-light mb-2 fs-4 fw-bold">Minutes</label>
                        <input name="minutes" type="number" min="0" max="30" class="w-50 fs-4 text-center" v-model="minutes">
                    </div>
                    <div class="d-flex flex-column aic">
                        <label for="seconds" class="text-light mb-2 fs-4 fw-bold">Seconds</label>
                        <input name="seconds" type="number" min="0" max="60" class="w-50 fs-4 text-center" v-model="seconds">
                    </div>
                </div>
                <button class="btn btn-light w-75 align-self-center fs-3 mt-3">Start game</button>
            </form>
        </div>
    </div>
    <Clock v-else />
</template>

<script>
import { ref } from '@vue/reactivity';
import { AppState } from '../AppState.js';
export default {
    name: 'Home',
    setup()
    {
        const minutes = ref(0);
        const seconds = ref(0);
        const ready = ref(false);
        return {
            minutes,
            seconds,
            ready,
            selectTime()
            {
                AppState.minutes = minutes.value;
                AppState.seconds = seconds.value;
                AppState.white.time = minutes.value * 60000;
                AppState.black.time = minutes.value * 60000;
                AppState.white.moves = 0;
                AppState.black.moves = 0;
                ready.value = true;
            }
        };
    }
}
</script>

<style scoped lang="scss">
</style>
