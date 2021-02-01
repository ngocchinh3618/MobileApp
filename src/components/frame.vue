<template>
  <Page actionBarHidden="true">
    <GridLayout columns="*" rows="*">
      <Frame id="home-page">
        <Index />
      </Frame>

      <Frame id="menu" @loaded="actionFrame">
        <Menu />
      </Frame>
    </GridLayout>
  </Page>
</template>

<script>
import Detailpd from "./detailpd"
import Index from "./index"
import Menu from "./menu"
import Product from "./product"
import Shop from "./shop"
const screen = require("@nativescript/core/platform").Screen;

const screenHeight = screen.mainScreen.heightDIPs;

export default {
  components:{
    Index,
    Menu,
    Product,
    Detailpd,
    Shop
  },
  data() {
    return {
    
    };
  },
  methods:{
    actionFrame(d){
      const khung = d.object;
      khung.translateY = screenHeight - 100
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
