<template>
  <Page actionBarHidden="true" backgroundColor="yellow" ref="bottom">
    <FlexBoxLayout  height="70" verticalAlignment="top">
      <StackLayout width="25%" v-for="i in menu" :key="i" @tap="navigate(i)">
        <Label horizontalAlignment="center" marginTop="15" color="black" class="fas" textWrap="true" fontSize="30">{{i.icon | fonticon}}</Label> 
        <Label horizontalAlignment="center" color="black">
          <FormattedString>
            <Span  :text="i.ten"> </Span>
          </FormattedString>
      </Label>t
      </StackLayout>
    </FlexBoxLayout>
  </Page>
</template>

<script>
import Index from "./index"
import Product from "./product"
import Cart from "./cart"
import Shop from "./shop"
export default {
  data(){
    return {
      menu:[
        {
          icon:"fa-home",
          ten:"Trang Chủ",
          page:Index
        },
        {
          icon:"fa-cube",
          ten:"Sản Phẩm",
          page:Product
        },
        {
          icon:"fa-shopping-cart",
          ten:"Giỏ Hàng",
          page:Cart
        },
        {
          icon:"fa-user",
          ten:"Cửa hàng",
          page:Shop
        },
      ]
    }
  },
  // home-page id dung de load cac page tai frame co id la home page.
  methods:{
    navigate(e){
      this.$navigateTo(e.page,{frame:"home-page"})
    },
  }
};
</script>