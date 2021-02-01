<template>
  <Page actionBarHidden="true">
    <StackLayout padding="15 15 20" borderRadius="20%">
      <GridLayout rows="120" columns="120,auto">
        <Image
          :src="data.hinh"
          stretch="fill"
          col="0"
          width="50%"

        />

        <GridLayout rows="auto,auto,auto" col="1">
          <Label
            marginLeft="10"
            fontSize="20"
            fontWeight="600"
            row="0"
            :text="data.ten"
            textWrap="true"
          />
          <Label
            margin="10"
            fontSize="20"
            row="1"
            :text="data.gia | dollars"
            textWrap="true"
          />
          <Label
            marginLeft="10"
            fontSize="20"
            row="2"
            text="like"
            textWrap="true"
          />
        </GridLayout>
      </GridLayout>
      <Label
        fontSize="20"
        fontWeight="600"
        padding="15 0"
        text="gioi thieu mon"
        textWrap="true"
      />
      <Label paddingBottom="15" fontSize="18" :text="data.mota" textWrap="true" />
      <GridLayout rows="auto" columns="150,*">
        <GridLayout rows="*" columns="*,*,*">
          <Button
            borderRadius="20%"
            height="25"
            padding="0"
            width="25%"
            col="0"
            text="-"
            @tap="minus(sl)"
            backgroundColor="yellow"
          />
          <Label textAlignment="center" verticalAlignment="center" col="1" v-model="sl" textWrap="true" />
          <Button
            borderRadius="20%"
            height="25"
            padding="0"
            width="25%"
            col="2"
            text="+"
            @tap="plus(sl)"
            backgroundColor="yellow"
            
          />
        </GridLayout>
        <Button
          borderRadius="20%"
          height="25"
          padding="0"
          width="30%"
          col="1"
          :text="data.gia * sl"
          @tap="add(data,sl)"
          backgroundColor="yellow"
        />
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import Vue from '../../node_modules/nativescript-vue'
if(!arr) var arr = new Array();
export default {
  props:["data"],
  data(){
    return{
      sl:this.data.sl?this.data.sl:1,
    }
  },
  filters: {
    dollars: (num) => `${num} đ`,
  },
  methods:{
    minus(e){
      this.sl -= 1 
      if(this.sl == 0){
        this.sl = 1
      }
    },
    plus(e){
      this.sl += 1
    },

    // data= {id:1,sl:0}
    // data={id:2,sl:0}
    // // [{id:1,sl:0},{id:2,sl:0}]

    add(data,sl){
      if(!arr.length){
        data.sl = 0
        arr.push(data)
      }
      // every hàm kiểm tra tất cả các phần tử trong arr 
      if(arr.every(e=>e.id != data.id)){
        data.sl = 0
        arr.push(data)
      }
      for(var i = 0; i < arr.length; i++){
        if(arr[i].id == data.id){
          sl = Number(sl)
          arr[i].sl = sl
        }
      } 
      Vue.prototype.$sp = arr
      this.$modal.close()
    }
  },
}
</script>