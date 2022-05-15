<template>
    <div class="d-flex flex-column flex-grow-1">
        <div class="d-flex flex-grow-1 jcc aic clock black-clock" :class="{'turn': !whiteTurn}" @click="switchTurns">
            <span class="no-select black-time main-clock position-relative" :class="{'black-clock-text': !blackLoss, 'text-danger': blackLoss}">
                {{blackTime}}
                <span class="no-select mini-clock" :class="{'black-clock-text': !blackLoss, 'text-danger': blackLoss}">{{blackMilliseconds}}</span>
            </span>
        </div>
        <div class="d-flex flex-grow-1 jcc aic clock white-clock" :class="{'turn': whiteTurn}" @click="switchTurns">
            <span class="no-select main-clock position-relative" :class="{'white-clock-text': !whiteLoss, 'text-danger': whiteLoss}">
                {{whiteTime}}
                <span class="no-select mini-clock" :class="{'white-clock-text': !whiteLoss, 'text-danger': whiteLoss}">{{whiteMilliseconds}}</span>
            </span>
        </div>
    </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default
{
    setup()
    {
        const whiteMinutes = computed(() => Math.floor(AppState.white.time / 60000));
        const whiteSeconds = computed(() => Math.floor((AppState.white.time % 60000) / 1000));
        const blackMinutes = computed(() => Math.floor(AppState.black.time / 60000));
        const blackSeconds = computed(() => Math.floor((AppState.black.time % 60000) / 1000));
        const whiteMilliseconds = computed(() => ((AppState.white.time % 1000) / 1000).toFixed(3).toString().substring(1));
        const blackMilliseconds = computed(() => ((AppState.black.time % 1000) / 1000).toFixed(3).toString().substring(1));
        
        const whiteLoss = ref(false);
        const blackLoss = ref(false);

        let intervalId = null;
        let startTime = new Date();
        function switchToWhite()
        {
            console.log("switching to white")
            AppState.black.moves++;
            AppState.whitesTurn = true;
            clearInterval(intervalId);
            if(AppState.black.moves > 1)
            {
                console.log("black is past their first move")
                AppState.black.time += startTime.valueOf();
                startTime = new Date();
                AppState.black.time -= startTime.valueOf();
                if(AppState.black.time <= 0)
                {
                    AppState.black.time = 0;
                    blackLoss.value = true;
                    return;
                }
                AppState.black.time += AppState.seconds * 1000;
            }
            startTime = new Date();
            intervalId = setInterval(tickWhite, 50);
        };

        function tickWhite()
        {
            if(AppState.white.moves > 0 && !whiteLoss.value && !blackLoss.value)
            {
                AppState.white.time += startTime.valueOf();
                startTime = new Date();
                AppState.white.time -= startTime.valueOf();
                if(AppState.white.time <= 0)
                {
                    AppState.white.time = 0;
                    whiteLoss.value = true;
                }
            }
        };

        function switchToBlack()
        {
            console.log("switching to black")
            AppState.white.moves++;
            AppState.whitesTurn = false;
            clearInterval(intervalId);
            if(AppState.white.moves > 1)
            {
                console.log("white is past their first move")
                AppState.white.time += startTime.valueOf();
                startTime = new Date();
                AppState.white.time -= startTime.valueOf();
                if(AppState.white.time <= 0)
                {
                    AppState.white.time = 0;
                    whiteLoss.value = true;
                    return;
                }
                AppState.white.time += AppState.seconds * 1000;
            }
            startTime = new Date();
            intervalId = setInterval(tickBlack, 50);
        };

        function tickBlack()
        {
            if(AppState.black.moves > 0 && !whiteLoss.value && !blackLoss.value)
            {

                AppState.black.time += startTime.valueOf();
                startTime = new Date();
                AppState.black.time -= startTime.valueOf();
                if(AppState.black.time <= 0)
                {
                    AppState.black.time = 0;
                    blackLoss.value = true;
                }
            }
        };

        return {
            whiteMinutes,
            whiteSeconds,
            blackMinutes,
            blackSeconds,
            whiteMilliseconds,
            blackMilliseconds,
            whiteTime: computed(() => whiteMinutes.value.toString() + ":" + (whiteSeconds.value < 10 ? "0" : "") + whiteSeconds.value.toString()),
            blackTime: computed(() => blackMinutes.value.toString() + ":" + (blackSeconds.value < 10 ? "0" : "") + blackSeconds.value.toString()),
            whiteLoss,
            blackLoss,
            whiteTurn: computed(() => AppState.whitesTurn),
            switchTurns()
            {
                if(blackLoss.value || whiteLoss.value)
                {
                    return;
                }
                if(AppState.whitesTurn)
                {
                    switchToBlack();
                }
                else
                {
                    switchToWhite();
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.clock
{
    max-height: 50vh;
}

.black-time
{
    transform: rotate(180deg);
}

.main-clock
{
    font-size: calc(16vw + 10px);
}
.mini-clock
{
    position: absolute;
    bottom: calc(1.5vw - 1.8vh);
    right: 5px;
    font-size: calc(2vw + 16px);
}

.white-clock
{
    background-color: #dbd5c5;
}

.black-clock
{
    background-color: #222224;
}

.white-clock-text
{
    color: #222224;
}

.black-clock-text
{
    color: #dbd5c5;
}

.turn
{
    border: 15px #6ab141 solid;
}
</style>