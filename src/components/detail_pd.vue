<template>
  <Page actionBarHidden="true">
    <StackLayout width="80%">
      <FlexboxLayout padding="20" height="150">
          <StackLayout width="30%" >
            <Image :src="data.hinh" stretch="fill" width="100%" height="100%"/>
          </StackLayout>
          
          <StackLayout width="70%" verticalAlignment="center">
            <Label :text="data.ten" textWrap="true" fontSize="20"/>
            <Label :text="data.gia | vnd" textWrap="true" fontSize="20"/>
            <Label text.decode="&#xf004; Yêu thích" textWrap="true" fontSize="20"/>
          </StackLayout>
      </FlexboxLayout>
      <Label text="Giới thiệu món" textWrap="true" backgroundColor="grey" padding="10"/>
      <Label :text="data.mota" textWrap="true" padding="10" borderBottomWidth="1"/>
      <FlexboxLayout padding="20" height="150">
          <StackLayout width="50%" orientation="horizontal">
            <Button @tap="minus(sl)" text="-" fontSize="20" borderRadius="100%" height="40%" width="30%"/>
            <Label v-model="sl" textWrap="true" verticalAlignment="center" fontSize="20" margin="0 20"/>
            <Button @tap="plus(sl)" text="+" fontSize="20"  borderRadius="100%" height="40%" width="30%"/>
          </StackLayout>
          
          <StackLayout width="50%" verticalAlignment="center">
            <Button @tap="add(data,sl);" :text="data.gia*sl | vnd" backgroundColor="orange" borderRadius="50%"/>  
          </StackLayout>
      </FlexboxLayout>
    </StackLayout>
  </Page>
</template>
<script>
import Vue from '../../node_modules/nativescript-vue'
if (!arr_sp) var arr_sp = new Array();
import Menu from "./menu"
export default {
  props: ["data"],
  data() {
    return {
        sl:1
    };
  },
  methods: {
      minus(e){
          this.sl-=1
          if(this.sl == 0) this.sl=1
      },
      plus(e){
          this.sl += 1
      },
      add(d, f) {
      if (!arr_sp.length) {
        d.sl = 0;
        arr_sp.push(d);
      }
      if (arr_sp.every((e) => e.id != d.id)) {
        d.sl = 0;
        arr_sp.push(d);
      }

      for (var i = 0; i < arr_sp.length; i++) {
        if (arr_sp[i].id == d.id) {
          f=Number(f);
          arr_sp[i].sl += f;
        }
      }
      Vue.prototype.$tidus=arr_sp
      this.$modal.close()
      // alert(JSON.stringify(arr_sp));
    },
  },
  filters: {
    vnd: (num) => `${num} đ`,
  },
};
</script>