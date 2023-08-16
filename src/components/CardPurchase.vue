<template lang="">
    <div class="rounded-sm flex items-center justify-between py-[10px] px-[5px]">
        <div class="flex items-center">
            <img :src="product.product.thumbnail" class="w-[100px] h-[80px] object-cover">
            <div class="flex flex-col items-start ml-5">
                <p>{{product.product.name}}</p>
                <p>Số lượng: <span>{{product.quantity}}</span></p>
            </div>
        </div>
        <div>
            <p>${{totalMoney()}}</p>
            <button class="px-[15px] py-[5px] bg-red-500 text-white text-[13px]">Huỷ</button>
        </div>
    </div>
</template>
<script>

export default {
    name: "CardPurchase",
    props: {
        product: {
            type: Object
        }
    },
    setup(props) {
        console.log("log", props);

        const totalMoney = () => {
            return props.product.product.price * props.product.quantity
        }

        return {
            totalMoney
        }
    }
}
</script>
<style lang="">
    
</style>