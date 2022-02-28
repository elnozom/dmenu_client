<template>
    <div class="empty">
        <img src="@/assets/img/no-items.png"/>
        <h2>no items</h2>
    </div>
</template>

<style scoped>
.empty{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.empty h2{
    margin-top: 20px;
    color: #a4a4a4;
    font-size: 30px;
}
.empty img{
    width: 200px;
    height: auto;

}
</style>